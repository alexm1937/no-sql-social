
const router = require('express').Router();

const { getAllUser, createUser, getUserById, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

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

router
    .route('/:userId/friends/:friendId')
    //post and delete friends list?
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;