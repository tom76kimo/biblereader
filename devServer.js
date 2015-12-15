var path = require('path');
var express = require('express');
var webpack = require('webpack');
var session = require('express-session')
var config = require('./webpack.config.dev');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleLogginData = require('./googleLogginData');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/css', express.static('css'));

app.use(session({
    secret: 'tom76kimo',
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy({
    clientID: googleLogginData.client_id,
    clientSecret: googleLogginData.client_secret,
    callbackURL: googleLogginData.redirect_uris[0],
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/plus.login' }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
app.get('*', function(req, res) {
    // console.log('===user', req.user);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4080, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4080');
});
