## Intro
This project is meant to be a simple AMQP demo to show how you can easily send messages between languages using AMQP.  The demo uses RabbitMQ for AMQP and borrows heavily from Rob Harrop's demo given at the What's Next conference in 2011 ([link](http://www.infoq.com/presentations/Multi-Platform-Messaging-with-RabbitMQ)) and ([link](https://github.com/robharrop/presentations)).

All the publishers and consumers herein expect an AMQP compliant server like RabbitMQ to be running on localhost:5672 using guest/guest.  The web UI will be located at http://localhost:15672/.

## RabbitMQ
Find installation and running instructions [here](http://www.rabbitmq.com/download.html).  I installed the RabbitMQ via Homebrew and ran it via ``rabbitmq-server`` with the default configurations.
