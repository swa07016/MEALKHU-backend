//jshint esversion:6
const http = require('https');
setInterval(function(){
  http.get("https://khumeal.herokuapp.com");}, 600000
  );

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
app.use(cors())


let whitelist = ['https://mealkhu-test.herokuapp.com', 'https://www.mealkhu.com']

let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}







//cors 정책 
// let corsOptions = {
//   origin: 'https://mealkhu-test.herokuapp.com', // 허용되는 Origin
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
 


// 디비 연결을 합시다.


// mongodb+srv://mealkhu:12345@cluster0.wfklg.mongodb.net/mealkhu

mongoose.connect('mongodb+srv://mealkhu:12345@cluster0.wfklg.mongodb.net/mealkhu?retryWrites=true&w=majority',{useNewUrlParser:true})

const s_diningSchema ={
  title : String,
  content: String
};

const S_dining = mongoose.model('S_dining', s_diningSchema)

const g_diningSchema = {
  title : String,
  content : String
};

const G_dining  = mongoose.model('G_dining', g_diningSchema)



// 홈 화면 (임시)
app.get('/', function(req,res){
  res.send('hello')
})

 
//국제 api
app.get('/api/global', cors(corsOptions), function (req, res, next) {
  G_dining.find(function(err, foundG_dinings){
    if(!err){
      res.send(foundG_dinings)
    }
    else {
      res.send(err)
    } 
})
});


//서울 api
app.get('/api/seoul', cors(corsOptions), function (req, res, next) {
  S_dining.find(function(err, foundS_dinings){
    if(!err){
      res.send(foundS_dinings)
    }
    else {
      res.send(err)
    } 
})
});






app.listen(port, () => console.log(`Listening on port ${port}`));