import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
} from "../controller/post.js";
const router = express.Router();

// http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePosts);
export default router;
