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

const newRandomCard = () => {
  const id =
    Math.random()
      .toString(36)
      .substring(2, 4) +
    Math.random()
      .toString(36)
      .substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: "lorem ipsum"
  };
};

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

  addCard = listId => {
    const newCards = newRandomCard();
    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: newCards.id
        };
      }
    });
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
                addClick={this.addCard}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
