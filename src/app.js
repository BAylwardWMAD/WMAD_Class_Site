const path = require('path')
const express = require('express')
const hbs = require('hbs');

const app = express();

//Define paths for Static Content
const publicDirPath = express.static(path.join(__dirname, '../public'));
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

//Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//Register partials
hbs.registerPartials(partialPath);

//Tell express about static stuff
app.use(publicDirPath);

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/schedule', (req, res) => {
    res.render('schedule', {});
});

app.get('/weather', (req, res) => {
    res.render('weather', {});
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})