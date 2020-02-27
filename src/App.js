import React, { Component } from 'react';
import './App.css';
import Bomb from './state-drills/Bomb';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>Roulette Gun</h2>
        <RouletteGun bulletInChamber={3} />
      </div>
    );
  }
}


export default App;

