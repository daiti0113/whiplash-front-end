import React, {useState} from "react"
import {withStyles} from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from "@material-ui/icons/Home"
import StarIcon from "@material-ui/icons/Star"
import CreateIcon from "@material-ui/icons/Create"
import {Link} from "react-router-dom"

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5"
    }
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles(theme => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem)

const LinkStyle = {
    textDecoration: "none",
    color: "#707070"
}

const handleClick = (setAnchorEl) => event => {
    setAnchorEl(event.currentTarget)
}

const handleClose = (setAnchorEl) => () => {
    setAnchorEl(null)
}

const MenuLink = ({to, title, icon}) => (
    <Link to={to} style={LinkStyle}>
        <StyledMenuItem>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} />
        </StyledMenuItem>
    </Link>
)

export const CustomizedMenus = () => {
    const [anchorEl, setAnchorEl] = useState(null)

    return (
        <div>
            <MenuIcon onClick={handleClick(setAnchorEl)} />
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose(setAnchorEl)}
            >
                {/* <MenuLink to="/" title="ホーム" icon={<HomeIcon fontSize="small" />} />
                <MenuLink to="/ranking" title="ランキング" icon={<StarIcon fontSize="small" />} />
                <MenuLink to="/search" title="クチコミを書く" icon={<CreateIcon fontSize="small" />} /> */}
            </StyledMenu>
        </div>
    )
}