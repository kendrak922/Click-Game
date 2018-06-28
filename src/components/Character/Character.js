import React from 'react';
import "./Character.css";



const Character = props => (
    <div>
   <a onClick={()=> props.click(props.id)}><img src={props.image} alt={props.image}/>
    </a>
    </div>
);

export default Character;