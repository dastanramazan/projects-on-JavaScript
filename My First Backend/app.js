const express = require('express');
const app = express();
const port = 8080;
const basicAuth = require('express-basic-auth');

// Part 1
app.get('/', (req, res) => {
    const songs = ["New York, New York", "Baubles, Bangles and Beads", "Barbara", "Black", "Blue", "Catana", 
    "Crazy Love", "Dolores", "Dindi", "Exodus", "All Alone", 
    "All of Me","All the Way", "Always", "Anything", "April in Paris", "Around the World", "As You Desire Me", 
    "At Long Last Love", "Available"];
    const randomSong = Math.floor(Math.random() * songs.length);
    res.send(songs[randomSong]);
});

// Part 2
app.get('/birth_date', (req, res) => {
    res.send('12 december 1915');
});

app.get('/picture', (req, res) => {
    res.send(`<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg">`);
});

app.get('/birth_city', (req, res) => {
    res.send('Hoboken, New Jersey');
});

app.get('/wives', (req, res) => {
    const wives = ['Nancy Barbato',
              'Ava Gardner',
              'Mia Farrow',
              'Barbara Marx'];
    res.send(wives.join(', '))
});


// Part 3


app.get('/public', (req, res) => {
    res.send('Everybody can see this page');
});

app.use(basicAuth({
    users: {
        'admin': 'admin'
    },
    unauthorizedResponse: (req) => {
        return '401 Not authorized\n';
    }
}))

app.get('/protected', (req, res) => {
    res.send('Welcome, authenticated client\n');
});

app.listen(port, () => {
    console.log(`Example app listening at http://web-hcf0f6383-6663.docode.qwasar.io`);
});
