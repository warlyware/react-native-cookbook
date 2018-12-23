const port = 3001;
const WebSocketServer = require('ws').Server;
const server = new WebSocketServer({ port });

server.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log('received: %s', message);

    server.clients.forEach(client => {
      if (client !== socket) {
        client.send(message);
      }
    });
  });
});

console.log(`Web Socket Server running on port ${port}`);