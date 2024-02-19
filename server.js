const express = require('express')
const bodyParser = require('body-parser');
const db = require('./utils/db')
const { sequelize } = require('./utils/db');
const todoRoutes = require('./routes/todoRoute')

// Middlewares
const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('/images'));

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('----- Connection established successfully -----');
        await sequelize.sync();
        console.log('----- All models were synchronized successfully -----');
    } catch (err) {
        console.error('----- Unable to connect to the database -----', err);
    }
};

connectDB();

app.use('/', todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));