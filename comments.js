// Create web server
const express = require('express');
const app = express();
// Create web server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// Create a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/about', (req, res) => {
    res.send('This is the about page');
});
app.get('/contact', (req, res) => {
    res.send('This is the contact page');
});
app.get('/services', (req, res) => {
    res.send('This is the services page');
});
app.get('/portfolio', (req, res) => {
    res.send('This is the portfolio page');
});
app.get('/blog', (req, res) => {
    res.send('This is the blog page');
});
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});