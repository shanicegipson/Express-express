// bring express into your project
// you will need to `npm init` and `npm install express` first
const express = require('express');
const app = express();

// create your express app

// This is your array of trains
const trains = [
    { name: 'Thomas', color: 'Blue' },
    { name: 'Gordon', color: 'Blue' },
    { name: 'Henry', color: 'Green' },
    { name: 'James', color: 'Red' }
];

// -------- BASE -----//

// Create your `/train` route here
app.get('/',function (req,res) {
    res.send('Hello Shanice!');
});

app.get('/trains',function (req,res) {
    res.send(trains);
});
// when a user visits localhost:5000/train
// app.listen(5000, function(){
//     console.log('Its on!')
// });
// this route should return the array of trains


// Create your `/first-train` route here
app.get('/first-train',function (req,res) {
    res.send(trains[0]);
});
// when a user visits localhost:5000/first-train
// this route should return the first train in the array
// app.listen(5000, function(){
//     console.log('Its on!')
// });
// Create your `/last-train` route here
// when a user visits localhost:5000/last-train
// this route should return the last train in the array
app.get('/last-train',function (req,res) {
    res.send(trains[3]);
});

app.listen(5000, function(){
    console.log('Its on!')
});

// -------- STRETCH -----//

// Create your `/count` route here
app.get('/count',function (req,res) {
    let totalCount = {
    total: trains.length,
    }
    res.send(totalCount)
});
// when a user visits localhost:5000/count
// this route should return the number of trains in the array
// NOTE: express doesn't like it when you return numbers
// instead, return an object like { totalCount: 4 }


// Create your `/random` route here
// when a user visits localhost:5000/random
// this route should return a single train at random
app.get('/random',function (req,res) {
    let max = trains.length;
    let random = Math.floor((Math.random()* max )+ 0);
    res.send(trains[random]);
});

// -------- BASE -----//

// Don't forget to start your app by running `.listen()`