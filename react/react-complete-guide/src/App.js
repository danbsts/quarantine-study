import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // dont do this!!!! this.state.persons[0].name = 'Maxmilian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    // console.log('Was clicked!')
    // dont do this!!!! this.state.persons[0].name = 'Maxmilian';
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi im a react app</h1>
        <p>this  is working</p>
        <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        {/* this can be inneficient /\ */}
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work?'));
  } 
}

export default App;
