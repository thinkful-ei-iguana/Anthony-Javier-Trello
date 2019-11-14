import React from "react";
import Card from "./Card";
import "./styles/list.min.css";

function List(props) {
  console.log(props);
  return (
    <section className="List">
      <header className="List-header">{props.header}</header>
      <div className="List-cards">
        {props.cards.map(card => {
          return (
            <Card title={card.title} content={card.content} key={card.id} />
          );
        })}
        <button className="List-add-button">+ Add random card</button>
      </div>
    </section>
  );
}

export default List;