import React from 'react';
import Card from './Card';
import './styles/list.min.css';

export default function List( props ) {

  console.log( props )

  let cardsList = props.cards.map( ( card ) => {
    return <Card title={card.title} content={card.content} key={card.id}/>
  } )

  return ( <section className='List'>
    <header className='List-header'>
      {props.header}
    </header>
    <div className='List-cards'>
      {cardsList}
      <button className='List-add-button'>
        + Add random card
      </button>
    </div>

  </section> );
}
