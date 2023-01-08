// Program to publish data to Broker on TOPIC
const mqtt = require('mqtt');

const HOST = 'https://broker.hivemq.com:';
const PORT = '1883';

const publisher = mqtt.connect(HOST + PORT,{
    clean:false,
    clientId:"iot001",
    will:{
        topic:'akurdekar/device/dead',
        payload:'diot001',
        qos:2,
        retain:true            
    }    
});

const TOPIC = 'akurdekar/rohit/sensor';


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

