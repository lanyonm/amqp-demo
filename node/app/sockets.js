var io;

var sockets = module.exports = {
  listen: function (app) {
    io = require('socket.io').listen(app),
    io.sockets.on('connection', function (socket) {
      console.log('socket connection established');
    });
  },
  updateValue: function (num) {
    io.sockets.on('connection', function (socket) {
      socket.emit('new-number', num);
    });
  }
};
