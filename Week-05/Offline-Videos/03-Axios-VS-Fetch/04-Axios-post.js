const axios = require("axios");

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/2f36adfc-acb6-455d-ac66-a8a7e5d93979",{
        username:"ABC",
        password:"12345678"
    },
    {
        headers:{
            "authorization": "Bearer 123"
        },
    });
    console.log(response.data);
    
}

/*
Another way of writing the same thing:
async function main(){
    const response = await axios(
    {
        url: "https://httpdump.app/dumps/2f36adfc-acb6-455d-ac66-a8a7e5d93979",
        method: "POST"
        headers:{
                "authorization": "Bearer 123"
            },
        data:{
        username:"ABC"
        }
    }
);
    console.log(response.data);

*/

main();

