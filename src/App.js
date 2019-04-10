import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'viorel', age: 77 },
      { name: 'dancila', age: 99999 },
      { name: 'vasilica', age: 79 }
    ]
  }


  render() {
    return (
      <div className="App">
        <h1>tytyty</h1>
        <button>Switch name</button>
        <Person name ={this.state.persons[0].name} age =  {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age =  {this.state.persons[1].age}>proasta </Person>
        <Person name ={this.state.persons[2].name} age =  {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
