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

      <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" />

        <h1 className="Header">React Wars</h1>
        <ul>
        {this.state.starwarsChars.map((char) => {
          return <li>
            <h2>{char.name}</h2>
            <p><strong>Birth year</strong>: {char.birth_year}</p>
            <p><strong>Created</strong>: {char.created}</p>
            <p><strong>Edited</strong>: {char.edited}</p>
            <p><strong>Eye colour</strong>: {char.eye_color}</p>
            <p><strong>Films</strong>: {char.films}</p>
            <p><strong>Gender</strong>: {char.gender}</p>
            <p><strong>Hair colour</strong>: {char.hair_color}</p>
            <p><strong>Height</strong>: {char.height}</p>
            <p><strong>Homeworld</strong>: {char.homeworld}</p>
            <p><strong>Mass</strong>: {char.mass}</p>
            <p><strong>Skin colour</strong>: {char.skin_color}</p>
            <p><strong>Species</strong>: {char.species}</p>
            <p><strong>URL</strong>: {char.url}</p>
            <p><strong>Vehicles</strong>: {char.vehicles}</p>
          </li>;
        })}
        </ul>
      </div>
    );
  }
}

export default App;
