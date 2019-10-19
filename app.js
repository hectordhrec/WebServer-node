const http = require('http');

http.createServer((req, res) => {
    //Aqui se envia o se desplega una pagina web
    /* res.write('Hola mundo');
    res.end(); */

    //Se envia o se desplega un JSON
    res.writeHead(200,{'Content-Type':'application/json'});
    let salida = {
        nombre: 'hector',
        edad: 29,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');