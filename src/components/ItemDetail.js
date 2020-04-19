import React from 'react';
import SpeedDialTooltip from "./SpeedDial";
import Avatar from '@material-ui/core/Avatar';
import {useParams} from "react-router-dom";
import {images} from '../../assets/images/index';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    const {itemName}  = useParams();
    const classes = useStyles();

    return (
        <div>
            <Typography>{itemName}</Typography>
            <div className={classes.imageHolder}>
                <Avatar className={classes.image} src={images[itemName]} variant="rounded">{itemName}</Avatar>
            </div>
            <SpeedDialTooltip />
        </div>
    )
}