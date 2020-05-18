import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
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

export default function OpenIconSpeedDial() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [hidden, setHidden] = React.useState(false)

    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
            <SpeedDial
                ariaLabel="SpeedDial"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon icon={<EditIcon />} openIcon={<CloseIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </div>
    )
}