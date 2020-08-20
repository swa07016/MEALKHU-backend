//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// 홈 화면 (임시)
app.get('/', function(req,res){
  res.send('hello')
})

// 서울, 국제 api 
app.get("/api/global", (req, res) => {
  fs.readFile('db_global.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get("/api/seoul", (req, res) => {
  fs.readFile('db_seoul.json', 'utf8', (err, data) => {
    res.send(data);
  });
});


// 디비 연결을 합시다.

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


app.listen(port, () => console.log(`Listening on port ${port}`));