const createError = require('http-errors');
const passport = require('passport');
const User = require('../models/User.model');


module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => next(error));
};
module.exports.detail = (req, res, next) => {
  if (req.params.id === "me") {
    return res.json(req.user);
  }

  User.findById(req.user)
    .then(user => res.status(200).json(user))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const data = { title, email, password, picture } = req.body;

  User.create({
      ...req.body,
      picture: req?.file?.path
    })
    .then((user) => res.status(201).json(user))
    .catch((error) => next(error));
  
  /*User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          next(createError(400, { errors: { email: 'This email already exists' } }))
        } else {
          return User.create({
            ...req.body,
            avatar: req?.file?.path
          })
            .then(user => res.status(201).json(user))
        }
      })
      .catch(next)*/
  }
  
  module.exports.get = (req, res, next) => {
    if (req.params.id === 'me') {
      return res.json(req.user)
    }
  
    User.findById(req.params.id)
      .then(user => res.status(200).json(user))
      .catch(next)
  }
  
  module.exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
      .then(user => res.status(204).end())
      .catch(next)
  }
  
  module.exports.update = (req, res, next) => {
    const { id } = req.params;
  
    User.findByIdAndUpdate(id, req.body, { new: true })
      .then(user => res.status(202).json(user))
      .catch(next)
  }
  
  module.exports.logout = (req, res, next) => {
    req.logout();
  
    res.status(204).end()
  }
  
  module.exports.login = (req, res, next) => {
    passport.authenticate('local-auth', (error, user, validations) => {
      console.log('error', error)
      console.log('validations', validations)
      if (error) {
        next(error);
      } else if (!user) {
        next(createError(401, { errors: validations }))
      } else {
        console.log('login')
        req.login(user, (error) => {
          if (error) next(error)
          else res.json(user)
        })
      }
    })(req, res, next);
  };
  
  module.exports.loginWithGoogle = (req, res, next) => {
    const passportController = passport.authenticate('google-auth', {
      scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
    });
  
    passportController(req, res, next);
  };
  
  module.exports.doLoginWithGoogle = (req, res, next) => {
    const passportController = passport.authenticate('google-auth', (error, user, validations) => {
      if (error) {
        next(error);
      } else {
        req.login(user, error => {
          if (error) {
            next(error)
          } else {
            res.redirect(`${process.env.REACT_APP_URL}/google/cb`)
          }
        })
      }
    });
  
    passportController(req, res, next);
  };