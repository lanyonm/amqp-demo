## Node.js
The Node.js client uses the [amqp module](https://npmjs.org/package/amqp) and [socket.io](https://npmjs.org/package/socket.io).

#### Running

    node app.js

or

    nohup node app.js &

#### Supervisor
You may find that running the Node process with [Supervior](https://npmjs.org/package/supervisor) is helpful during development.  Here's a sample command:

    supervisor --watch . --extensions "node|js|jade" app.js
