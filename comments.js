// create package.json
// create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
  let drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ];
  let tagline = 'Any code of your own that you haven\'t looked at for six or more months might as well have been written by someone else.';
  res.render('pages/index', {
    drinks: drinks,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
