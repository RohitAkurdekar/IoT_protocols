// A Program to send a PUT Request
const coap = require('coap');

const req = coap.request({
    host:"192.168.77.209",
    port: 5683,
    pathname: "/naruto",
    method: 'GET'
})
req.setOption("Content-Format","application/json")
req.setOption("Block1",Buffer.alloc(0x2))
console.log(req.read(0x02)) //("{'name':'Hello'}")

  req.on('response', (res) => {
    console.log(res.code)
    res.pipe(process.stdout)
    res.on('end', () => {
      process.exit(0)
    })
  })

  req.end()