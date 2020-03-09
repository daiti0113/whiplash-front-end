import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: 4,
    paddingBottom: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  icon: {
    minWidth: 32,
  }
}));


export default function SortMenu() {
  const classes = useStyles();
  const [sortNestOpen, setSortNestOpen] = useState(true)

  function handleSortNestOpen() {
    setSortNestOpen(!sortNestOpen);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleSortNestOpen}>
      <Typography variant="h6" className={classes.title}>
          並び替え
          {sortNestOpen ? <ExpandLess fontSize="large"/> : <ExpandMore fontSize="large"/>}
      </Typography>
      </ListItem>
      <Collapse in={sortNestOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
      <ListItem button>
      <ListItemIcon className={classes.icon}>
          <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="レビューの評価順" />
      </ListItem>
      </List>
      <List component="div" disablePadding>
      <ListItem button>
      <ListItemIcon className={classes.icon}>
          <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="価格の安い順" />
      </ListItem>
      </List>
      <List component="div" disablePadding>
      <ListItem button>
      <ListItemIcon className={classes.icon}>
          <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="価格の高い順" />
      </ListItem>
      </List>
      <List component="div" disablePadding>
      <ListItem button>
      <ListItemIcon className={classes.icon}>
          <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="クチコミ件数の多い順" />
      </ListItem>
      </List>
      </Collapse>
    </React.Fragment>
  )
}
