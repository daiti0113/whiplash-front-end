import React, {useEffect, useContext, useState, useMemo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import requestAPI from '../api';
import images from '../../assets/images/Pearl/*.jpg'
import Rating from '@material-ui/lab/Rating';
import {store} from '../store';


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
  const [items, setItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const {state} = useContext(store);
  const conditions = state.conditions;

  useEffect(() => {
    const fetchData = async() => {
      const response = await requestAPI('GET', '/item');
      setItems(response.data);
      setFoundItems(response.data);
    };
    fetchData();
  }, []); // 第２引数の変数が更新されると、フックが実行される(APIへのリクエストを行う)。

  useEffect(() => {
    if (conditions.keywords === '') {
      setFoundItems(items);
    } else {
      setFoundItems(searchItems());
    }
  }, [conditions]);

  const searchItems = () => {
    const checkedManufacturerList = Object.entries(conditions.manufacturer).map(m => m[1].checked ? m[1].display : false).filter(m => m);
    const result = items.filter((item) => {
      if (checkedManufacturerList.length && checkedManufacturerList.indexOf(item.manufacturer) === -1) return false;
      if (item.price < conditions.price[0] || item.price > conditions.price[1]) return false;
      if (item.length < conditions.length[0] || item.length > conditions.length[1]) return false;
      if (item.thickness < conditions.thickness[0] || item.thickness > conditions.thickness[1]) return false;
      for (let key in item) {
        if (!conditions.keywords || String(item[key]).indexOf(conditions.keywords) !== -1) return true;
      }
    });

    return result;
  }

  const listItems = useMemo(() => foundItems.map(item =>
    <React.Fragment key={item.id}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.itemImage} src={images['121HC']}>{item.name}</Avatar>
        </ListItemAvatar>
        <ul className={classes.itemDetail}>
          <li key={`name-${item.id}`}>{item.name}</li>
          <li key={`manufacturer-${item.id}`}>{item.manufacturer}</li>
          <li key={`evaluation-${item.id}`}>
            <Rating
              name="simple-controlled"
              value={item.evaluation}
              precision={0.1}
              size="small"
            />
            <span>{item.evaluation}</span>
            <span className={classes.evaluationCount}>{item.evaluationCount}reviews</span>
          </li>
          <li key={`price-${item.id}`}>&yen;{item.price}~</li>
        </ul>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  ), [foundItems]);

  return (
    <List className={classes.root}>
      {listItems}
    </List>
  );
}