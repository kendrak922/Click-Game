import React from 'react';
import "./Character.css";



const Character = props => (
    <div>
    {/* <div className = "row"> */}
    <div className = "col-xs-3">
   <a onClick={()=> props.click(props.id)}><img src={props.image} alt={props.image}/>
    </a>
    {/* </div> */}
    </div>
    </div>
);

export default Character;