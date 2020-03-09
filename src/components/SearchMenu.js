import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import RefineMenu from './RefineMenu';
import SortMenu from './SortMenu';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  title: {
    paddingTop: 4,
    paddingBottom: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function SerchMenu(props) {
  const classes = useStyles();


  function handleSearchMenuOpen() {
    props.setSearchMenuOpen(false);
  }

  const sideList = (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <RefineMenu />
        <SortMenu />
      </List>
    </div>
  );

  return (
    <div>
      <Drawer anchor="right" open={props.searchMenuOpen} onClose={handleSearchMenuOpen}>
        {sideList}
      </Drawer>
    </div>
  );
}
