const { getAllUsers, findOneUser } = require('../../controllers/user');

const router = require('express').Router();














router.route('/').get(getAllUsers);
router.route("/:userId").get(findOneUser);

module.exports = router;