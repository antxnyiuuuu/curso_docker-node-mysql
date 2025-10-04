require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes')
const app = express();
const port = process.env.PORT;
const jwtsecret = process.env.JWT_SECRET;
const tareasRoutes = require('./routes/tareasRoutes');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

console.log('Clave secreta:', jwtsecret);
console.log('Puerto:', port);

app.get('/', (req, res) => {
    res.send('API de back funcionando correctamente');
});
app.use('/api', tareasRoutes);
app.use('/api', authRoutes);


app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});