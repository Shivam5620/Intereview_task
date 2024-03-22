const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./Route/productRoute');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/products', productRoutes);

mongoose.connect('mongodb+srv://Cvambirla:EjKQwRByPGvblx5T@cluster0.3wxz5ja.mongodb.net/CRUD', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err));

