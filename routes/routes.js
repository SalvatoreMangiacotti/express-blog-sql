const express = require('express');
const router = express.Router();
const { index, show, store, update, modify, destroy } = require('../controllers/controllers');


// Index

router.get('/', index);


// // Show

// router.get('/:id', show);


// // Store

// router.post('/', store);


// // Update

// router.post('/:id', update);


// // Modify

// router.patch('/:id', modify);


// Destroy

router.delete('/:id', destroy);


module.exports = router;