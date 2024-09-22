import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Logo } from "../Blocks/HeaderLogo/Logo";

const pages = [];
const settings = ["Профиль", "Выйти"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "inherit",
        margin: "0 auto",
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Typography
          href="/"
          sx={{
            flexGrow: 50,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <Logo />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
