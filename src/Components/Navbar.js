
import React, { useState } from "react";
import Logo from "../Assets/FINKID.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { NavLink } from 'react-router-dom';
import {Link} from 'react-scroll'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      id:1,
      text: "Home",
      icon: <HomeIcon />,
      link: "home"
    },
    {
      id:2,
      text: "About Us",
      icon: <InfoIcon />,
      link: "about"
    },
    { 
      id:3,
      text: "Our Work",
      icon: <CommentRoundedIcon />,
      link: "work"
    },
    {
      id:4,
      text: "The Team",
      icon: <CommentRoundedIcon />,
      link: "team"
    },
    {
      id:5,
      text: "Contact Us",
      icon: <PhoneRoundedIcon />,
      link: "contact"
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Finkid" />
      </div>
  <div className="navbar-links-container">
  <a href="#home" className="navbar-link">Home</a>
  <a href="#about" className="navbar-link">About Us</a>
  <a href="#work" className="navbar-link">Our Work</a>
  <a href="#work" className="navbar-link">Team</a>
  <a href="#contact" className="navbar-link">Contact</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={NavLink} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
