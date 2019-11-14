import React from "react";
import Card from "./Card";
import "./styles/list.min.css";

function List(props) {
  return (
    <section className="List">
      <header className="List-header">{props.header}</header>
      <div className="List-cards">
        {props.cards.map(card => {
          return (
            <Card
              id={card.id}
              title={card.title}
              content={card.content}
              key={card.id}
              onClick={props.onClick}
            />
          );
        })}
        <button
          className="List-add-button"
          onClick={() => props.addClick(props.id)}
        >
          + Add random card
        </button>
      </div>
    </section>
  );
}

export default List;
