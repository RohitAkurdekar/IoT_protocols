// Program to create a CoAP client
const coap = require('coap');

const HOST = "coap://localhost:";
const PORT = "5683";
const PATH = "/DIoT";

const req = coap.request(HOST + PORT + PATH);

  req.on('response', (res) => {
    console.log(res.code)  
    res.pipe(process.stdout)
    res.on('end', () => {
      process.exit(0)
    })
  })

  req.end()