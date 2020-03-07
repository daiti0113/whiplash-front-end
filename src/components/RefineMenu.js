import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import RangeSlider from './RangeSlider';
import CheckboxesGroup from './CheckBoxesGroup';

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
  refineRabel: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  refineInput: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    minWidth: 32,
  }
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
          <Typography variant="h6" className={classes.title}>
              絞り込み
              {nestedListOpen ? <ExpandLess fontSize="large"/> : <ExpandMore fontSize="large"/>}
          </Typography>
        </ListItem>
        <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
          <ListItem className={classes.refineRabel}>
            <ListItemIcon className={classes.icon}>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="価格" />
          </ListItem>
          <ListItem className={classes.refineInput}>
            <RangeSlider />
          </ListItem>
          <ListItem className={classes.refineRabel}>
            <ListItemIcon className={classes.icon}>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="長さ" />
          </ListItem>
          <ListItem className={classes.refineInput}>
            <CheckboxesGroup list={['TAMA', 'Pearl', 'Promark', 'Vic Firth']}/>
          </ListItem>
          <ListItem className={classes.refineRabel}>
            <ListItemIcon className={classes.icon}>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="重さ" />
          </ListItem>
          <ListItem className={classes.refineInput}>
            <RangeSlider />
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
