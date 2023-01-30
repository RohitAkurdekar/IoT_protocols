// Program to publish data to Broker on TOPIC
const mqtt = require('mqtt');

const HOST = 'mqtt://localhost:';
const PORT = '1883';

const publisher = mqtt.connect(HOST + PORT,{
    clean:false,
    clientId:"diot001",
    username:'diot',
    password:'diot',
    will:{
        topic:'cdac/device/dead',
        payload:'diot001',
        qos:2,
        retain:true            
    }    
});

// MQTT Topic to Publish data to
// const TOPIC = 'cdac/sensor1/diot';
// const TOPIC = 'cdac/sensor2/diot';
// const TOPIC = 'cdac/sensor3/abc/diot';
const TOPIC = 'cdac/rohit/sensor';


// Event to Check BROKER connection
publisher.on('connect',()=>{
    
    console.log("Connected to MQTT Broker!");

    let counter = 0;
    const loop = setInterval(()=>{
        counter++;
        // Publish the data
        publisher.publish(TOPIC,'{"sensor":24.5}',{
            qos : 2
        },(err)=>{
            if(!err)
            {            console.log("Message published");            }
            
        })
        if(counter==5)
        {
            clearInterval(loop);
            //process.exit()
            publisher.end();
        }

    },1000);

})

