import { io } from 'socket.io-client';

// Connect to the Socket.IO server
const socket = io();



// Handle client connection
socket.on("connection", (socket) => {
    console.log(socket.id); 
  });

// Handle client disconnection
socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});

console.log(socket);