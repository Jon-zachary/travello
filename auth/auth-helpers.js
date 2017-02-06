const bcrypt = require('bcryptjs');

const models = require('../server/models/index');

// compare passwords between user entry and database
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

// alerts user they are already logged in
function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    { status: 'You are already logged in!' }
  );

  return next();
}

// once user posts, creates user.. encrypting password with hash function
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email,
  })
  // .then(() => {
  //   res.redirect('/');
  // });
}

// redirect if user is not logged in
// if logged in next() is called and they are redirected to personal trips page
function loginRequired(req, res, next) {
  if (!req.user) {
    return res.status(401).json(
      { status: 'Please log in' });
    }
    return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}
