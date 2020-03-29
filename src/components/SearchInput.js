import React, {useContext, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import { store } from '../store';


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
    SearchIcon: {
      color: '#707070',
      padding: 10,
    }
}));
  
export default function SearchInput() {
  const { state, dispatch } = useContext(store);
  const inputRef = useRef();
  const classes = useStyles();

  function setKeywords() {
    dispatch({ type: "UPDATE_KEYWORDS", payload: inputRef.current.children[0].value});
  };

  function handleClick() {
    dispatch({ type: "UPDATE_SEARCH_MENU_OPEN", payload: true });
  }

  return (
      <Paper component="form" className={classes.root}>
      <InputBase
          className={classes.input}
          placeholder="キーワードで検索"
          ref={inputRef}
      />
      <SearchIcon className={classes.SearchIcon} onClick={setKeywords}/>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="tune" onClick={handleClick}>
          <TuneIcon />
      </IconButton>
      </Paper>
  );
}
