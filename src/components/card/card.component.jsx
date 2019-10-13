import React from 'react';
import './card.style.css';


export const Card = (props) => (
<div className = 'card-container'>
    <img alt = 'picture' src={props.picture.Image} height="300" width="300"></img>
    <h1>{props.picture.name}</h1>
</div>
);