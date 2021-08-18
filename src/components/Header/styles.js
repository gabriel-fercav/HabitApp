import { makeStyles } from "@material-ui/core/styles";

export const UseStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#000",
    position: "fixed",
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontFamily: "Orbitron",
    color: "#FF6109",
    fontWeight: "bold",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  containerIcon: {
    padding: "7px",
    margin: "2px",
    transition: "all 500ms ease-in-out",
    "&:hover": {
      backgroundColor: "#3E3E3E",
    },
  },
  icon: {
    color: "#FF6109",
  },
  text: {
    fontFamily: "Orbitron",
    fontWeight: "bold",
  },
}));
