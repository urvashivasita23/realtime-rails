var io = require('socket.io')(),
    redis = require('redis').createClient();

redis.subscribe('rt-change');
io.on('connection', function(socket){
  redis.on('message', function(channel, message){
    socket.emit('rt-change', JSON.parse(message));
  });
});
io.listen(5001)