import React from 'react';
import classes from './Skill.module.css';

const skill = ( props ) => {
    return (
        <div className={classes.Skill}>
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <h1>
                {props.caption}
            </h1>
            <p>
                {props.desc}
            </p>
        </div>
    )
}

export default skill;