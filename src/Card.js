import React from 'react';

function cards( title, content, key ) {
  return ( <div key={key} id={key} className='Card'>
    <h3>{title}</h3>
    <p>{content}</p>
  </div> );
}

export default { cards }