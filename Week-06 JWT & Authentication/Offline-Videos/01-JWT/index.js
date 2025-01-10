const jwt = require("jsonwebtoken");

const secret_key = "hsdshshshs"

const contents = {
    "name": "harkirat",
    "accountNumber": 123123123,
    "iat": 1736488944
}

const newToken = jwt.sign(contents, secret_key)
console.log(newToken);







