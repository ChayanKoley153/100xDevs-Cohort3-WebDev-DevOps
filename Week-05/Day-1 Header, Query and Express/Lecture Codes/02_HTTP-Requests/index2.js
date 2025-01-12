// Question : # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply/10/20
// 2. http://localhost:3000/sum/10/10
// 3. http://localhost:3000/divide/10/5
// 4. http://localhost:3000/subtract/20/15


// Same code but in this we will be using dynamic parameters

const express = require("express");

const app = express();

app.get("/sum/:a/:b", function(req, res) {  
    const a = parseInt(req.params.a)     
    const b = parseInt(req.params.b)
    res.json({
        ans: a+b
    })

});

app.get("/multiply/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)          
    const b = parseInt(req.params.b)
    res.json({
        ans: a*b
    })
    
});

app.get("/divide/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)    
    const b = parseInt(req.params.b)
    res.json({
        ans: a/b
    })    

});

app.get("/subtract/:a/:b", function(req, res) {
    const a = parseInt(req.params.a)    
    const b = parseInt(req.params.b)
    res.json({
        ans: a-b
    })

});


app.listen(3000);