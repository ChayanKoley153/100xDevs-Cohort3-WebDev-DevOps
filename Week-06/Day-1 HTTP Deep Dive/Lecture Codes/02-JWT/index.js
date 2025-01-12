const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomabc";                         
const app = express();

app.use(express.json())

const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.send({
        message:"You have signed up"
    })    
});


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;                               

    for (let i = 0; i < users.length; i++) {     
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]                       
        }
    }
    if(foundUser){
        const token = jwt.sign({                   
            username: username                
        }, JWT_SECRET);

        res.json({
            token: token,
            message: "Signed in"
        })
    }
    else{                                   
        res.status(403).send({
            message:"Invalid username or password"
        })
    }    
});

app.get("/me", function(req,res){        
    
    const token = req.headers.token          

    const decodedInformation = jwt.verify(token, JWT_SECRET);  
    const username = decodedInformation.username;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if(users[i].username == username){
            foundUser = users[i]
        }            
    }
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.json({
            message:"Token Invalid"
        })
    }
});

app.listen(3000);



