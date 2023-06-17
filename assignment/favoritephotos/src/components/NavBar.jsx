/* eslint-disable no-undef */
import { AppBar, IconButton, Toolbar, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import '../components/styles.css'


const NavBar = () => {

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{bgcolor: '#E8EAF6'}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color: '#3F51B5' }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{paddingRight: '50px', fontFamily:'Josefin', fontWeight:600, color: '#3F51B5'}}>
                        Assignment
                    </Typography>
                    <Link to={'/'} className='nav-link' >Home</Link>
                    <Link to={'/favorite'} className='nav-link'>Your Favorite</Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;