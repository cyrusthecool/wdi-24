var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {

  async.parallel({
    book_count: function (callback) {
      Book.count(callback);
    },
    book_instance_count: function (callback) {
      BookInstance.count(callback);
    },
    book_instance_available_count: function (callback) {
      BookInstance.count({status: 'Available'}, callback);
    },
    author_count: function (callback) {
      Author.count(callback);
    },
    genre_count: function (callback) {
      Genre.count(callback);
    }
  }, function (err, results) {
    res.render('index', {data: results});
  });

}

exports.book_list = function(req, res) {
  res.send('Book list coming soon');
};

exports.book_detail = function(req, res) {
  res.send('Book detail coming soon');
};

exports.book_create_get = function(req, res) {
  res.send('Book create GET coming soon');
};

exports.book_create_post = function(req, res) {
  res.send('Book create POST coming soon');
};

exports.book_delete_get = function(req, res) {
  res.send('Book delete GET coming soon');
};

exports.book_delete_post = function(req, res) {
  res.send('Book delete POST coming soon');
};

exports.book_update_get = function(req, res) {
  res.send('Book update GET coming soon');
};

exports.book_update_post = function(req, res) {
  res.send('Book update POST coming soon');
};
