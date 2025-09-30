require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const jwtsecret = process.env.JWT_SECRET;


app.use(express.json());

console.log('Clave secreta:', jwtsecret);
console.log('Puerto:', port);

app.get('/', (req, res) => {
    res.send('API de back funcionando correctamente');
});



app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});