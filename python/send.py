#!/usr/bin/env python
import pika
import sys
import time

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='mike.demo', type='fanout')

message = ' '.join(sys.argv[1:]) or "info: Hello World!"

while True:
    channel.basic_publish(exchange='mike.demo', routing_key='', body=message)
    time.sleep(.5)

connection.close()
