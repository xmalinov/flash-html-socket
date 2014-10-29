/*
leftStart
leftStop
rightStart
rightStop
*/

var server = require('http').createServer();
var io = require('socket.io')(server);


io.on('connection', function (socket) {
  var ID = (socket.id).toString().substr(0, 5);
  var time = (new Date).toLocaleTimeString();
  console.log('connected ' + ID + '; at ' + time);

  //socket.emit('news', {hello: 'world'});

  //socket.emit('message', "this is a test");

  /*
  setInterval(function () {
    socket.emit('date', {
      'date': new Date()
    });
  }, 1000);
*/
  socket.on('webGamepadClick', function (data) {
    socket.broadcast.emit('commandToFlash', data);
    console.log(data);
  });

  socket.on('event', function (data) {});

  socket.on('data', function (data) {
    console.log('data from flash: ', data);
    socket.emit('data', 'hello');
  });

  socket.on('disconnect', function (socket) {
    console.log('disconnect');
  });

});


server.listen(10843, function () {
  console.log('Server running at http://78.24.218.48:10843 since ' + new Date());
});
