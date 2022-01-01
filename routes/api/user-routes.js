
const router = require('express').Router();

const { getAllUser, createUser, getUserById, updateUser, deleteUser } = require('../../controllers/user-controller');

router
    .route('/')
    // set routes for /api/users/
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    //set routes for /api/users/:id
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;