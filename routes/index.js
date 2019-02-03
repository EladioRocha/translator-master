const express = require('express');
const path = require('path');

// ========== CONSTANTS ========== //
const controllerIndexPath = path.join(__dirname, '..', 'api', 'controllers', 'controllerIndex');
const router = express.Router();
const controllerIndex = require(controllerIndexPath);
// ========== GET ========== //
router.get('/', controllerIndex.index);
router.get('/translate/:text', controllerIndex.translate);

// ========== POST ========== //



// ========== PUT ========== //



// ========== DELETE ========== //

module.exports = router;