import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [nestedListOpen, setNestedListOpen] = React.useState(false);

  function handleNestedListOpen() {
    setNestedListOpen(!nestedListOpen);
  };

  function handleRefineMenuOpen() {
    props.setRefineMenuOpen(false);
  }

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <ListItem button onClick={handleNestedListOpen}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {nestedListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor="right" open={props.refineMenuOpen} onClose={handleRefineMenuOpen}>
        {sideList}
      </Drawer>
    </div>
  );
}
