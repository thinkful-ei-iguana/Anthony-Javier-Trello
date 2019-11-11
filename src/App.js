import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import STORE from './store';
const store = STORE.STORE;

function App() {
  console.log( store )

  let lists = store.lists.map( ( l ) => {
    return List.list( l.header, l.cardIds, l.id )
  } )

  console.log( lists )

  return ( <div className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list"></div>
  </div> );
}

export default App;
