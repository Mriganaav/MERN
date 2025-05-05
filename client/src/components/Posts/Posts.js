import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Box } from "@mui/material";
import Post from "./Post/Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts?.length ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <CircularProgress />
    </Box>
  ) : (
    <Grid container spacing={3} sx={{ display: "flex", alignItems: "stretch" }}>
      {posts.map((post) => (
        <Grid
          key={post._id}
          sx={{
            width: "100%",
            [(theme) => theme.breakpoints.up("sm")]: { width: "50%" },
            [(theme) => theme.breakpoints.up("lg")]: { width: "25%" },
            display: "flex",
          }}
        >
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
