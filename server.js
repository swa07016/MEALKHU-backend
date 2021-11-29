//jshint esversion:6

// heroku 주기적으로 깨어주기 
const https = require('https');
setInterval(function(){
  https.get("https://khumeal.herokuapp.com");}, 600000
  );

  // express 모듈, 비동기 함수, cors, mongoose 이용  
const express = require("express");
const asyncify = require('express-asyncify');
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require('cors');
const mongoose = require('mongoose');
const { strict } = require("assert");


const app = asyncify(express());
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


// cors 허용 사이트 
let whitelist = ['https://mealkhu-test.herokuapp.com', 'https://www.mealkhu.com',]

let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}



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



// 홈 화면 
app.get('/',function (req, res) {

  res.send('Hello')
}
)


//국제 api
app.get('/api/global', cors(corsOptions), async function (req, res, next) {
  await G_dining.find(function(err, foundG_dinings){
    if(!err){
      res.send(foundG_dinings)
    }
    else {
      res.send(err)
    } 
})
});


//서울 api
app.get('/api/seoul', cors(corsOptions), async function (req, res, next) {
  await S_dining.find(function(err, foundS_dinings){
    if(!err){
      res.send(foundS_dinings)
    }
    else {
      res.send(err)
    } 
})
});




app.listen(port, () => console.log(`Listening on port ${port}`));