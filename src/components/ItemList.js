import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import requestAPI from '../api';
import images from '../../assets/images/Pearl/*.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ItemList() {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await requestAPI('GET', '/item');
      setItems(response.data);
    };
    fetchData();
  }, []); // 第２引数の変数が更新されると、フックが実行される(APIへのリクエストを行う)。


  return (
    <List className={classes.root}>
      {items.map(item => (
        <div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={images['121HC']} />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}