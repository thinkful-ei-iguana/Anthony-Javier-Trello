import React from 'react';
import Card from './Card';
import STORE from './store';
const s = STORE.STORE.allCards;

function list( header, cards ) {

  let cardsList = cards.map( ( card ) => {
    let title = s[ card ].title
    let content = s[ card ].content
    let key = s[ card ].id
    return <> Card.cards( title, content, key )</>
  } )

  return ( <section className='List'>
    <header>
      {header}
    </header>
    <div className='List-cards'>
      {cardsList}</div>

  </section> );
}

export default { list }