const jwt = require("jsonwebtoken")
const secret_key = "sjhbsjbsj123"
const contents= {
    "name": "Rohan",
    "id": 12345678
}

const newToken = jwt.sign(contents, secret_key)
console.log(newToken);







