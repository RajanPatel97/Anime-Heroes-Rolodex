import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';
import heroes from './heroes.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: heroes,
      searchField: ''
    }
  }


  render() {
    const { heroes, searchField } = this.state;
    
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log(filteredHeroes);

    return (
      <div className="App">
        <SearchBox placeholder='Search Heroes' handleChange={e => this.setState({searchField: e.target.value})}></SearchBox>
        <CardList heroes={filteredHeroes}></CardList>
      </div>
    );  
  }
}

export default App;