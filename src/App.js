import React, { Component } from 'react';
import Header from './components/Header';
import Character from './components/Character';
import Wrapper from './components/Wrapper';
import people from './characters.json'
import './App.css';

class App extends Component {

state = {
  people,
  score : 0,
  highScore: 0
};

componentDidMount = () => {
  this.shuffleArray(this.state.people);
};

shuffleArray = (peopleArray)=>{
  let copy= [], n = peopleArray.length, i;
while(n){
  i = Math.floor(Math.random() * peopleArray.length)
if (i in peopleArray){
  copy.push(peopleArray[i])
  delete peopleArray[i];
  n--;
}

}
this.setState({people: copy})
}

click = (id) => {
this.shuffleArray(this.state.people);
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
