/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');

var app = express();

// all environments
app.set('port', 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.urlencoded())
app.use(express.json())
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.get('/index.html', function(req, res){
  res.render('index.jade', {
    name: 'index'
  });
});

app.get('/people.html', function(req, res){
  res.render('people.jade', {
    name: 'people'
  });
});

app.get('/publications.html', function(req, res){
  res.render('publications.jade', {
    name: 'publications'
  });
});

app.get('/software.html', function(req, res){
  res.render('software.jade', {
    name: 'software'
  });
});

app.get('/openings.html', function(req, res){
  res.render('openings.jade', {
    name: 'openings'
  });
});

app.listen(app.get('port'), function() {
  console.log("Express server listening on port %d", app.get('port'));
});
