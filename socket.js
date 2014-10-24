var net = require('net');

var server = net.createServer(function (socket) {
  //socket.write('Echo server\r\n');
  //socket.pipe(socket);
  var i = 0;
  setInterval(function () {
    socket.write('Server response ' + i + '\r\n');
    i++;
  }, 1000);
});

server.listen(10843, '78.24.218.48');

console.log('Server running at http://78.24.218.48:10843/');
/*
setInterval(function() {
    console.log(Date.now());
    for (var i = 0; i < 100000000; i++) {
    }
}, 100);
*/
