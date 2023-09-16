import React from 'react';

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>ABV: {beer.abv}%</p>
    </div>
  );
}

export default BeerCard;
