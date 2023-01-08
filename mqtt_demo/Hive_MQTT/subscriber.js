// Program to publish data to Broker on TOPIC
const mqtt = require('mqtt');

const HOST = 'https://broker.hivemq.com:';
const PORT = '1883';

const subscriber = mqtt.connect(HOST + PORT,{
    protocolId:"MQTT",
    protocolVersion:4,
    username:'diot',
    password:'diot',
    clean:false,
    clientId:"diot002",
    qos:2
});

// MQTT Topic to Publish data to
// const TOPIC = 'cdac/diot';
//  const TOPIC = 'cdac/#';   // Read all topics from publisher/broker starting from cdac
 
const TOPIC = 'cdac/rohit/sensor';


//const TOPIC = 'cdac/+/diot';
const WILL_TOPIC = "cdac/device/dead"

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