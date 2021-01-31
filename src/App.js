import { Component } from 'react';
import './App.css';
import heroes from './heroes.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes
    }
  }


  render() {
    return (
      <div className="App">
        {
          this.state.heroes.map(hero => <h1 key={hero.id}> {hero.name}</h1>)
        }
      </div>
    );  
  }
}

export default App;