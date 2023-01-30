# Program to perform simple GET request to HTTP server
import requests
import json

HOST = "http://localhost:"
PORT = "3000"
PATH = "/sensor/query"

REQUEST_QUERY = {
    "id": 1
}

response = requests.get(HOST + PORT + PATH, params=REQUEST_QUERY)

print(response.json())