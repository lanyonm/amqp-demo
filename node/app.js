var express = require('express'),
    jade = require('jade'),
    routes = require('./routes'),
    // socks = require('./app/sockets'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),
    amqp = require('amqp');

// do express stuff
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(app.router)
  .use(express.bodyParser())
  .use(express.methodOverride())
  .use(express.static(__dirname + '/public'))
  .use(express.errorHandler());

app.get('/', routes.home);

server.listen(3000, function() {
  console.log('express server has started');
});

// send number over socket
var socket;
io.sockets.on('connection', function(sock) {
  console.log('got a new socket: ' + sock);
  socket = sock;
});

function updateValue(numVal) {
  if (socket) {
    socket.emit('new-number', numVal);
  }
}

// do the AMQP stuff
var connection = amqp.createConnection({url: "amqp://guest:guest@127.0.0.1:5672"}, {defaultExchangeName: ""});

connection.on('ready', function() {
  var args = {'exclusive': true, 'autoDelete': true};

  connection.queue('', args, function(queue) {
    console.log('Queue ' + queue.name + ' is open');

    queue.bind('mike.demo', 'hello');
    queue.subscribe(function(message) {
      console.log(message.data.toString());
      updateValue(message.data.toString());
    });
  });
});
