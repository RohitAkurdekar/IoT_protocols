# Program to perform simple GET request to HTTP server
import requests
import json

HOST = "http://localhost:"
PORT = "3000"
HTML_RES_PATH = "/"
JSON_RES_PATH = "/json"
DB_PATH = "/sensor/value"

# Make HTTP GET Request to Server
response = requests.get(HOST + PORT + DB_PATH)


# Printing the JSON response with inbuilt encoder
print(response.json())
print(response.status_code)