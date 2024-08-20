const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;
const router = require('./back/route/rutas');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/front/views/pages'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'front/static')));


// Usar las rutas importadas
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Conectado en el puerto ${PORT}`);
});
