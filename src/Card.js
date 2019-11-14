import React from 'react';
import './styles/card.min.css';

export default function cards( props ) {
  console.log(props)
  return ( <div className='Card'>
    <button type="button" onClick={() => props.onClick(props.id)}>delete</button>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div> );
}
