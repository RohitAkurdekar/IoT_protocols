# Demo program tp understand JSON
import json

info = {
  "institute": "CDAC",
  "year": 2022,
  "student": True,
  "classes": ("DIoT","DAC"),
  "passout": None,
  "subjects": [
    {"name": "IoT", "duration": 2 },
    {"name": "Embedded", "duration": 1}
  ]
}

# Converts PYthon objects into JSON objects
myJSONString = json.dumps(info)

# Converts to Python Objects
myJson = json.loads(myJSONString)

# JSON String
print(type(myJson))
