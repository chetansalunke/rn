const express = require('express');
const router = express.Router();
const connection = require('./db');

// Route for getting all categories
router.get('/categories', (req, res) => {
    connection.execute('SELECT * FROM api.product', (err, result, fields) => {
        if (err) {
            console.error('Error while fetching categories:', err.message);
            res.status(500).send({ message: 'error while fetching categories' });
            return;
        }
        res.send(result);
    });
});

// Route for getting all registered users
router.get('/users', (req, res) => {
    connection.execute('SELECT * FROM api.register_user', (err, result, fields) => {
        if (err) {
            console.error('Error while fetching users:', err.message);
            res.status(500).send({ message: 'Error while fetching users' });
            return;
        }
        res.send(result);
    });
});

module.exports = router;
