import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined"
import SaveIcon from "@material-ui/icons/Save"
import PrintIcon from "@material-ui/icons/Print"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteIcon from "@material-ui/icons/Favorite"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        height: 380,
        flexGrow: 1
    },
    speedDial: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        opacity: 0.9
    }
}))

const actions = [
    {icon: <FileCopyIcon />, name: "Copy"},
    {icon: <SaveIcon />, name: "Save"},
    {icon: <PrintIcon />, name: "Print"},
    {icon: <ShareIcon />, name: "Share"},
    {icon: <FavoriteIcon />, name: "Like"}
]

const handleOpen = (setOpen) => () => {
    setOpen(true)
}

const handleClose = (setOpen) => () => {
    setOpen(false)
}


export const OpenIconSpeedDial = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    return (
        <div className={classes.root}>
            <SpeedDial
                ariaLabel="SpeedDial"
                className={classes.speedDial}
                icon={<SpeedDialIcon icon={<EditIcon />} openIcon={<CloseIcon />} />}
                onClose={handleClose(setOpen)}
                onOpen={handleOpen(setOpen)}
                open={open}
            >
                {actions.map((action) => (<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose(setOpen)} />))}
            </SpeedDial>
        </div>
    )
}