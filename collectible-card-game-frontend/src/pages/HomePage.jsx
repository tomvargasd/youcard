import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Collectible Card Game</h1>
        <p className="text-xl text-gray-400">Experience the thrill of opening a new pack!</p>
      </header>

      <main className="text-center">
        <Link
          to="/pack"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Open Your Pack
        </Link>
      </main>

      <footer className="absolute bottom-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Card Opener Simulator. All rights reserved (not really).</p>
      </footer>
    </div>
  );
}

export default HomePage;
