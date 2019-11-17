import React from 'react';
import classes from './Header.module.css';

const header = () =>  {
    return (
        <div className={classes.Header}>
            <h1>Гладышев Роман</h1>
            <p>Web разработчик</p>
        </div>
    )
}

export default header;