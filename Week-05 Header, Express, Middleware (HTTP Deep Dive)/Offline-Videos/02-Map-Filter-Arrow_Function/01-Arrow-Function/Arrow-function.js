function sum(a,b) {         //Normal Function
    return a+b
}

const sum =(a,b) => {       //Arrow Function
    return a+b
}

app.get("/", function(req , res ){      //Normal function in get route

})

app.get("/", (req, res) => {            //Arrow function in the get route

})

