const express = require("express");

const app = express();

let requestCount = 0;

//middleware function
function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1;
  console.log("Total no. of requests = " + requestCount);
  if (condition) {
    res.json({
      message: "I ended the request early",
    });
  } else {
    next();
  }
}

function realSumHandler(req, res) {
  console.log("control reached the real handler");
  //main logic
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  console.log(req.name);

}

app.use(requestIncreaser); //all the endpoints after will use the middleware

app.get("/sum", realSumHandler);

app.get("/multiply", realSumHandler);

app.listen(3000);
