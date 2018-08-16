import React from 'react';
import "./Header.css";


const Header = (props) => ( 
    <div>
    <div className = "row">
    <div className = "col-xs-12">
    <header className ="App-header">
    <h1 className="App-title">Twin Peaks Click Game</h1>
    <h2 className ="score"> Your Score:{props.score}</h2>
    <h2 className="highScore">High Score:{props.highScore}</h2>
    </header>
    </div>
    </div>
    </div>
);

export default Header;