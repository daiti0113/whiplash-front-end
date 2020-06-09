import React, {useContext} from "react"
import {makeStyles} from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import {RefineMenu} from "./RefineMenu"
import {SortMenu} from "./SortMenu"
import {store} from "../store"

const useStyles = makeStyles({
    list: {
        width: 250
    },
    title: {
        paddingTop: 4,
        paddingBottom: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

const handleSearchMenuOpen = (dispatch) => () => {
    dispatch({type: "UPDATE_SEARCH_MENU_OPEN", payload: false})
}

const sideList = (
    <List>
        <RefineMenu />
        <SortMenu />
    </List>
)

export const SearchMenu = () => {
    const {state, dispatch} = useContext(store)
    const classes = useStyles()

    return (
        <div>
            <Drawer anchor="right" open={state.searchMenuOpen} onClose={handleSearchMenuOpen(dispatch)} className={classes.list}>
                {sideList}
            </Drawer>
        </div>
    )
}
