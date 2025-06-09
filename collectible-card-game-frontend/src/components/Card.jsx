import React from 'react';

// Basic placeholder for a card component
function Card({ name, description, imageUrl, type = 'Item' }) {
  return (
    <div className="bg-gray-700 rounded-lg shadow-xl p-4 hover:shadow-blue-500/50 transition-shadow duration-300 aspect-[2.5/3.5] flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{name || 'Card Name'}</h3>
        {imageUrl && <img src={imageUrl} alt={name || 'Card Image'} className="w-full h-32 object-cover rounded-md mb-2" />}
        {!imageUrl && <div className="w-full h-32 bg-gray-600 rounded-md mb-2 flex items-center justify-center text-gray-400">No Image</div>}
        <p className="text-sm text-gray-300">{description || 'Card description goes here.'}</p>
      </div>
      <p className="text-xs text-gray-500 mt-2">Type: {type}</p>
    </div>
  );
}

export default Card;
