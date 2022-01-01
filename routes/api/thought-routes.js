
const router = require('express').Router();

const { getAllThought, postThought } = require('../../controllers/thought-controller');

router
    .route('/')
    // set routes for /api/thoughts/
    .get(getAllThought)
    .post(postThought);



router
    .route('/:id')
    //set routes for /api/thoughts/:id
    //get by id, put by id, del by id


    
//router
    //.route('/:thoughtId/reactions')

module.exports = router;