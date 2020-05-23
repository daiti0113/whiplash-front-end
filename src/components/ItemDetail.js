import React, {useState, useEffect} from "react"
import {SpeedDialTooltip} from "./SpeedDial"
import Avatar from "@material-ui/core/Avatar"
import {useParams} from "react-router-dom"
import {images} from "../../assets/images/index"
import {makeStyles} from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import Button from "@material-ui/core/Button"
import {fetchData} from "../helper"

const useStyles = makeStyles(() => ({
    image: {
        width: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto"
    },
    imageHolder: {
        height: "200",
        position: "relative"
    },
    button: {
        textTransform: "none",
        width: "100%"
    }
}))

// eslint-disable-next-line complexity
const ItemInfo = ({item}) => {
    const classes = useStyles()

    return (
        <>
            {item.manufacturer && <h3>{item.manufacturer}</h3>}
            {item.name && <h2>{item.name}</h2>}
            <div className={classes.imageHolder}>
                {item.name && <Avatar className={classes.image} src={images[item.name]} variant="rounded">{item.name}</Avatar>}
            </div>
            {item.evaluation && <Rating name="simple-controlled" value={item.evaluation} precision={0.1} size="small" />}
            {item.price && <p>&yen;{item.price}~</p>}
        </>
    )
}

const ItemDescription = ({item}) => (
    <>
        <h3>商品説明</h3>
        <p>{item.description ? item.description : ""}</p>
    </>
)

export const ItemDetail = () => {
    const {id} = useParams()
    const classes = useStyles()
    const [item, setItem] = useState({})

    fetchData(`/item/${id}`, useEffect, [setItem])

    return (
        <div>
            <ItemInfo item={item} />
            <Button variant="contained" color="primary" className={classes.button}>Amazonで購入する</Button>
            <ItemDescription item={item} />
            <SpeedDialTooltip />
        </div>
    )
}