import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        onBookRead: function(book) {
            console.log('index.onBookRead: ' + book.get('read'));
            //book.save()
        }
    }
});
