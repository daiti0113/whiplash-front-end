import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import ItemList from './ItemList';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    marginTop: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


function CustomizedInputBase(props) {
  const classes = useStyles();

  function handleChange(event) {
      props.setKeywords(event.target.value);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="キーワードで検索"
        onChange={handleChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="tune">
        <TuneIcon />
      </IconButton>
    </Paper>
  );
}

export default function Search() {
    const [keywords, setKeywords] = useState([]); 
    
    return (
        <div>
            <CustomizedInputBase setKeywords={setKeywords} />
            <ItemList keywords={keywords} />
        </div>
    )
};