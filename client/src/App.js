import React, { use } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";
// Replace makeStyles with styled or sx
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
}));

const StyledImage = styled("img")({
  marginLeft: "15px",
});

const theme = createTheme();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <StyledAppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            Memories
          </Typography>
          <StyledImage src={memories} alt="memories" height="60" />
        </StyledAppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
