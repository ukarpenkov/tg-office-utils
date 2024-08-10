import { Box, Grid, Paper, styled } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./components/Header/Header";
import { MainTextArea } from "./components/Blocks/MainTextArea/MainTextArea";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} orientation="horizontal">
          <ResponsiveAppBar />
        </Grid>
        <Grid item xs={12}>
          <MainTextArea />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
