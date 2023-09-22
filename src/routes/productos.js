const express = require('express');
const productoSchema = require('../models/productos'); 

// Constructor
const router = express.Router();

// Crear producto
router.post('/productos', (req, res) => { 
    const producto = new productoSchema(req.body); // Cambio de "usuarioSchema" a "productoSchema"
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get('/productos', (req, res) => {
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un producto
router.get('/productos/:id', (req, res) => { 
    const { id } = req.params;
    productoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put('/productos/:id', (req, res) => { 
    const { id } = req.params;
    const { nombre, precio, cantidad, categoria, descripcion } = req.body;
    productoSchema
        .updateOne({ _id: id }, { $set: { nombre, precio, cantidad, categoria, descripcion } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete('/productos/:id', (req, res) => { 
    const { id } = req.params;
    productoSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
