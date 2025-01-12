const express = require("express");
const { UserModel, TodoModel } = require("./db");
const app = express()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "bjkdbkjbd123";
const mongoose = require("mongoose");
const {z} = require("zod");                    

mongoose.connect("mongodb+srv://chayankoley5678:ckoley123@cluster0.oaceg.mongodb.net/chayan-todo-333");


app.use(express.json())                     

app.post("/signup", async function(req, res){

    const requiredBody = z.object({ 
        email : z.string().min(3).max(100).email(),              
        name : z.string().min(3).max(100),
        password : z.string().min(3).max(100)
    }) 

    const parsedDataSuccess = requiredBody.safeParse(req.body);  

    if(!parsedDataSuccess.success){                    
        res.json({
            message: "Incorrect Format",
            error: parsedDataSuccess.error            
        })
        return
    }

    const email = req.body.email;              
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;
    try{                          
        const hashedPassword = await bcrypt.hash(password, 5)  
    
        await UserModel.create({   
            email: email,
            password: hashedPassword,
            name: name
        });
    }catch(e){
        res.json({
            "message": "User already exist!"
        });
        errorThrown = true
    }

    if(!errorThrown){
        res.json({
            "message": "You are signed up!"
        });
    }    
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({    
        email: email
    })
    const passwordMatch = await bcrypt.compare(password, user.password); 

    if(!user){
        res.status(403).json({
            "message": "User not found in database"
        })
        return
    }

    if(passwordMatch){                               
        const token = jwt.sign({
            id: user._id.toString()               
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});


app.post("/todo", auth, async function(req, res){     
    const userId = req.userId;                
    const title = req.body.title                    
    await TodoModel.create({                      
        title,                                       
        userId,
        done
    })
    res.json({
        message: "Todo created!"
    })
});

app.get("/todos", auth, async function(req, res){      
    const userId = req.userId;                     
    
    const todos = await TodoModel.find({          
        userId
    })
    
    res.json({
        todo                                               
    })

});

function auth(req, res, next){                          
    const token = req.headers.token

    const decodedData = jwt.verify(token, JWT_SECRET)

    if(decodedData){
        req.userId = decodedData.id;                       
        next();
    }
    else{
        req.status(403).json({
            message: "Incorrect Credentials !"
        })
    }
}


app.listen(3000);



