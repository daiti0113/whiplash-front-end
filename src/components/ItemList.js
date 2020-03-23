import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import requestAPI from '../api';
import images from '../../assets/images/Pearl/*.jpg'
import Rating from '@material-ui/lab/Rating';
import { store } from '../store';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  listItem: {
    // height: '70px',
  },
  itemDetail: {
    listStyle: 'none',
    padding: 10
  },
  evaluationCount: {
    marginLeft: '10px',
  },
  itemImage: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  }
}));

export default function ItemList() {
  const classes = useStyles();
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    const fetchData = async() => {
      const response = await requestAPI('GET', '/item');
      dispatch({ type: "UPDATE_ITEMS", payload: response.data });
      dispatch({ type: "UPDATE_FOUND_ITEMS", payload: response.data });
    };
    fetchData();
  }, []); // 第２引数の変数が更新されると、フックが実行される(APIへのリクエストを行う)。

  useEffect(() => {
    if (state.keywords === '') {
      dispatch({ type: "UPDATE_FOUND_ITEMS", payload: state.items });
    } else {
      dispatch({ type: "UPDATE_FOUND_ITEMS", payload: searchItems() });
    }
  }, [state.keywords]);

  const searchItems = () => {
    return (
      state.items.filter((item) => {
        for (let key in item) {
          if (String(item[key]).indexOf(state.keywords) !== -1) return true;
        }
      })
    );
  }

  return (
    <List className={classes.root}>
      {state.foundItems.map(item => (
        <React.Fragment key={item.id}>
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar className={classes.itemImage} src={images['121HC']}>{item.name}</Avatar>
            </ListItemAvatar>
            <ul className={classes.itemDetail}>
              <li>{item.name}</li>
              <li>{item.manufacturer}</li>
              <li>
                <Rating
                  name="simple-controlled"
                  value={item.evaluation}
                  precision={0.1}
                  size="small"
                />
                <span>{item.evaluation}</span>
                <span className={classes.evaluationCount}>{item.evaluationCount}reviews</span>
              </li>
              <li>&yen;{item.price}~</li>
            </ul>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}