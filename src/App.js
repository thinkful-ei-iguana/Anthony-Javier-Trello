import React from "react";
import "./App.css";
import List from "./List";
import STORE from "./store";

class App extends React.Component {
  state = STORE.STORE;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => {
            return (
              <List
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => this.state.allCards[id])}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
