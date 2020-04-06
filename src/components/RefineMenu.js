import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
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
  const [refineNestOpen, setRefineNestOpen] = useState(true);
  
  function handleRefineNestOpen() {
    setRefineNestOpen(!refineNestOpen);
  };

  return (
    <React.Fragment>
      <ListItem button key="title-refine" onClick={handleRefineNestOpen}>
        <Typography variant="h6" className={classes.title}>
          絞り込み
          {refineNestOpen ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />}
        </Typography>
      </ListItem>

      <Collapse in={refineNestOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <RefineItem input="slider" title="価格" type="price" icon={<LocalAtmIcon />} />
          <RefineItem input="checkbox" title="メーカー" type="manufacturer" icon={<LocalAtmIcon />} />
          <RefineItem input="slider" title="長さ" type="length" icon={<LocalAtmIcon />} />
          <RefineItem input="slider" title="太さ" type="thickness" icon={<LocalAtmIcon />} />
          <RefineItem input="checkbox" title="本体材質" type="material" icon={<LocalAtmIcon />} />
          <RefineItem input="checkbox" title="チップ材質" type="tipMaterial" icon={<LocalAtmIcon />} />
          <RefineItem input="checkbox" title="チップ形状" type="tipShape" icon={<LocalAtmIcon />} />
          <RefineItem input="checkbox" title="テーパー" type="taper" icon={<LocalAtmIcon />} />
          <RefineItem input="slider" title="評価" type="evaluation" icon={<LocalAtmIcon />} />
          <RefineItem input="slider" title="評価件数" type="evaluationCount" icon={<LocalAtmIcon />} />
        </List>
      </Collapse>
    </React.Fragment>
  )
}