import React from 'react';
import "./Character.css";



const Character = props => (
    <div>
    <img src={props.image} alt={props.image}></img>
    </div>
);

export default Character;