import React from "react";

import { UseStyles } from "./styles";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useContext } from "react"
import { UserContext } from "../../Providers/UserProvider";

const Header = () => {
  const classes = UseStyles();
  const { logOut } = useContext(UserContext)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handlePerfil = () => {
    handleMobileMenuClose();
    history.push("/user");
  };

  const handleGroups = () => {
    handleMobileMenuClose();
    history.push("/groups");
  };

  const handleLogout = () => {
    handleMobileMenuClose();
    logOut();
    history.push("/");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handlePerfil}>
        <IconButton aria-label="show perfil">
          <PersonIcon className={classes.icon} />
        </IconButton>
        <p className={classes.text}>Perfil</p>
      </MenuItem>
      <MenuItem onClick={handleGroups}>
        <IconButton aria-label="show groups">
          <GroupIcon className={classes.icon} />
        </IconButton>
        <p className={classes.text}>Grupos</p>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton aria-label="logout">
          <ExitToAppIcon className={classes.icon} />
        </IconButton>
        <p className={classes.text}>Sair</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <Typography className={classes.title} variant="h6" noWrap>
            Gamer Habits
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show perfil"
              onClick={handlePerfil}
              className={classes.containerIcon}
            >
              <PersonIcon className={classes.icon} />
            </IconButton>
            <IconButton
              aria-label="show groups"
              onClick={handleGroups}
              className={classes.containerIcon}
            >
              <GroupIcon className={classes.icon} />
            </IconButton>
            <IconButton
              aria-label="logout"
              onClick={handleLogout}
              className={classes.containerIcon}
            >
              <ExitToAppIcon className={classes.icon} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon className={classes.icon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Header;
