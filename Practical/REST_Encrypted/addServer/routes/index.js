const { json } = require('express');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arithmetic server' });
});

// ----------------------------------------------------------------
// receives two numbers on POST api
// returns sum of those number
// ----------------------------------------------------------------
router.post('/add',(req,res)=>{

  console.log(req.body.data)

  mydata = jwt.verify(req.body.data,"my_secret_key");

  console.log("md: ",mydata)

  sum=parseInt(mydata.num1)+parseInt(mydata.num2);

  myResult = "{sum:"+sum+"}";

  console.log(myResult);

  // Working good till here

  const token = jwt.sign(
    myResult,
    "my_secret_key1",
    {
      expiresIn: "2h",
    }
  );

/* 
  const token = jwt.sign(
    REQUEST_BODY,
    "my_secret_key",
    {
      expiresIn: "1h",
    }
  );
 */

  console.log("mahtok: ",token);
  res.status(200).send(myResult);
});


module.exports = router;
