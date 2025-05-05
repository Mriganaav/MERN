import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Box } from "@mui/material";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return !posts?.length ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <CircularProgress />
    </Box>
  ) : (
    <Grid container spacing={3} sx={{ display: "flex", alignItems: "stretch" }}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6} lg={3}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
