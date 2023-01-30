// Program to start a CoAP Server
const coap = require('coap')
const server = coap.createServer()

server.on('request', (req, res) => {
  console.log(req.code);
  res.end('Hello ' + req.url.split('/')[1] + '\n')
})

// the default CoAP port is 5683
server.listen(() => {
  console.log("My CoAP server is running...")
})