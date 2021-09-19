const express = require('express');
var app = express()
var bodyParser = require('body-parser');
app.use(express.json());
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express()
app.use('/', express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get('/',(req, res) => {
    res.send("hello i am working")
})


app.listen(process.env.PORT || port);