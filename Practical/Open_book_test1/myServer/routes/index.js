var express = require('express');
var router = express.Router();

let sensorname="pressure"
let sensorval=10

let LED=0

let DB = [];
/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("res rx: ", res.socket.connect.arguments);

  // Checking the header of the authorization
	var authheader=req.headers.authorization;
	console.log(authheader)
	if(!authheader){
		
		var err=new Error("You are not authenticated")
		// Set the header for the response
		res.setHeader("WWW-Authenticate",'Basic')
		err.status=401
		return next(err)
	
	}
	console.log(authheader)

	// Decrypt the user name and the password
	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	// Checking the details
	if (user == 'rohit' && pass == 'rohit') {
	res.send("Welcome you are authorized by me")
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}
  // ----------------------------------------------------------------------
  res.render('index', { title: 'CDAC IoT Protocols' });
});

// GET request with JSON object
router.get('/json',(req,res)=>{
  res.status(200).json({sensor:'Pressure', value: sensorval, unit:'kPa'})
})

router.post('/sensorval',(req,res)=>{  
  DB.push(req.body);
  // console.log(req.params);
  res.status(201).json({message:"Resource inserted"});
});

router.put('/sensorval',(req,res)=>{
  let index = req.body.index;
  sensorval = req.body.value;
  res.status(201).json({message:'Resource created'});
  console.log("put_val: ", req.body.value);

});

router.get('/sensorval',(req,res)=>{
  sensorval = Math.floor(Math.random() * (50 - 1 + 1) ) + 1;
  res.status(200).json({sensor:sensorname,value:sensorval,unit:"kPa"});
})

router.delete('/sensorval/:index',(req,res)=>{
  if(req.params){
    let index = req.params.index;
    index==0?DB.splice(0,1): DB.splice(index,index)
  } else {
    DB =[];
  }
  res.status(200).json({message:'Resources deleted'})
})

router.get('/sensor/query/:id?',(req,res)=>{
  if(req.query.id >  DB.length){
    res.status(404).json({message: "Resource not available"})  
  } else {
    const result = DB[req.query.id];
    res.status(200).json({data: JSON.stringify(result)})
  }
})

//------------ Actuator -----------------

router.get('/actuatorval',(req,res)=>{
  LED = !LED;
  res.status(200).json({"LEDstate":LED});
})


router.put('/actuatorval',(req,res)=>{
  let index = req.body.index;
  LED = req.body.value;
  console.log("LED stat: ",LED);
  if(LED)
  {
    res.status(201).json({message:'LED ON'});
  }
  else
  {
    res.status(201).json({message:'LED OFF'});
  }
  
  console.log("put_val: ", req.body.value);

});

module.exports = router;