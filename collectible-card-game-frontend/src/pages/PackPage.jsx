import React from 'react';
import { Link } from 'react-router-dom';

function PackPage() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Your Pack</h1>
        <p className="text-lg text-gray-300">Here are your cards!</p>
      </header>

      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-12">
        {/* Placeholder for cards */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 aspect-[2.5/3.5] rounded-lg shadow-xl flex items-center justify-center p-4 hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            <p className="text-gray-400 text-sm">Card {index + 1}</p>
          </div>
        ))}
      </main>

      <footer className="text-center">
        <Link
          to="/"
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg text-md transition duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
}

export default PackPage;
