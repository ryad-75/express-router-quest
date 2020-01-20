const express = require("express")
const router = express.Router()
const tags = require('../data/tags.json')

router.get('/', (req, res) => {
  res.send(tags).status(200)
});

router.get('/', (req, res) => {
    // If we forget { mergeParams: true }, req.params.postId will be `undefined`
    const postId = Number(req.params.postId);
    // Keep only comments whose post_id matches the postId parameter
    const posTtags = posTtags.filter((tags) => tags.post_id === postId);
    res.json(posTtags);
  });

module.exports = router;