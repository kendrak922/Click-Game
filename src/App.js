import React, { Component } from 'react';
import Header from './components/Header';
import Character from './components/Character';
import Wrapper from './components/Wrapper';
import people from './characters.json'
import './App.css';

class App extends Component {

state = {
  people
};

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Wrapper>
        {this.state.people.map(person => (
        <Character
        key={person.id}
        image={person.image}
        />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
