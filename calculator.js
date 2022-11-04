// All Javascript code is hidden because we are doing it on Server.

const express = require("express");
// function that represent the Express Module

const bodyParser = require("body-parser");
// Nodemon to restart server again

// install body-parser
// allow us to pass the information that we get sent from the post request.

// SIMPLE
// By using Body Parser, we are able to parse the HTTP request that
// we get, and by using urlencoded we can get access to form data

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// url_endcoded is used to grap the info that gets posted to your server from an HTML form.

// extended: true allow us to post nested objects.

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  //   give file path of current file
});

// localhost:3000
// first parameter tell route i.e, homepage /

// console.log(request);
// with this in console, whole bunch of info.
// that's packaged into this request which is
// being logged.
// /-> request triggered in home location

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

// TASK
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var result1 = w / (h * h);
  res.send("Your BMI is " + result1);
});

app.listen(3000, function () {
  console.log("Server...");
});
// tells to listen on specific port for any HTTP requests that get sent to our server.
// Nodemon file_name - don't do that end server and restart.
