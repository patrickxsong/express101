const Genre = require('../models/genre');
const Book = require('../models/book');
const async = require('async');

//Display list of all genres

exports.genre_list = (req, res) => {
  Genre.find()
    .sort([['name', 'ascending']])
    .exec((err, list_genres) => {
      res.render('index', {
        page: 'genre_list',
        title: 'Genre List',
        genre_list: list_genres,
      });
    });
};

//Display detail page for specific genre

exports.genre_detail = (req, res, next) => {
  async.parallel(
    {
      genre: (cb) => {
        Genre.findById(req.params.id).exec(cb);
      },

      genre_books: (cb) => {
        Book.find({ genre: req.params.id }).exec(cb);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.genre === null) {
        // no results
        let err = new Error('Genre not found');
        err.status = 404;
        return next(err);
      }
      res.render('index', {
        page: 'genre_detail',
        title: 'Genre Detail',
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};

//Display genre create form on GET

exports.genre_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: genre create GET');
};

//Handle genre create POST

exports.genre_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: genre create POST');
};

//Display genre delete form on GET

exports.genre_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: genre delete GET');
};

//Handle genre delete on POST

exports.genre_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: genre delete POST');
};

//Display genre update form on GET

exports.genre_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: genre update GET');
};

//Handle genre update on POST

exports.genre_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: genre update POST');
};
