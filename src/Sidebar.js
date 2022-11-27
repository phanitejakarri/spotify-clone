import React from 'react';
import "./Sidebar.css";
import { useDataLayerValue } from "./DataLayer";
import SidebarOption from './SidebarOption';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {
  const [{ playlists },dispatch] =useDataLayerValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img 
      className="sidebar__logo"
      src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=""/>

      <SidebarOption Icon={HomeTwoToneIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlists) => {
        return (
          <SidebarOption title={playlist.name} />
        );
      })}
        
      </div>
  )
}

export default Sidebar;