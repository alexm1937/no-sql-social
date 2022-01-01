
const router = require('express').Router();

const { getAllThought, postThought, getThoughtById, updateThought, deleteThought } = require('../../controllers/thought-controller');

router
    .route('/')
    // set routes for /api/thoughts/
    .get(getAllThought)
    .post(postThought);



router
    .route('/:id')
    //set routes for /api/thoughts/:id
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


    
//router
    //.route('/:thoughtId/reactions')

module.exports = router;