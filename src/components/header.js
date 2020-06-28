import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import firebase from "firebase"
import userAction from "../redux/action"
import { connect } from "react-redux"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    position: "absolute",
    zIndex: theme.zIndex.drawer + 1,
  },
  search: {
    position: "absolute",
    top: "15px",
    right: "125px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginBottom: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  button: {
    position: "absolute",
    fontSize: "22px",
    top: "16px",
    right: "15px",
  },
}))

const Header = props => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {props.name}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <button
            className={classes.button}
            onClick={async () => {
              await firebase.auth().signOut()
              window.localStorage.clear()
              window.location.href = "/"
            }}
          >
            Sign out
          </button>
        </Toolbar>
      </AppBar>
    </>
  )
}

const mapStateOfProps = state => {
  return {
    name: state.name,
  }
}

const mapDispatchOfProps = dispatch => {
  return {
    userAction: () => dispatch(userAction()),
  }
}

export default connect(mapStateOfProps, mapDispatchOfProps)(Header)
