const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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


app.listen(port, () => console.log(`Listening on port ${port}`));