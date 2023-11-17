//create web server
const express = require("express");
const router = express.Router();
const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments");
const { protect, authorize } = require("../middleware/auth");

router.route("/").get(protect, getComments).post(protect, createComment);

router
  .route("/:id")
  .get(protect, getComment)
  .put(protect, updateComment)
  .delete(protect, deleteComment);

module.exports = router;
