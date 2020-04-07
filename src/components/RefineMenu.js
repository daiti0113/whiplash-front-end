import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import RefineItem from './RefineItem';

const useStyles = makeStyles({
  title: {
    paddingTop: 4,
    paddingBottom: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
});

export default function RefineMenu() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [refineDetailOpen, setRefineDetailOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleRefineDetailOpen = () => {
    setRefineDetailOpen(!refineDetailOpen);
  };

  return (
    <React.Fragment>
      <ListItem button key="title-refine" onClick={handleOpen}>
        <Typography variant="h6" className={classes.title}>
          絞り込み
          {open ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />}
        </Typography>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <RefineItem input="slider" title="価格" type="price" />
          <RefineItem input="checkbox" title="メーカー" type="manufacturer" />
          <RefineItem input="slider" title="評価" type="evaluation" />
          <RefineItem input="slider" title="評価件数" type="evaluationCount" />

          <ListItem button key="title-refine" onClick={handleRefineDetailOpen}>
            <ListItemText primary="もっと絞り込む" />
            {refineDetailOpen ? <ExpandLess /> : <ExpandMore />}              
          </ListItem>
          <Collapse in={refineDetailOpen} timeout="auto" unmountOnExit>
            <RefineItem input="slider" title="長さ" type="length" />
            <RefineItem input="slider" title="太さ" type="thickness" />
            <RefineItem input="checkbox" title="本体材質" type="material" />
            <RefineItem input="checkbox" title="チップ材質" type="tipMaterial" />
            <RefineItem input="checkbox" title="チップ形状" type="tipShape" />
            <RefineItem input="checkbox" title="テーパー" type="taper" />
          </Collapse>
        </List>
      </Collapse>
    </React.Fragment>
  )
}