import React from 'react';
import Card from './Card'; // Assuming Card.jsx is in the same directory

// Basic placeholder for a card pack opening experience
function CardPack({ cards }) {
  if (!cards || cards.length === 0) {
    return <p className="text-center text-gray-400">No cards in this pack.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Pack Contents</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <Card key={card.id || index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CardPack;
