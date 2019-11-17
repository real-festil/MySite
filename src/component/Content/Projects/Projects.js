import React from 'react';
import classes from './Projects.module.css';

const projects = ( props ) => {
    return  (
            <div style={{backgroundImage: `url(${props.backgroundImage})`}} className={classes.Projects}>
                <h1>{props.caption}</h1>
                <p>{props.desc}</p>
                <a href={props.href}>
                    <button>Перейти</button>
                </a>
            </div>
    )
}

export default projects;