
require 'httparty'
require 'json'

$count = 1

class PeopleService
    include HTTParty

    base_uri "https://openlibrary.org/people"

    def self.list list, cat_id, result
      response = get("/#{list}/export?format=json", default_options)

      if(response.code != 200)
        return
      end

      books = response.parsed_response

      books['editions'].each do |book|
        description = book['title']
        if book.has_key? 'description'
          description = book['description']['value']
        end
        id, num = nil
        if book.has_key? 'oclc_number'
          id = 'oclc'
          num = book['oclc_number'][0]
        elsif book.has_key? 'isbn_13'
          id = 'isbn'
          num = book['isbn_13'][0]
        elsif book.has_key? 'isbn_10'
          id = 'isbn'
          num = book['isbn_10'][0]
        elsif book.has_key? 'lccn'
          id = 'lccn'
          num = book['lccn'][0]
      elsif book.has_key? 'oclc_numbers'
            id = 'oclc'
            num = book['oclc_numbers'][0]
        end

        result.push({
          'id' => $count,
          'type' => 'book',
          'attributes' => {
              'title' => book['title'],
              'description' => description,
              'image' => "http://covers.openlibrary.org/b/#{id}/#{num}-L.jpg",
              'read' => false,
              'category' => (cat_id + 1)
          },
          'relationships' => {
              'category' => {
                'id' => (cat_id + 1),
                'type' => 'category'
              }
          }
          })
          $count = $count + 1
      end
    end

    private

    default_options = {
        body: {}
    }
end

book_lists = [
  'MyaMya/lists/OL98784L/Music',
  'prejean1983/lists/OL98536L/Masters_of_the_Weird_Tale',
  'EshrektOgre/lists/OL98222L/H._G._Wells',
  'bradybunch84/lists/OL83853L/Nature'
]

categories = [
    'Music',
    'Mistery',
    'Scifi',
    'Nature'
]

result = []

book_lists.each_with_index do |l , index|
  PeopleService.list l, index, result
end

File.open("books.json", 'w') do |f|
  f.puts result.to_json
end
