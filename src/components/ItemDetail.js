import React, {useState, useEffect} from 'react';
import SpeedDialTooltip from "./SpeedDial";
import Avatar from '@material-ui/core/Avatar';
import {useParams} from "react-router-dom";
import {images} from '../../assets/images/index';
import {makeStyles} from '@material-ui/core/styles';
import requestAPI from '../api';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    image: {
      width: '100%',
    },
    imageHolder: {
        marginTop: '20',
        height: '200',
    },
    button: {
        textTransform: "none",
        width: "100%"
    },
}));

export function ItemDetail() {
    const {id}  = useParams();
    const classes = useStyles();
    const [item, setItem] = useState({});

    const fetchData = async() => {
        const response = await requestAPI('GET', `/item/${id}`);
        setItem(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {console.log(item.evaluation)}
            {item.manufacturer && <h2>{item.manufacturer}</h2>}
            {item.name && <h3>{item.name}</h3>}
            <div className={classes.imageHolder}>
                {item.name && <Avatar className={classes.image} src={images[item.name]} variant="rounded">{item.name}</Avatar>}
            </div>
            {item.evaluation && <Rating name="simple-controlled" value={item.evaluation} precision={0.1} size="small" />}
            {item.price && <p>&yen;{item.price}</p>}
            <Button variant="contained" color="primary" className={classes.button}>Amazonで購入する</Button>
            <div>
                <h3>商品説明</h3>
                <p>{item.description ? item.description : ""}</p>
            </div>
            <SpeedDialTooltip />
        </div>
    )
}