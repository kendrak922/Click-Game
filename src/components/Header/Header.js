import React from 'react';
import "./Header.css";


const Header = (props) => ( 
    <div>
    <header className ="App-header">
    <h1 className="App-title">Twin Peaks Click Game</h1>
    <h2 className ="score"> Your Score:{props.score}</h2>
    <h2 className="highScore">High Score:{props.highScore}</h2>
    </header>
    </div>
);

export default Header;