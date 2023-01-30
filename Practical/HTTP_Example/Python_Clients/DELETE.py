# Program to perform simple GET request to HTTP server
import requests
import json

HOST = "http://localhost:"
PORT = "3000"
PATH = "/sensor/value"
DELETE_INDEX = "/0"

response = requests.delete(HOST + PORT + PATH + DELETE_INDEX)

print(response.json())