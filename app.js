const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')



//config app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.static(path.join(__dirname, 'bower_components'))); //order matters here.
app.use(bodyParser());



//define routes

var toDoItems = [
	{id: 1, desc: 'foo'},
	{id: 2, desc: 'bar'},
	{id: 3, desc: 'man'}
];	

app.get('/', function (req, res){
	// load data from db here
	res.render('index', {
		title: 'My App',
		items: toDoItems
	});
});

app.post('/add', function (req, res){
	var newItem = req.body.newItem;

	toDoItems.push({
		id: toDoItems.length + 1,
		desc: newItem
	});

	res.redirect('/');

});

app.listen(3000, () => console.log('The app is running!!'))