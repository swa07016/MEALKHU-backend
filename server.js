//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require('cors');
const mongoose = require('mongoose');
const { strict } = require("assert");


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// 디비 연결을 합시다.

mongoose.connect('mongodb://localhost:27017/seoul', {useNewUrlParser:true})

const diningSchema ={
  title : String,
  content: String
};

const Dining = mongoose.model('Dining', diningSchema)

const gdiningSchema = {
  title : String,
  content : String
};

const Gdining  = mongoose.model('Gdining', gdiningSchema)






// 홈 화면 (임시)
app.get('/', function(req,res){
  res.send('hello')
})

// 서울, 국제 api 
app.get("/api/global", (req, res) => {
  Gdining.find(function(err, foundGdinings){
    if(!err){
      res.send(foundGdinings)
    }
    else {
      res.send(err)
    }
  });


});

app.get("/api/seoul", (req, res) => {
  Dining.find(function(err, foundDinings){
    if(!err){
      res.send(foundDinings)
    }
    else{
      res.send(err);
    }
  });
})





app.listen(port, () => console.log(`Listening on port ${port}`));