const axios = require('axios')

// Program to make a simple GET request and parse the Response Body
const HOST = "http://localhost:";
const PORT = "3000"
const DELETE_INDEX = "/0";
const PATH = "/sensor/value"+DELETE_INDEX


// Make a GET request to Server
axios.delete(HOST + PORT + PATH)
    .then((response)=>{
        const RESPONSE_BODY  = JSON.stringify(response.data);
        console.log("Data: "+RESPONSE_BODY+". Response Code: "+ response.status)
    }).catch(error=>{
        console.log(error);
    })