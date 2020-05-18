import React, {useContext} from "react"
import {makeStyles} from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import {store} from "../store"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    formControl: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
    },
}))

export default function CheckboxesGroup(props) {
    const classes = useStyles()
    const {state, dispatch} = useContext(store)
    const conditions = state.conditions
    const {type} = props

    const handleChange = key => event => {
        const newState = {...conditions[type], [key]: {...conditions[type][key], checked: event.target.checked}}
        dispatch({type: "UPDATE_CONDITIONS", payload: {...state.conditions, [props.type]: newState}})  };

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    {Object.entries(state.conditions[type]).map(([key, value]) => (
                        <FormControlLabel key={key}
                            control={<Checkbox checked={value.checked} onChange={handleChange(key)} value={key}/>}
                            label={value.display}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </div>
    )
}