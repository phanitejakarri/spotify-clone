import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import * as DataLayer from './DataLayer';


function Header() {
  const [{ user }, dispatch] = DataLayer.useDataLayerValue();
  return (
    <div className='header'>
        <div className='header__left'>

            <SearchIcon />
            <input    
            placeholder='Search For Artists ,song ,'
            type='text' 
            />
        </div>

        <div className='header__right'>
         <Avatar src={user?.image[0]?.url} alt={user?.display_name } />
            <h4>{user?.display_name}</h4>
        </div>
        
    </div>
  )
}

export default Header