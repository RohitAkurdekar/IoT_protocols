// A Program to send a PUT Request
const coap = require('coap');

const req = coap.request({
    host:"127.0.0.1",
    port: 5683,
    pathname: "/well-known/core",
    method: 'GET'
})
req.setOption("Content-Format","application/json")
req.setOption("Block1",Buffer.alloc(0x2))
req.write("{'name':'Hello'}")

  req.on('response', (res) => {
    console.log(res.code)
    res.pipe(process.stdout)
    res.on('end', () => {
      process.exit(0)
    })
  })

  req.end()