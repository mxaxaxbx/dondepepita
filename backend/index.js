const express        = require('express');
const cors           = require('cors');

const { dbconnection } = require('./db/db');
const storeRoutes      = require('./routes/store.router');
const productRoutes    = require('./routes/product.router');

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/stores', storeRoutes);
app.use('/api/products', productRoutes);

app.listen( process.env.PORT, () =>
    console.log("Backend server running on port: " + process.env.PORT )
);

dbconnection();
