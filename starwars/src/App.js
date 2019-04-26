import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {



    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul>
        {this.state.starwarsChars.map((char) => {
          return <li>
            <h2>{char.name}</h2>
            <p>Birth year: {char.birth_year}</p>
            <p>Created: {char.created}</p>
            <p>Edited: {char.edited}</p>
            <p>Eye colour: {char.eye_color}</p>
            <p>Films: {char.films}</p>
            <p>Gender: {char.gender}</p>
            <p>Hair colour: {char.hair_color}</p>
            <p>Height: {char.height}</p>
            <p>Homeworld: {char.homeworld}</p>
            <p>Mass: {char.mass}</p>
            <p>Skin colour: {char.skin_color}</p>
            <p>Species: {char.species}</p>
            <p>URL: {char.url}</p>
            <p>Vehicles: {char.vehicles}</p>
          </li>
        })}
        </ul>
      </div>
    );
  }
}

export default App;
