import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import CustomSelect from '../components/CustomSelect';

// Placeholder options - these could eventually come from data files or an API
const favoriteColors = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'purple', label: 'Purple' },
];

const zodiacSigns = [
  { value: 'aries', label: '[ICON] Aries' },
  { value: 'taurus', label: '[ICON] Taurus' },
  { value: 'gemini', label: '[ICON] Gemini' },
  // ... (add more or keep it short for now)
  { value: 'cancer', label: '[ICON] Cancer' },
];

function HomePage() {
  const [nickname, setNickname] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  const [favoritePokemon, setFavoritePokemon] = useState('');
  const [favoriteDigimon, setFavoriteDigimon] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      nickname,
      favoriteColor,
      zodiacSign,
      favoritePokemon,
      favoriteDigimon,
    };

    console.log('Form Submitted. Data:', formData);

    // Placeholder for randomization logic based on empty fields
    for (const [key, value] of Object.entries(formData)) {
      if (!value) { // Checks for empty string, null, undefined
        console.log(`Field '${key}' is empty, will use randomized data for this later.`);
      }
    }

    // Logic to handle form data and randomization will be added later
    navigate('/pack', { state: { formData } }); // Navigate to pack opening page with form data
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Create Your Profile</h1>
        <p className="text-lg text-gray-400">Tell us a bit about yourself to personalize your pack!</p>
      </header>

      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-xl">
        <Input
          label="Nickname"
          id="nickname"
          placeholder="Enter your nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          icon={<span role="img" aria-label="user icon" className="text-gray-400">👤</span>}
        />

        <CustomSelect
          label="Favorite Color"
          id="favoriteColor"
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
          icon={<span role="img" aria-label="palette icon" className="text-gray-400">🎨</span>}
        >
          <option value="">Select a color</option>
          {favoriteColors.map(color => <option key={color.value} value={color.value}>{color.label}</option>)}
        </CustomSelect>

        <CustomSelect
          label="Zodiac Sign"
          id="zodiacSign"
          value={zodiacSign}
          onChange={(e) => setZodiacSign(e.target.value)}
          icon={<span role="img" aria-label="zodiac icon" className="text-gray-400">✨</span>}
        >
          <option value="">Select your zodiac sign</option>
          {zodiacSigns.map(sign => <option key={sign.value} value={sign.value}>{sign.label}</option>)}
        </CustomSelect>

        <CustomSelect
          label="Favorite Pokémon"
          id="favoritePokemon"
          value={favoritePokemon}
          onChange={setFavoritePokemon}
          icon={<span role="img" aria-label="pokeball icon" className="text-gray-400">⚪</span>}
        >
          <option value="">E.g., Pikachu (API later)</option>
        </CustomSelect>

        <Input
          label="Favorite Digimon"
          id="favoriteDigimon"
          placeholder="E.g., Agumon (API later)"
          value={favoriteDigimon}
          onChange={(e) => setFavoriteDigimon(e.target.value)}
          icon={<span role="img" aria-label="digital monster icon" className="text-gray-400">👾</span>}
        />


        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-6"
        >
          Open Your Pack!
        </button>
      </form>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Gacha Card Simulator. All rights reserved (not really).</p>
      </footer>
    </div>
  );
}

export default HomePage;
