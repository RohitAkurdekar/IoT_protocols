#!/usr/bin/python3
import logging
import asyncio

from aiocoap import *

logging.basicConfig(level=logging.INFO)

async def main():
    HOST = "coap://localhost:"
    PORT = "5683"
    PATH = "/whoami"            #.well-known/core

    protocol = await Context.create_client_context()

    request = Message(code=GET, uri=HOST+PORT+PATH)

    try:
        response = await protocol.request(request).response
    except Exception as e:
        print('Failed to fetch resource:')
        print(e)
    else:
        print('Result: %s\n%r'%(response.code, response.payload))

if __name__ == "__main__":
    asyncio.run(main())
