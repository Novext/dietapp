var socket = function (client) {
    console.log('Se conecto un nuevo usuario');

    client.on('init',function (data) {
        client.broadcast.emit('new user',{
            username: data.username,
            email: data.email,
            date: new Date()
        })
    });


    client.on('new message',function (data) {

    });

    client.on('typing',function () {

    })

    client.on('stop typing',function () {

    });

    client.on('disconnect',function () {
        console.log('Se desconecto el usuario : ');
    });
}

module.exports = socket;
