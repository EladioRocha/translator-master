const express = require('express');
const morgan = require('morgan');
const path = require('path');

// ========== CONSTANTS ========== //
const app = express();
const publicPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');
const routesPath = require(path.join(__dirname, 'routes', 'index')); 

// ========== SETTINGS ========== //
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', viewsPath);

// ========== MIDDLEWARE ========== //
app.use(express.static(publicPath));
app.use('/', routesPath);

app.listen(app.get('port'), () => {
    console.log('SERVER ON')
})