import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context'

  class App extends Component {
    constructor(props) {
      super(props);
      console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'asdsa', name: 'Max', age: 28},
      {id: 'c', name: 'Manu', age: 29},
      {id: 'ddd', name: 'Stephanie', age: 26}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  shouldComponentUpdate() {
    console.log('[App.js] componentDidUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    // console.log('Was clicked!')
    // dont do this!!!! this.state.persons[0].name = 'Maxmilian';

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated} />;
    }


    return (
      <Aux>
        <button 
          onClick={() => {
            this.setState({showCockpit: !this.state.showCockpit});
          }}
        >
          Show Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit? <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personslength={this.state.persons.length}
            clicked={this.togglePersonsHandler}/>
          : null}    
          {persons}
        </AuthContext.Provider> 
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work?'));
  } 
}

export default withClass(App, classes.App);
