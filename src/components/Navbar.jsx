import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Aurora from '../pages/Aurora'
import Logo from '../assets/zeus-removebg-preview.png'
import { useNavigate } from 'react-router-dom'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Height } from '@mui/icons-material'



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const navigate = useNavigate();
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/"
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "/about"
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      path: "/testimonial"
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact"
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />
    }
  ]

  const handleNavigation = (path) => {
    navigate(path);
    setOpenMenu(false);
  };
  return (
    <nav>
     
      <div className="nav-logo-container">
        <img src={Logo} alt=""/>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/testimonial">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        <Link to="">
          <BsCart2 className="navbar-cart-icon" />
          </Link>
        <button className="primary-button">Log in/Sign up</button>
      </div>
      <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  speed={0.5}
/>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
      anchor='right'>
        <Box sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton  onClick={() => handleNavigation(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar
