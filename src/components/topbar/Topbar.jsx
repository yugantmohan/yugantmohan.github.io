import "./topbar.scss"
import * as React from 'react';
import Button from '@mui/material/Button';
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";


function Topbar({show,menuShow}) {
    return (
        <div className={"topbar "+ (show && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><Button variant="outlined"><HomeOutlinedIcon className="icon"/></Button>  </a>                  
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> menuShow(!show)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
              
                    </div>
                </div>

                </div>
            
        </div>
    );
}

export default Topbar;