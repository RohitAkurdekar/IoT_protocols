#!/usr/bin/python3

# import modules
import json
from time import sleep
import paho.mqtt.publish as publisher
import random

# CONSTANTS
TOPIC       = 'd/cdac/telementry'
BROKER_ADDR = "broker.hivemq.com"
PORT        = 1883
KEEP_ALIVE  = 60

# variables
# Dummy device data
data = {
    "temperature"   : random.randint(1,31),
    "Humidity"      : random.randint(60,91),
    "pressure"      : random.randint(450,601),
    "location"      : "DIoT classrooom"

}


# Callback method for successful connection
def on_connect(client, userData, flags, responseCode):
    print("Connected to MQTT broker")
    publisher.subscribe(TOPIC)


# Defining callback methods in MQTT  Client
publisher.on_connect = on_connect

while True:
# Send single publish request to broker
    publisher.single(topic=TOPIC,
                    payload=json.dumps(data),
                    hostname=BROKER_ADDR,
                    port=PORT,
                    qos=2,
                    keepalive=KEEP_ALIVE)

    print("meassage: "+json.dumps(data))
    sleep(5)            # Wait for 5 seconds

    # Generate a random data using dummy device
    data = {
        "temperature"   : random.randint(1,31),
        "Humidity"      : random.randint(60,91),
        "pressure"      : random.randint(450,601),
        "location"      : "DIoT classrooom"
    }