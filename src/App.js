import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';
import heroes from './heroes.json';
import animeHeroesLogo from './animeHeroesLogo.png'


class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: heroes,
      searchField: ''
    }
  }

  handleSearchFieldChange = e => {
    this.setState({searchField: e.target.value});
  };


  render() {
    const { heroes, searchField } = this.state;
    
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <div><img alt="Logo" src={animeHeroesLogo}/></div>
        <SearchBox placeholder='Search Heroes' handleChange={this.handleSearchFieldChange}></SearchBox>
        <CardList heroes={filteredHeroes}></CardList>
      </div>
    );  
  }
}

export default App;