import React from "react";
import "./card-list.style.css";
import {Card} from '../card/card.component.jsx';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.pictures.map(picture => (
        <Card key={picture.id} picture={picture}></Card>
      ))}
    </div>
  );
};
