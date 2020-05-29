import React from 'react';
import classes from './Person.css'
// if using a version of scripts > 2.0 just rename the css file to Person.module.css

const person = (props) => {
    console.log('[Person.js] rendering...');    
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;