## Java
The Java client uses the [RabbitMQ Client Library](http://www.rabbitmq.com/java-client.html).  The Java portions of this repo were heavily lifted from the [RabbitMQ Tutorials](http://www.rabbitmq.com/tutorials/).

#### Compiling
This command is run from ``amqp/java/``

    javac -cp lib/rabbitmq-client.jar Send.java Recv.java

#### Running
This command is run from ``amqp/java/``

    java -cp .:lib/commons-io-1.2.jar:lib/commons-cli-1.1.jar:lib/rabbitmq-client.jar Recv
    java -cp .:lib/commons-io-1.2.jar:lib/commons-cli-1.1.jar:lib/rabbitmq-client.jar Send
    
A helpful hint for running is to store the classpath as a variable and refer back to it:

    export CP=.:lib/commons-io-1.2.jar:lib/commons-cli-1.1.jar:lib/rabbitmq-client.jar
    java -cp $CP Recv
    java -cp $CP Send
