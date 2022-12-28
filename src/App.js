import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/CardList/CardList';
import { SearchBox } from './Components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  handleSearchFieldChange = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state.searchField)
    );
  };

  async componentDidMount() {
    //https://jsonplaceholder.typicode.com/users
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState({ monsters: users });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonstersList = monsters.filter((monter) =>
      monter.name.toLowerCase().includes(searchField.toLowerCase().trim())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monster'
          handleChange={this.handleSearchFieldChange}
        />
        <CardList monsters={filterMonstersList} />
      </div>
    );
  }
}

export default App;
