const express = require("express");
const app = express();

const allData = require('./data/chefsData.json')

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello from my server')
})

app.get('/alldata', (req, res) => {
    res.send(allData)
})


app.listen(port, () => {
    console.log(`my server is running ${port}`)
})
