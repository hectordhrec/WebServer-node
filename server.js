const express = require('express');
const app = express();

/* Todas las peticiones por "/" pasaran por esta funcion */
app.get('/', (req, res) => {
    //res.send('Hola mundo');

    let salida = {
        nombre: 'hector',
        edad: 29,
        url: req.url
    }
    res.send(salida);
});

app.listen(3000, () =>{
    console.log('Escuchando el puerto 3000');
});
