
const router = require('express').Router();

const {} = require('../../controllers/thought-controller');

router
    .route('/')
    // set routes for /api/thoughts/
    //get all, post

router
    .route('/:id')
    //set routes for /api/thoughts/:id

module.exports = router;