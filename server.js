const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers'); //No se necesita variables, al importarla de ejecuta el código de hbs
const port = process.env.PORT || 3000; //Puerto para heroku de lo contrario se usa el seteado => 3000

/* Carpeta publica todo lo que se ubique en ella va a se rde dominio publico*/
app.use(express.static(__dirname + '/public'));

/* Express HBS engine */
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

/* Todas las peticiones por "/" pasaran por esta funcion */
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Hector',
        titulo: 'Home'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        titulo: 'About'
    });
});

app.listen(port, () =>{
    console.log(`Escuchando el puerto ${port}`);
});
