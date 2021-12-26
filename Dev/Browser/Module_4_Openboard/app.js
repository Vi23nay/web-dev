const express = require('express');//access
const socket = require('socket.io');

const app = express();//initialize and server ready

app.use(express.static("public"));

let port = 5000;
let server = app.listen(port, () => {
    console.log('Listening to port ' + port);
});

let io = socket(server);
//on -> eventListener
io.on("connection", (socket) => {
    console.log("established socket connection");
});
