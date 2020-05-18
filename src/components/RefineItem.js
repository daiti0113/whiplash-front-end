import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import Collapse from "@material-ui/core/Collapse"
import RangeSlider from "./RangeSlider"
import CheckboxesGroup from "./CheckBoxesGroup"

const useStyles = makeStyles({
    refineRabel: {
        paddingTop: 0,
        paddingBottom: 0
    },
    refineInput: {
        paddingTop: 0,
        paddingBottom: 0
    }
})

export default function RefineItem(props) {
    const classes = useStyles()
    const {input, title, type} = props
    const [nestOpen, setNestOpen] = useState(false)
  
    const handleNestOpen = () => {
        setNestOpen(!nestOpen)
    }

    const inputItem = {
        slider: (
            <ListItem className={classes.refineInput}>
                <RangeSlider type={type} />
            </ListItem>
        ),
        checkbox: (
            <ListItem className={classes.refineInput}>
                <CheckboxesGroup type={type} />
            </ListItem>
        )
    }

    return (
        <>
            <ListItem className={classes.refineRabel} onClick={handleNestOpen}>
                <ListItemText primary={title} />
                {nestOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={nestOpen} timeout="auto" unmountOnExit>
                {inputItem[input]}
            </Collapse>
        </>
    )
}