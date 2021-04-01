
const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);
    
    // client.on('event', data => { /* … */ });
    
    socket.on('disconnect', () => { 
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
        console.log('Escucho que intentan mandarme algo:', payload);

        // Le voy a mandar a todos los clientes conectados
        //this.io.emit('enviar-mensaje', payload);
        socket.broadcast.emit('enviar-mensaje', payload);

        const id = 1212;
        callback(id);
    });


}

module.exports = {
    socketController
}