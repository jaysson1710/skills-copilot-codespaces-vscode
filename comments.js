//create web server
//http://localhost:3000/comments
const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");
const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================

router.post("/saveComment", auth, (req, res) => {
  //save the comment information from the client into the database
  const comment = new Comment(req.body);

  comment.save((err, comment) => {
    //save the comment information from the client into the database
    if (err) return res.json({ success: false, err });

    //find the comment information from the client into the database
    Comment.find({ _id: comment._id })
      .populate("writer") //populate the writer information
      .exec((err, result) => {
        //find the comment information from the client into the database
        if (err) return res.json({ success: false, err });
        return res.status(200).json({ success: true, result });
      });
  });
});

//=================================
//             Get Comments
//=================================

router.post("/getComments", (req, res) => {
  //find the comment information from the client into the database
  Comment.find({ postId: req.body.movieId })
    .populate("writer") //populate the writer information
    .exec((err, comments) => {
      //find the comment information from the client into the database
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, comments });
    });
});

module.exports = router;