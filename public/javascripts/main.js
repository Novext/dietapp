$(function () {
    var socket = io.connect('http://localhost:3000/chat');

    debugger;


    socket.on('init',function (data) {
        console.log('Algo se envio');
    })
})
