import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
// if using a version of scripts > 2.0 just rename the css file to Person.module.css

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');    
        return (
            // you can use React.Fragment - same wrapping
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name}, and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );
    }
};

export default Person;