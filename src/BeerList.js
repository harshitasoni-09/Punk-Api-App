import React from 'react';
import BeerCard from './BeerCard';

function BeerList({ beers, searchTerm }) {
  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="beer-list">
      {filteredBeers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;
