
const express = require("express");

const app = express();

let reqCount = 0;

function reIncreaser(req, res,next){
    reqCount = reqCount + 1;
    console.log("Total no. of requests" +reqCount );
    next();            
    /*
    res.json({
        msg:"Error"     
     })
    */
}

function  sumHandler(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a+b
    })
}
function  multiplyHandler(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a*b
    })
}

app.get("/sum",reIncreaser,sumHandler); 

app.get("/multiply",multiplyHandler);


app.listen(3000);




    



