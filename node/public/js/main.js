var socket = io.connect('http://localhost:3000/');

socket.on('connect', function() {
  socket.on('new-number', function(message) {
    // console.log('got message: ' + message);
    $('#randNum').text(message);
  });
});
