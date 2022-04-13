const Author = require('../models/author');
const Book = require('../models/book');
const async = require('async');
const author = require('../models/author');

//Display list of all authors

exports.author_list = (req, res) => {
  Author.find()
    .sort([['family_name', 'ascending']])
    .exec((err, list_authors) => {
      res.render('index', {
        page: 'author_list',
        title: 'Author List',
        author_list: list_authors,
      });
    });
};

//Display detail page for specific author

exports.author_detail = (req, res) => {
  async.parallel(
    {
      author: (cb) => {
        Author.findById(req.params.id).exec(cb);
      },

      author_books: (cb) => {
        Book.find({ author: req.params.id }, 'title summary').exec(cb);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.author === null) {
        let err = new Error('Author not found');
        err.status = 404;
        return next(err);
      }
      res.render('index', {
        page: 'author_detail',
        title: 'Author Detail',
        author: results.author,
        author_books: results.author_books,
      });
    }
  );
};

//Display Author create form on GET

exports.author_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create GET');
};

//Handle Author create POST

exports.author_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author create POST');
};

//Display Author delete form on GET

exports.author_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

//Handle Author delete on POST

exports.author_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

//Display Author update form on GET

exports.author_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update GET');
};

//Handle Author update on POST

exports.author_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update POST');
};
