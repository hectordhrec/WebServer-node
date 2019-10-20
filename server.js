const express = require('express');
const app = express();

/* Carpeta publica todo lo que se ubique en ella va a se rde dominio publico*/
app.use(express.static(__dirname + '/public'));
/* Express HBS engine */
app.set('view engine', 'hbs');

/* Todas las peticiones por "/" pasaran por esta funcion */
app.get('/', (req, res) => {
    //res.send('Hola mundo');

    res.render('home', {
        nombre: 'Hector',
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () =>{
    console.log('Escuchando el puerto 3000');
});
