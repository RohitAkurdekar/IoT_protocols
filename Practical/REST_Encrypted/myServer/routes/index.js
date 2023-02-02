var express = require('express');
var axios = require('axios');
var router = express.Router();
var jwt = require('jsonwebtoken');


// Addition server details
const HOST = "http://localhost:";
const PORT = "3001"
const PATH = "/add"

REQUEST_BODY = {
  num1:0,
  num2:0
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('user.html', { root: __dirname });
});


// ----------------------------------------------------------------
// Receives two integer numbers from REST api [FORM_HTML]
// Forwards same data to addition server
// Displays result received from server
// ----------------------------------------------------------------
router.post('/add',(req,res)=>{

  // console.log(req.body);
  REQUEST_BODY = req.body;

  const token = jwt.sign(
    REQUEST_BODY,
    "my_secret_key",
    {
      expiresIn: "1h",
    }
  );

    console.log("tok: ",token);

    encData = {data:token}

  axios.post(HOST + PORT + PATH, (encData))
   .then((response)=>{
       const RESPONSE_BODY  = JSON.stringify(response.data, null,2);
       console.log("Data: "+RESPONSE_BODY+". Response Code: "+ response.status);
      
        mydata = jwt.verify(RESPONSE_BODY,"my_secret_key1");

      console.log("md: ",mydata);

      // res.render('index', { body: mydata});
      res.status(200).send(mydata);
      // res.status(200).send(RESPONSE_BODY);
   }).catch(error=>{
       console.log(error);
   })

});

module.exports = router;
