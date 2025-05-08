import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch } from "react-redux";
import { deletePosts, likePosts } from "../../../actions/posts";

dayjs.extend(relativeTime);

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 2,
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: 0, paddingTop: "56.25%" }} // 16:9 aspect ratio
        image={post.selectedFile}
        title={post.title}
      />
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "6px 12px",
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {dayjs(post.createdAt).fromNow()}
        </Typography>
      </Box>
      <Box sx={{ padding: "0 16px", marginTop: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Box>
      <Typography sx={{ padding: "8px 16px" }} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePosts(post._id))}
        >
          <ThumbUpAltIcon fontSize="small" sx={{ mr: 0.5 }} /> Like{" "}
          {post.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePosts(post._id))}
        >
          <DeleteIcon fontSize="small" sx={{ mr: 0.5 }} /> Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
