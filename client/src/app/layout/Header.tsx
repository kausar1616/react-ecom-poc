import { Mail, ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, List, ListItem
        , Switch, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface Props{
    darkMode : boolean;
    handleThemeChange: () => void;
}

const midLinks = [
  { title: 'claim', path: '/catalog' },
  { title: 'error', path: '/about' },
  { title: 'support', path: '/contact' },
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'handler register', path: '/register' }
]

const navStyles ={
  color: 'inherit',
  textDecoration: 'none',
  typography: 'h6',
  '&:hover':{
    color: 'grey.500'
  },
  '&.active':{
    color: 'text.secondary'
  }
}

function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position="static" sx= {{ mb: 5 }}>
        <Toolbar sx={{ display:'flex', justifyContent: 'space-between', alignItems: 'center', }}>   

          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant="h6" component={NavLink} to='/' sx={navStyles}>
                    Claim Repository
            </Typography>
            <Switch checked = {darkMode} onChange={handleThemeChange} />
          </Box>

          <List sx={{display:'flex'}}>
              {midLinks.map(({title, path})=>(
                <ListItem component = {NavLink} to = {path} key={path} sx={navStyles} >
                    {title.toUpperCase()}
                </ListItem>
              ))}
          </List>

          <Box sx={{display: 'flex' , alignItems:'center'}}>
              <IconButton color='inherit' size='large' edge='start' sx={{mr:2}}>
                 <Badge badgeContent='4' color='secondary'>

                    <Mail />  
                  
                 </Badge>
              </IconButton>
              <List sx={{display:'flex'}}>
                  {rightLinks.map(({title, path})=>(
                      <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                        {title.toUpperCase()}
                      </ListItem>
                  ))}
              </List>
          </Box>
        </Toolbar>
      </AppBar>
    );
}
export default Header;