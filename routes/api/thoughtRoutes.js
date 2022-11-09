const { getAllThoughts, postThought, findOneThought, postReaction, removeReaction } = require('../../controllers/thought');

const router = require('express').Router();




router.route('/').get(getAllThoughts).post(postThought);
router.route('/:thoughtId').get(findOneThought);
router.route('/:thoughtId/reactions/:reactionId').post(postReaction).delete(removeReaction);