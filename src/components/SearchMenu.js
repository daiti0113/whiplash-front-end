import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import RefineMenu from './RefineMenu';
import SortMenu from './SortMenu';
import { store } from '../store';

const useStyles = makeStyles({
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
});

export default function SerchMenu() {
  const { state, dispatch } = useContext(store);
  const classes = useStyles();


  const handleSearchMenuOpen = () => {
    dispatch({ type: "UPDATE_SEARCH_MENU_OPEN", payload: false });
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
      <Drawer anchor="right" open={state.searchMenuOpen} onClose={handleSearchMenuOpen}>
        {sideList}
      </Drawer>
    </div>
  );
}
