const express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// use res.render to load up an ejs view file
app.get('/', function(req, res) {
    
    // this will render the welcome page
    res.render('pages/welcome');
});

// Community page 
app.get('/community', function(req, res) {
    
    // this will render the community  
    res.render('pages/community');
});


// stores page 
app.get('/stores', function(req, res){
    
    // this will render the stores page
    res.render('pages/stores');
});
    

// recipes page 
app.get('/recipes', function(req, res) {

    
    // this will reder the recipes page
    res.render('pages/recipes');
});



app.listen(8080);
console.log('8080 is the port that leads to the Vegetarian Website');