import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import heroes from './heroes.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes
    }
  }


  render() {
    const { heroes } = this.state;
    
    return (
      <div className="App">
        <CardList heroes={heroes}></CardList>
      </div>
    );  
  }
}

export default App;