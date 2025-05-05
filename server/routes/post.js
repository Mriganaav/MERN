import express from "express";
import { getPosts, createPosts, updatePosts } from "../controller/post.js";
const router = express.Router();

// http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);

export default router;
