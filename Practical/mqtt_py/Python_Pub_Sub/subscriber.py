#!/usr/bin/python3

import json
import paho.mqtt.client as mqtt

# To subscribe
subscriber = mqtt.Client()

# CONSTANTS
TOPIC       = 'd/cdac/telementry'
BROKER_ADDR = "broker.hivemq.com"
PORT        = 1883
KEEP_ALIVE  = 60

# Method to operate on a received data
def display_msg(data):
    RxdData = json.loads(data)

    if(RxdData["temperature"]> 22 and RxdData["temperature"]< 26):
        print("This is optimal temperature for living.")
    if(RxdData["temperature"]< 22 ):
        print("Turning off AC.")
    if(RxdData["temperature"]> 27 and RxdData["temperature"]<= 30):
        print("Turning on AC.")

    print("\n----------------------------------\n")
    


# Callback method for successful connection
def on_connect(client, userData, flags, responseCode):
    print("Connected to MQTT broker")
    subscriber.subscribe(TOPIC)

# Callback method to print recieved message
def on_message(client,userData, msg):
    my_data= {  "data":msg.payload    }
    print('Topic: ' + msg.topic + ' Message: ' + str(msg.payload))
    display_msg(msg.payload)


# Defining callback methods in MQTT  Client
subscriber.on_connect = on_connect
subscriber.on_message = on_message

# Send connection request to broker
subscriber.connect(host=BROKER_ADDR,port=PORT,keepalive=KEEP_ALIVE)

# To maintain the connection
subscriber.loop_forever()