/*
leftStart
leftStop
rightStart
rightStop
*/
var net = require('net');

function policy() {
  var xml = '<?xml version="1.0" encoding="UTF-8" ?>\n';
  xml += '<!DOCTYPE cross-domain-policy SYSTEM "http://www.adobe.com/xml/dtds/cross-domain-policy.dtd">\n';
  xml += '<cross-domain-policy>\n';
  xml += '<site-control permitted-cross-domain-policies="all" />\n';
  xml += '<allow-access-from domain="*" to-ports="*" />\n';
  xml += '<allow-http-request-headers-from domain="*" headers="*" />\n';
  xml += '</cross-domain-policy>\n';

  return xml;
}

server = net.createServer(function (socket) {
  socket.setEncoding('utf8');
  socket.write(policy() + '\0');

  function on_policy_check(data) {
    socket.removeListener('data', on_policy_check);
    socket.on('data', on_data);

    if (data == '<policy-file-request/>\0') {
      socket.write(policy());
    }
  }

  function on_data(data) {
    console.log(data);
    //socket.write(data);
  }

  socket.on('data', on_policy_check);

  socket.on('error', function (err) {
    if (socket && socket.end) {
      socket.end();
      socket.destroy();
    }
  });

  socket.on('connect', function () {

  });

  socket.on('end', function () {
    socket.end();
  });
});

server.listen(10843, '78.24.218.48');

console.log('Server running at http://78.24.218.48:10843/');

/*
var net = require('net');

var server = net.createServer(function (socket) {
  //socket.write('Echo server\r\n');
  socket.pipe(socket);
  var i = 0;
  setInterval(function () {
    //socket.write('Server response ' + i + '\n');
    socket.write('Server response ' + i);
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
