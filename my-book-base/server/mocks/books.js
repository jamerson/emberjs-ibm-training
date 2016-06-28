/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();
  var books = require('./books.json');
  var categories = [
      {"id":1,
      "type":"category",
      "attributes": {
          "name":"Music"
      }
      },
      {"id":2,
      "type":"category",
      "attributes": {
          "name":"Mistery"
      }},
      {"id":3,
      "type":"category",
      "attributes": {
          "name":"Scifi"
      }},
      {"id":4,
      "type":"category",
      "attributes": {
          "name":"Nature"
      }}
  ];

  booksRouter.get('/', function(req, res) {
    res.send({
        'data': books,
        'included': categories
    });
  });

  booksRouter.post('/', function(req, res) {
    res.status(201).end();
  });
  booksRouter.patch('/:id', function(req, res) {
    //var id = req.params.id;
    //res.status(200).end();
    console.log(req.body);
    res.send({'data':[{'id':'2','type':'books', 'attributes':{}}]});
  });

  booksRouter.get('/:id', function(req, res) {

    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/books', require('body-parser').json());
  app.use('/api/books', booksRouter);
};
