const https = require("https");
const express = require("express");
const request = require("request");
const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Port is running at 3000 or on web.");
})
