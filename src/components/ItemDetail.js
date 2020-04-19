import React, {useState, useEffect} from 'react';
import SpeedDialTooltip from "./SpeedDial";
import Avatar from '@material-ui/core/Avatar';
import {useParams} from "react-router-dom";
import {images} from '../../assets/images/index';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import requestAPI from '../api';

const useStyles = makeStyles(theme => ({
    image: {
      width: '100%',
    },
    imageHolder: {
        marginTop: '20',
        height: '200',
    },
}));

export function ItemDetail() {
    const {id}  = useParams();
    const classes = useStyles();
    const [item, setItem] = useState({});

    const fetchData = async() => {
        const response = await requestAPI('GET', `/item/${id}`);
        setItem(response.data);
        console.log("test");
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        item && 
            <div>
                {console.log(item)}
                <Typography>{item.name}</Typography>
                <div className={classes.imageHolder}>
                    <Avatar className={classes.image} src={images[item.name]} variant="rounded">{item.name}</Avatar>
                </div>
                <SpeedDialTooltip />
            </div>
    )
}