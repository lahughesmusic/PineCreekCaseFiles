var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// app.use(express.static('public'));
// app.use(express.static('public/images'));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require('./routes/index.js')(app);
// require('./routes/user.js')(app);


app.get('/', function(req, res){
    res.render('index')
})

// app.use(express.static(path.join(__dirname, './public/stylesheets/style.css')));


app.listen(PORT, function(){
    console.log('server listenin');
})