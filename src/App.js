import React, { Component } from 'react';
import Header from './components/Header';
import people from './characters.json'
import Wrapper from './components/Wrapper'
import Character from './components/Character'
import './App.css';

class App extends Component {

state = {
  people,
  score : 0,
  highScore: 0
};

componentDidMount = () => {
  this.shuffleArray(people);
};

shuffleArray = (peopleArray)=>{
for(let i = peopleArray.length -1; i>0; i--){
let j = Math.floor(Math.random() * (i + 1));
[peopleArray[i], peopleArray[j]] = [peopleArray[j], peopleArray[i]]
}
}

click = (id) => {
  this.shuffleArray(people);
if (!this.state.people.clicked){
this.setState({clicked: "true"})
this.setState((prevState) => { 
    return {score: prevState.score  + 1};

  });

} else {
  this.setState(() => { 
  return {score: 0};
});

}
// const setClick = this.state.people.filter(person => person.id === id)
// 


};
///reset
// resetGame = () =>
// {
//   this.setState((prevState) => { 
//     return {score: 0};
//   });

  render() {
    return (
      <div className="App">
        <Header
        score={this.state.score}
        highScore={this.state.highScore}
        ></Header>
        <Wrapper>
        {this.state.people.map(person => (
        <Character
        key={person.id}
        image={person.image}
        click={this.click}
        clicked={person.clicked}
        />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
