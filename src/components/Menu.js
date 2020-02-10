import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const LinkStyle = {
  textDecoration: 'none',
  color: '#707070',
};

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuIcon onClick={handleClick} />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" style={LinkStyle}>
          <StyledMenuItem>
            <ListItemIcon>
                <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="ホーム" />
          </StyledMenuItem>
        </Link>
        <Link to="/ranking" style={LinkStyle}>
          <StyledMenuItem>
            <ListItemIcon>
                <StarIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="ランキング" />
          </StyledMenuItem>
        </Link>
        <Link to="/Search" style={LinkStyle}>
          <StyledMenuItem>
          <ListItemIcon>
              <CreateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="クチコミを書く" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}