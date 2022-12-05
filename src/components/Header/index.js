import React from 'react'
import logo from "../../assets//logo/long-logo.png"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import SimpleBottomNavigation from "./BottomNav"
import './styles.css'
import BasicMenu from './ProfileMenu'
const Header = () => {
  return (
    <div className="navbar">
          <img src={logo} alt="logo" className="navbar-logo" />
      <div className='search-bar'>
        <div className='search-bar-text'>Any where</div>
        <div className='search-bar-text'>Any week</div>
        <div className='search-bar-text2'>Add guests</div>
        <div className='search-icon-div'>
        <SearchRoundedIcon className='search-icon'/>
        </div>
          </div>
      <div className='profile-container'>
        <div className='airbnb-your-home'>Airbnb your home</div>
        <div className='airbnb-your-home'>
          <LanguageIcon/>
        </div>

        <div className='profile-div'>
          <BasicMenu />
          
        </div>
      </div>
      <SimpleBottomNavigation/>
    </div>
  )
}

export default Header
