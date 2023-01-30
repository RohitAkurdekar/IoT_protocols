# Program to perform simple GET request to HTTP server
import requests
import json

HOST = "http://localhost:"
PORT = "3000"
PATH = "/sensor/value"
REQUEST_BODY = {
    "sensor": "humidity",
    "value": 44,
    "unit": "F"
}

response = requests.post(HOST + PORT + PATH, REQUEST_BODY)

print(response.json())