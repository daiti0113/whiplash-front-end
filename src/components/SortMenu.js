import React, {useState, useContext} from "react"
import {makeStyles} from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import {store} from "../store"

const useStyles = makeStyles(() => ({
    title: {
        paddingTop: 4,
        paddingBottom: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    
    },
    icon: {
        minWidth: 32
    }
}))


export default function SortMenu() {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const {dispatch} = useContext(store)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleOrder = (order) => () => {
        dispatch({type: "UPDATE_ORDER", payload: order})
    }

    // TODO: selectedのstateを持たせてデザインを変える。
    return (
        <>
            <ListItem button onClick={handleOpen}>
                <Typography variant="h6" className={classes.title}>
                    並び替え
                    {open ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />}
                </Typography>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button onClick={handleOrder("EVALUATION_DESC")}>
                        <ListItemText primary="レビューの評価順" />
                    </ListItem>
                    <ListItem button onClick={handleOrder("PRICE_ASC")}>
                        <ListItemText primary="価格の安い順" />
                    </ListItem>
                    <ListItem button onClick={handleOrder("PRICE_DESC")}>
                        <ListItemText primary="価格の高い順" />
                    </ListItem>
                    <ListItem button onClick={handleOrder("EVALUATION_COUNT_DESC")}>
                        <ListItemText primary="クチコミ件数の多い順" />
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
}
