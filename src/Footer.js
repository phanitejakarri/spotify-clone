import React from 'react';
import './Footer.css';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import { Grid, Slider } from "@mui/material";
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className='Footer'>
     <div className='footer__left'>

       <img 
       className='Footer__albumLogo'
        src='https://i.redd.it/ncfsjkvlzvw31.jpg'
        alt='something ' />
        <div className='footer__songinfo'>
       <h4>yeah!</h4>
       <p>user</p>
       </div>
     </div>
     
     <div className='footer__center'>
        <ShuffleOutlinedIcon className='footer__green' />
        <SkipPreviousOutlinedIcon className='footer__icon' />
        <PlayCircleFilledWhiteOutlinedIcon fontSize="large" className='footer__icon' />
        <SkipNextOutlinedIcon className='footer__icon' />
        <RepeatOutlinedIcon className='footer__green' />
     </div>

     <div className='footer__right'>
        <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayRoundedIcon />
            </Grid>
            <Grid item>
                <VolumeDownIcon />
            </Grid>
            <Grid item xs>
                <Slider />
            </Grid>
        </Grid>
     </div>

    </div>
  )
}

export default Footer