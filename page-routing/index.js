const express = require('express');
const fs = require('fs');
const app = express();
// const createHtmlFiles = require('./filetest');
// createHtmlFiles()
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/home.html')
    // res.send("Hello from express");
})
app.get('/bola', (req, res) => {
    res.sendFile(__dirname + '/html/bola.html')
    // res.send("this page is about football");
})

app.get('/tren', (req, res) => {
    res.sendFile(__dirname + '/html/tren.html')
})

app.get('/health', (req, res) => {
    res.sendFile(__dirname + '/html/health.html')
})

app.get('/food', (req, res) => {
    res.sendFile(__dirname + '/html/food.html')
})

app.get('/edukasi', (req, res) => {
    res.sendFile(__dirname + '/html/edukasi.html')
})

app.get('/inspirasi', (req, res) => {
    res.sendFile(__dirname + '/html/inspirasi.html')
})
app.get('/money', (req, res) => {
    res.sendFile(__dirname + '/html/money.html')
})
app.get('/techno', (req, res) => {
    res.sendFile(__dirname + '/html/techno.html')
})
app.get('/lifestyle', (req, res) => {
    res.sendFile(__dirname + '/html/lifestyle.html')
})

// app.post('/', (req, res) => {
//     res.send("Hello from express-post");
// })

// app.patch('/', (req, res) => {
//     res.send("Hello from express-patch");
// })

app.listen(5000, () => {
    console.log('your server run in port: 5000')
})