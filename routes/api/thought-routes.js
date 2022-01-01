
const router = require('express').Router();

const { getAllThought, postThought, deleteThought } = require('../../controllers/thought-controller');

router
    .route('/')
    // set routes for /api/thoughts/
    .get(getAllThought)
    .post(postThought);



router
    .route('/:id')
    //set routes for /api/thoughts/:id
    //get by id, put by id, del by id
    .delete(deleteThought);


    
//router
    //.route('/:thoughtId/reactions')

module.exports = router;