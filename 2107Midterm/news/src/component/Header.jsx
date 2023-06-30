import { useState, useEffect } from "react";
import { Button, Menu, MenuItem, AppBar, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && isMenuOpen) {
        handleMenuClose();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isMenuOpen]);

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#000080" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#3F51B5" }}
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/40/F5F5F5/external-news-news-kiranshastry-solid-kiranshastry-1.png"
              alt="Logo"
            />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              paddingRight: "50px",
              fontFamily: "Josefin",
              fontWeight: 600,
              color: "#F5F5F5",
            }}
          >
            MT News
          </Typography>
          {isMobile ? (
            <>
              <Button onClick={handleMenuOpen} className="dropdown-menu">
                Menu
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/" className="menu-item">
                  Home
                </MenuItem>
                <MenuItem component={Link} to="/collection" className="menu-item">
                  My Collection
                </MenuItem>
                <MenuItem component={Link} to="/science" sx={{ width: 130 }} className="menu-item">
                  Science
                </MenuItem>
                <MenuItem component={Link} to="/news" className="menu-item">
                  News
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Link to={"/collection"} className="nav-link">
                My Collection
              </Link>
              <Button onClick={handleMenuOpen} className="dropdown-menu">
                News Menu
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/science" sx={{ width: 130 }} className="menu-item">
                  Science
                </MenuItem>
                <MenuItem component={Link} to="/news" className="menu-item">
                  News
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
