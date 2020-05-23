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

const handleOpen = (open, setOpen) => () => {
    setOpen(!open)
}

const handleOrder = (dispatch, order) => () => {
    dispatch({type: "UPDATE_ORDER", payload: order})
}

const SortItem = ({dispatch, type, title}) => {
    return (
        <ListItem button onClick={handleOrder(dispatch, type)}>
            <ListItemText primary={title} />
        </ListItem>
    )
}

// TODO: RefineMenuにも同じようなものがあるから共通化
const MenuTitle = ({open, setOpen}) => {
    const classes = useStyles()

    return (
        <ListItem button onClick={handleOpen(open, setOpen)}>
            <Typography variant="h6" className={classes.title}>
                並び替え
                {open ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />}
            </Typography>
        </ListItem>
    )
}

export const SortMenu = () => {
    const [open, setOpen] = useState(true)
    const {dispatch} = useContext(store)

    // TODO: selectedのstateを持たせてデザインを変える。
    return (
        <>
            <MenuTitle open={open} setOpen={setOpen} />
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <SortItem dispatch={dispatch} type="EVALUATION_DESC" title="レビューの評価順" />
                    <SortItem dispatch={dispatch} type="PRICE_ASC" title="価格の安い順" />
                    <SortItem dispatch={dispatch} type="PRICE_DESC" title="価格の高い順" />
                    <SortItem dispatch={dispatch} type="EVALUATION_COUNT_DESC" title="クチコミ件数の多い順" />
                </List>
            </Collapse>
        </>
    )
}
