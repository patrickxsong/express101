const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

let async = require('async');

exports.index = (req, res) => {
  async.parallel(
    {
      book_count: (cb) => {
        Book.countDocuments({}, cb); //pass an empty object as match condition to find all documents of this collection
      },
      book_instance_count: (cb) => {
        BookInstance.countDocuments({}, cb);
      },
      book_instance_available_count: (cb) => {
        BookInstance.countDocuments({ status: 'Available' }, cb);
      },
      author_count: (cb) => {
        Author.countDocuments({}, cb);
      },
      genre_count: (cb) => {
        Genre.countDocuments({}, cb);
      },
    },
    (err, results) => {
      res.render('index', {
        page: 'home',
        title: 'Local Library Home',
        error: err,
        data: results,
      });
    }
  );
};

//Display list of all books

exports.book_list = (req, res) => {
  Book.find({}, 'title author')
    .sort({ title: 1 })
    .populate('author')
    .exec((err, list_books) => {
      if (err) {
        return next(err);
      }
      res.render('index', {
        page: 'book_list',
        title: 'Book List',
        book_list: list_books,
      });
    });
};

//Display detail page for specific book

exports.book_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: book detail: ' + req.params.id);
};

//Display book create form on GET

exports.book_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: book create GET');
};

//Handle book create POST

exports.book_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: book create POST');
};

//Display book delete form on GET

exports.book_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: book delete GET');
};

//Handle book delete on POST

exports.book_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: book delete POST');
};

//Display book update form on GET

exports.book_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: book update GET');
};

//Handle book update on POST

exports.book_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: book update POST');
};
