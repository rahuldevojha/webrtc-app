import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}))

const Sidebar = props => {
  const classes = useStyles()

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemText>
                <Link to="/messages">{props.value[0]}</Link>
              </ListItemText>
            </ListItem>
            {props.value.map(text => (
              <ListItem button key={text}>
                <ListItemText>
                  <Link to="/messages">{text}</Link>
                </ListItemText>
              </ListItem>
            ))}
            {/* {props.value.map(text => (
              <ListItem button key={text}>
                <ListItemText>
                  <Link to="/messages">{text}</Link>
                </ListItemText>
              </ListItem>
            ))} */}
          </List>
        </div>
      </Drawer>
    </>
  )
}

export default Sidebar
