import React from "react";
import "./App.css";
import List from "./List";
import STORE from "./store";

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

class App extends React.Component {
  state = STORE.STORE;

  deleteCard = cardId => {
    const newLists = this.state.lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(this.state.allCards, cardId);

    this.setState({
      lists: newLists,
      allCards: newCards
    });
  };

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
                id={list.id}
                header={list.header}
                cards={list.cardIds.map(id => this.state.allCards[id])}
                onClick={this.deleteCard}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
