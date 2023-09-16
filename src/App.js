import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeerList from './BeerList';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Punk API Beers</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <BeerList beers={beers} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
