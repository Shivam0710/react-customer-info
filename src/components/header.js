import React from 'react';

import classes from './header.module.css';

const header = () => {
    return ( 
    <div className={classes.header}>
        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-palm-coconut-tree-logo-icon-png-image_4139415.jpg"
         alt="logo"></img>
        <h1>TravClan React Test</h1>
    </div> );
}
 
export default header;