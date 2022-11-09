const { getAllUsers, findOneUser, postUser, putUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user');

const router = require('express').Router();


router.route('/').get(getAllUsers).post(postUser);
router.route("/:userId").get(findOneUser).put(putUser).delete(deleteUser);
router.route("/:userId/friends/:freindsId").post(addFriend).delete(removeFriend);
module.exports = router;