import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import requestAPI from '../api';
import images from '../../assets/images/Pearl/*.jpg'
import Rating from '@material-ui/lab/Rating';


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

export default function ItemList(props) {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]); 

  useEffect(() => {
    const fetchData = async() => {
      const response = await requestAPI('GET', '/item');
      setItems(response.data);
      setFoundItems(response.data);
    };
    fetchData();
  }, []); // 第２引数の変数が更新されると、フックが実行される(APIへのリクエストを行う)。

  useEffect(() => {
    if (props.keywords === '') {
      setFoundItems(items);
    } else {
      setFoundItems(items.filter(function(item){
        for (let key in item) {
          if (String(item[key]).indexOf(props.keywords) !== -1) return true;
        }
      }));  
    }
  }, [props.keywords]);

  return (
    <List className={classes.root}>
      {foundItems.map(item => (
        <div>
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
        </div>
      ))}
    </List>
  );
}