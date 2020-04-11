import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 'as1w',
          name: 'Frankenstein'
        },
        {
          id: 'as2w',
          name: 'Dracula'
        },
        {
          id: 'as3w',
          name: 'Zombie'
        }
      ]
    }
  }

  render () {
    return ( 
        <div className="App">
          {
            this.state.monsters.map(monster => (
              <h1 key={monster.id}>{monster.name}</h1>
            ))
          }
        </div>
    );
    }
};
export default App;
