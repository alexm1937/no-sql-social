
const router = require('express').Router();

const { getAllThought, postThought, getThoughtById, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

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

//routes for reactions below:
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;