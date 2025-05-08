import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  likePosts,
} from "../controller/post.js";
const router = express.Router();

// http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.patch("/:id/likePosts", likePosts);
router.delete("/:id", deletePosts);
export default router;
