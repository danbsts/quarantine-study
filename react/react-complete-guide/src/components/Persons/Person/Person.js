import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'
// if using a version of scripts > 2.0 just rename the css file to Person.module.css

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    
    render() {
        console.log('[Person.js] rendering...');    
        return (
            // you can use React.Fragment - same wrapping
            <Aux>
                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p> }
                <p onClick={this.props.click} key="i1">I'm {this.props.name}, and I'm {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        );
    }
};

// Feel free to use it :D - important when developing a livrary
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);