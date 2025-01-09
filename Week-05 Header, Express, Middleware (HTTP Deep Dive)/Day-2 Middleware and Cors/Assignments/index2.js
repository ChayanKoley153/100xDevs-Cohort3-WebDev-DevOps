/*
Assignments on middleware:
Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
*/

const express = require("express");

const app = express();

let reqCount = 0;

function totalReq(req, res, next) {
  reqCount = reqCount + 1;
  next();
}

app.use(totalReq);

app.get("/requestCount", function (req, res) {
  res.send({
    totalRequests: reqCount,
  });
});

app.get("/asd", function (req, res) {
  res.send("Hello");
});

app.listen(3000);
