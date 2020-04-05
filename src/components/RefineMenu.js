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
import RangeSlider from './RangeSlider';
import CheckboxesGroup from './CheckBoxesGroup';

const useStyles = makeStyles({
  title: {
    paddingTop: 4,
    paddingBottom: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
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
});


export default function RefineMenu() {
  const classes = useStyles();
  const [refineNestOpen, setRefineNestOpen] = useState(true);
  
  function handleRefineNestOpen() {
    setRefineNestOpen(!refineNestOpen);
  };

  return (
    <React. Fragment>
      <ListItem button key="title-refine" onClick={handleRefineNestOpen}>
        <Typography variant="h6" className={classes.title}>
            絞り込み
            {refineNestOpen ? <ExpandLess fontSize="large"/> : <ExpandMore fontSize="large"/>}
        </Typography>
      </ListItem>

      <Collapse in={refineNestOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem className={classes.refineRabel}>
          <ListItemIcon className={classes.icon}>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="価格" />
        </ListItem>
        <ListItem className={classes.refineInput}>
          <RangeSlider type="price"/>
        </ListItem>
        <ListItem className={classes.refineRabel}>
          <ListItemIcon className={classes.icon}>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="メーカー" />
        </ListItem>
        <ListItem className={classes.refineInput}>
          <CheckboxesGroup type="manufacturer"/>
        </ListItem>
        <ListItem className={classes.refineRabel}>
          <ListItemIcon className={classes.icon}>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="長さ" />
        </ListItem>
        <ListItem className={classes.refineInput}>
          <RangeSlider type="length"/>
        </ListItem>
        <ListItem className={classes.refineRabel}>
          <ListItemIcon className={classes.icon}>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="太さ" />
        </ListItem>
        <ListItem className={classes.refineInput}>
          <RangeSlider type="thickness"/>
        </ListItem>
        <ListItem className={classes.refineRabel}>
          <ListItemIcon className={classes.icon}>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="本体材質" />
        </ListItem>
        <ListItem className={classes.refineInput}>
          <CheckboxesGroup type="material"/>
        </ListItem>
        <ListItem className={classes.refineRabel}>
          <ListItemIcon className={classes.icon}>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="チップ材質" />
        </ListItem>
        <ListItem className={classes.refineInput}>
          <CheckboxesGroup type="tipMaterial"/>
        </ListItem>
        <ListItem className={classes.refineRabel}>
          <ListItemIcon className={classes.icon}>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary="チップ形状" />
        </ListItem>
        <ListItem className={classes.refineInput}>
          <CheckboxesGroup type="tipShape"/>
        </ListItem>
      </List>
      </Collapse>
    </React.Fragment>
  )
}