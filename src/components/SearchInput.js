import React, {useContext, useRef} from "react"
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import TuneIcon from "@material-ui/icons/Tune"
import {store} from "../store"


// eslint-disable-next-line max-lines-per-function
const useStyles = makeStyles(theme => ({
    root: {
        padding: "2px 4px",
        marginTop: "5px",
        display: "flex",
        alignItems: "center"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    refineMenuButton: {
        padding: 10
    },
    divider: {
        height: 28,
        margin: 4
    },
    searchIcon: {
        color: "#707070",
        padding: 10
    },
    searchButton: {
        padding: [[0], "!important"]
    }
}))

const setKeywords = (dispatch, conditions, ref) => (event) => {
    event.preventDefault()
    dispatch({type: "UPDATE_CONDITIONS", payload: {...conditions, keywords: ref.current.children[0].value}})
}

const handleClick = (dispatch) => () => {
    dispatch({type: "UPDATE_SEARCH_MENU_OPEN", payload: true})
}

// TODO: イベントが発生するたびに、clearTimeoutしてまたsetTimeoutすることで、イベント終了後一定時間後にdispatchする。
const timerRestart = (callback, time = 250) => {
    return clearTimeout(setTimeout(() => callback(), time))
}

export const SearchInput = () => {
    const {state, dispatch} = useContext(store)
    const inputRef = useRef()
    const classes = useStyles()

    return (
        <Paper component="form" className={classes.root} onSubmit={setKeywords(dispatch, state.conditions, inputRef)}>
            <InputBase className={classes.input} placeholder="キーワードで検索" ref={inputRef} onInput={setKeywords(dispatch, state.conditions, inputRef)} />
            <IconButton className={classes.searchButton} aria-label="search">
                <SearchIcon className={classes.searchIcon} />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.refineMenuButton} aria-label="refine" onClick={handleClick(dispatch)}>
                <TuneIcon />
            </IconButton>
        </Paper>
    )
}
