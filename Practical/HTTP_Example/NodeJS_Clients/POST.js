const axios = require('axios')

// Program to make a simple GET request and parse the Response Body
const HOST = "http://localhost:";
const PORT = "3000"
const PATH = "/resources/cdac/diot"

const REQUEST_BODY = {
    sensor: "temp",
    value: 23.4,
    unit: "C"
}
// Make a GET request to Server
axios.post(HOST + PORT + PATH, REQUEST_BODY)
    .then((response)=>{
        const RESPONSE_BODY  = JSON.stringify(response.data, null,2);
        console.log("Data: "+RESPONSE_BODY+". Response Code: "+ response.status)
    }).catch(error=>{
        console.log(error);
    })
