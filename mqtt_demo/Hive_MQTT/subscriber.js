// Program to publish data to Broker on TOPIC
const mqtt = require('mqtt');

const HOST = 'https://broker.hivemq.com:';
const PORT = '1883';

const subscriber = mqtt.connect(HOST + PORT,{
    protocolId:"MQTT",
    protocolVersion:4,
    clean:false,
    clientId:"diot002",
    qos:2
});

// MQTT Topic to Publish data to
const TOPIC = 'akurdekar/rohit/sensor';



const WILL_TOPIC = "akurdekar/device/dead"

// Event to Check BROKER connection
subscriber.on('connect',()=>{
    
    console.log("Connected to MQTT Broker!");

    // Publish the data
    subscriber.subscribe([TOPIC,WILL_TOPIC],{qos:1}, (err, granted)=>{
        if(!err){
            console.log(`Granted. Topic: ${granted[0].topic}, QoS: ${granted[0].qos}`);
        }
    });
})

subscriber.on('message',(topic,data)=>{
    console.log(`topic: ${topic} message:${data.toString()}`)
})
