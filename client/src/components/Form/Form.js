import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" align="center">
          Create a Memory
        </Typography>

        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />

        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          name="tags"
          label="Tags (comma separated)"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <Box>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Box>

        <Button variant="contained" color="primary" size="large" type="submit">
          Submit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={clear}
        >
          Clear
        </Button>
      </Box>
    </Paper>
  );
};

export default Form;
