import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      {id: 'asdsa', name: 'Max', age: 28},
      {id: 'c', name: 'Manu', age: 29},
      {id: 'ddd', name: 'Stephanie', age: 26}
    ],
    showPersons: false
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
    
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      );
      btnClass = (classes.Red);
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
      <div className={classes.App}>
        <h1>Hi im a react app</h1>
        <p className={assignedClasses.join(' ')}>this  is working</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button >
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work?'));
  } 
}

export default App;
