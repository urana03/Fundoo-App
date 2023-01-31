import React from 'react'
import './header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
import SplitscreenSharpIcon from '@mui/icons-material/SplitscreenSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { InputAdornment, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { connect, useSelector } from 'react-redux';


function Header(props){
  const openDrawer = () => {
    props.listenToHeader()
  }
    return(
        <div className='main'>
         <div className='icon'><MenuSharpIcon onClick={openDrawer}/></div>
         <div className='keep-img'><img src="/assets/keep.png" alt="" width='100%' height='100%' /></div>
         <div className='keep-text'><span>{props.title}</span></div>
         <div className='search'><TextField
          id="search"
          fullWidth
          sx={{
            boxShadow:1,
            "& .MuiInputBase-root": {
                height: 48
            }
        }}
          placeholder='Search'
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchSharpIcon/></InputAdornment>,
          }}
            />
            </div>
            <div className='refresh-icon'>
              <RefreshSharpIcon />
            </div>
            <div className='list-icon'>
              <SplitscreenSharpIcon  />
            </div>
            <div className='setting-icon'>
              <SettingsOutlinedIcon  />
            </div>
            <div className='apps-icon'>
              <AppsRoundedIcon />
            </div>
            <div className='user-icon'>
                 <AccountCircleIcon />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {title:state.DrawerReducer.title}
}

export default connect(mapStateToProps)(Header)