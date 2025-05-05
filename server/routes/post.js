import express from "express";
import { getPosts, createPosts } from "../controller/post.js";
const router = express.Router();

// http://localhost:5000/posts

router.get("/", getPosts);
router.post("/", createPosts);

export default router;
