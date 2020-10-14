import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { Link } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      color:'black',
      background:'black'


    },
    menuButton: {
      marginRight: theme.spacing(2),
    
    },
    title: {
      flexGrow: 1,
   },

  }));
  
  
      
     function ButtonAppBar() {
      
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = React.useState(null);
  
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (

        <div className={classes.root}>

<Box  background="orange">

         <Typography variant="h6" style={{ backgroundColor:"#7FFF00", font:"cursive" }} className={classes.AppBar} href="/">



           <AppBar position="static" style={{ background: '#2F4F4F' }}>
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="warning.light" aria-label="menu">
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon/>
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                   <MenuItem onClick={handleClose}  to="/">
                     Home
                  </MenuItem>
                <MenuItem onClick={handleClose} to="/">
                  Contact Page
                  </MenuItem>
                 <MenuItem onClick={handleClose} to="/"> {/* conponent={Link} */}
                   About Me
                 </MenuItem>
                </Menu>
                </IconButton>
                  Carl Martin
                  <Grid
                    container

                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >

                <Button color="inherit" >Contact Page</Button> 
                <Button color="inherit" >About Me</Button> 
                </Grid>
              </Toolbar>
              
            </AppBar>
            </Typography>
            </Box>

          </div>

    );
}

export default ButtonAppBar;

// component={Link} to="/Login"