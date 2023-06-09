import { Link } from "react-router-dom";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./navbar.css";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";

function NavBar(props) {
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

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.reload();
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Name */}
          <FlightOutlinedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Al Hareem Travels
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* Mobile Nav Bar Menue Icon */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Mobile Nav Bar items*/}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link className="link" to="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">
                    Home
                  </Typography>
                </MenuItem>
              </Link>

              <a className="link" href="#about">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">
                    About
                  </Typography>
                </MenuItem>
              </a>

              <a className="link" href="#services">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">
                    Services
                  </Typography>
                </MenuItem>
              </a>

              <a className="link" href="#contact">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">
                    Contact Us
                  </Typography>
                </MenuItem>
              </a>

              {!props.isValidToken ? (
                <Box>
                  <Link className="link" to="/signin">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color="black">
                        Sign In
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link className="link" to="/signup">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color="black">
                        Sign Up
                      </Typography>
                    </MenuItem>
                  </Link>
                </Box>
              ) : null}
            </Menu>
          </Box>

          <FlightOutlinedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AL-Hareem Travels
          </Typography>

          {/* PC Nav Items */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link className="link" to="/">
                Home
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a href="#about" className="link">
                About
              </a>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a href="#services" className="link">
                Services
              </a>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <a href="#contact" className="link">
                Contact Us
              </a>
            </Button>

            {!props.isValidToken ? (
              <>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/signin" className="link">
                    Sign In
                  </Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/signup" className="link">
                    Sign Up
                  </Link>
                </Button>
              </>
            ) : null}
          </Box>

          {/* User logo and Setting */}

          {props.isValidToken ? (
            <Box sx={{ display: "flex", flexGrow: 0, alignItems: "center" }}>
              <Typography m="1em">{props.firstName}</Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={handleLogout} textAlign="center">
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
