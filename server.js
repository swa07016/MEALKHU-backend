//jshint esversion:6

const http = require('http')

//heroku 깨어주기
setInterval(function(){
  http.get('http://khumeal.herokuapp.com')
},600000) //every 10 minutes

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
// const cors = require('cors');
const mongoose = require('mongoose');
const { strict } = require("assert");


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())




// let corsOptions = {
//   origin: 'http://localhost:4000/', // 허용되는 Origin
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
 
// app.get('/api/se', cors(corsOptions), function (req, res, next) {
//   G_dining.find(function(err, foundG_dinings){
//     if(!err){
//       res.send(foundG_dinings)
//     }
//     else {
//       res.send(err)
//     }
  
  
// })
// })








// 디비 연결을 합시다.

mongoose.connect('mongodb+srv://mealkhu:12345@cluster0.wfklg.mongodb.net/mealkhu', {useNewUrlParser:true})

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

// 국제 api 
app.get("/api/global",  (req, res) => {
  G_dining.find(function(err, foundG_dinings){
    if(!err){
      res.send(foundG_dinings)
    }
    else {
      res.send(err)
    }
  });


});
//서울 api
app.get("/api/seoul", (req, res) => {
  S_dining.find(function(err, foundS_dinings){
    if(!err){
      res.send(foundS_dinings)
    }
    else{
      res.send(err);
    }
  });
})





app.listen(port, () => console.log(`Listening on port ${port}`));