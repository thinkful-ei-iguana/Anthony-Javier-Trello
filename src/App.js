import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import STORE from './store';
const store = STORE.STORE;

function App() {

  let lists = store.lists.map( list => {
    let id = list.cardIds.map( id => store.allCards[ id ] );
    return <List key={list.id} header={list.header} cards={id}/>
  } );

  return ( <div className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">{lists}</div>
  </div> );
}

export default App;
