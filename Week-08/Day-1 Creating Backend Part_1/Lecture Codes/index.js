const mongoose = require('mongoose');
const express = require('express');
const app = express();

const { userRouter } = require("./routes/user")
const {  courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

app.use("/api/v1/user", userRouter);    
app.use("/api/v1//admin", adminRouter);   
app.use("/api/v1//course", courseRouter);   


async function main(){          
    mongoose.connect("mongodb+srv://chayankoley5678:ckoley123@cluster0.oaceg.mongodb.net/app");
    app.listen(3000);       

}

main();

