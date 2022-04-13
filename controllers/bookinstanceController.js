const BookInstance = require('../models/bookinstance');

//Display list of all bookinstances

exports.bookinstance_list = (req, res) => {
  BookInstance.find()
    .populate('book')
    .exec((err, list_bookinstances) => {
      if (err) {
        return next(err);
      }
      res.render('index', {
        page: 'bookinstance_list',
        title: 'Book Instance List',
        bookinstance_list: list_bookinstances,
      });
    });
};

//Display detail page for specific bookinstance

exports.bookinstance_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: bookinstance detail: ' + req.params.id);
};

//Display bookinstance create form on GET

exports.bookinstance_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: bookinstance create GET');
};

//Handle bookinstance create POST

exports.bookinstance_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: bookinstance create POST');
};

//Display bookinstance delete form on GET

exports.bookinstance_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: bookinstance delete GET');
};

//Handle bookinstance delete on POST

exports.bookinstance_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: bookinstance delete POST');
};

//Display bookinstance update form on GET

exports.bookinstance_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: bookinstance update GET');
};

//Handle bookinstance update on POST

exports.bookinstance_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: bookinstance update POST');
};
