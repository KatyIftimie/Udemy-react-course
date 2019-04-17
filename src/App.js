import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Text1 from './test 1/test1.index';


// class UserInput extends Component {

// }






class App extends Component {
  state = {
    persons: [
      { name: 'viorel', age: 77 },
      { name: 'dancila', age: 99999 },
      { name: 'vasilica', age: 79 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DO NOT DO THIS :this.state.persons[0].name= "maximilian";
    this.setState({
      persons: [
        { name: newName, age: 77 },
        { name: 'dancila', age: 99999 },
        { name: 'vasilica', age: 799 }
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'viorel', age: 77 },
        { name: event.target.value, age: 99999 },
        { name: event.target.value, age: 799 }
      ] 
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer' 
    };
    return (
      <div className="App">
        <h1>tytyty</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('valentin')}>Switch name</button> 
        <Person 
          name ={this.state.persons[0].name} 
          age =  {this.state.persons[0].age}/>
        <Person 
          click={this.switchNameHandler.bind(this, 'cartof')}
          name={this.state.persons[1].name} 
          changed={this.nameChangedHandler}
          age =  {this.state.persons[1].age}>proasta </Person>
        <Person 
          changed={this.nameChangedHandler}
          name ={this.state.persons[2].name} 
          age =  {this.state.persons[2].age}/>
        <Text1 />
      </div>
    );
  }
}


export default App;


// const app = props => {
  //   const [ personsState, setPersonsState] = useState({
  //     persons: [
  //       { name: 'viorel', age: 77 },
  //       { name: 'dancila', age: 99999 },
  //       { name: 'vasilica', age: 79 }
  //     ],
  //     otherState: 'some value'
  //   });
  
  //   const switchNameHandler = () => {
  //     // console.log('Was clicked!');
  //     // DO NOT DO THIS :this.state.persons[0].name= "maximilian";
  //     setPersonsState({
  //       persons: [
  //         { name: 'viorelrere', age: 77 },
  //         { name: 'dancila', age: 99999 },
  //         { name: 'vasilica', age: 799 }
  //       ] 
  //     });
  //   };