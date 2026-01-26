import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import CustomSelect from '../components/CustomSelect';
import { zodiacSigns } from '../data/zodiac.jsx';

// Placeholder options - these could eventually come from data files or an API
const favoriteColors = [
  { value: 'red', label: 'Red', color: '#FF0000' },
  { value: 'blue', label: 'Blue', color: '#0000FF' },
  { value: 'green', label: 'Green', color: '#008000' },
  { value: 'yellow', label: 'Yellow', color: '#FFFF00' },
  { value: 'purple', label: 'Purple', color: '#800080' },
  { value: 'orange', label: 'Orange', color: '#FFA500' },
  { value: 'pink', label: 'Pink', color: '#FFC0CB' },
  { value: 'black', label: 'Black', color: '#000000' },
  { value: 'white', label: 'White', color: '#FFFFFF' },
];

function HomePage() {
  const [nickname, setNickname] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  const [favoritePokemon, setFavoritePokemon] = useState('');
  const [pokemonOptions, setPokemonOptions] = useState([]);
  const [loadingPokemon, setLoadingPokemon] = useState(false);
  const [allPokemon, setAllPokemon] = useState([]);
  const [favoriteDigimon, setFavoriteDigimon] = useState('');
  const [digimonOptions, setDigimonOptions] = useState([]);
  const [loadingDigimon, setLoadingDigimon] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPokemon = async () => {
      setLoadingPokemon(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`);
        const data = await response.json();
        const processedPokemon = data.results.map(p => {
          const urlParts = p.url.split('/');
          const id = urlParts[urlParts.length - 2];
          return {
            value: p.name,
            label: p.name.charAt(0).toUpperCase() + p.name.slice(1),
            name: p.name,
            icon: <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={p.name} style={{ width: '24px', height: '24px' }} />
          };
        });
        setAllPokemon(processedPokemon);
      } catch (error) {
        console.error('Error fetching initial Pokemon data:', error);
      }
      setLoadingPokemon(false);
    };
    fetchAllPokemon();
  }, []);

  const handleDigimonSearch = async (searchValue) => {
    if (!searchValue) {
      setDigimonOptions([]);
      return;
    }
    setLoadingDigimon(true);
    try {
      const response = await fetch(`https://digi-api.com/api/v1/digimon?name=${searchValue}`);
      const data = await response.json();
      const digimonData = data.content.map((digimon) => ({
        value: digimon.name,
        label: digimon.name,
        icon: <img src={digimon.image} alt={digimon.name} style={{ width: '24px', height: '24px' }} />
      }));
      setDigimonOptions(digimonData);
    } catch (error) {
      console.error('Error fetching Digimon data:', error);
    }
    setLoadingDigimon(false);
  };

  const handlePokemonSearch = (searchValue) => {
    if (!searchValue) {
      setPokemonOptions([]);
      return;
    }
    const filtered = allPokemon
      .filter(p => p.name.includes(searchValue.toLowerCase()))
      .slice(0, 10);
    setPokemonOptions(filtered);
  };

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
          onChange={setFavoriteColor}
          icon={<span role="img" aria-label="palette icon" className="text-gray-400">🎨</span>}
          placeholder="Select a color"
          options={favoriteColors}
          optionRender={(option) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: option.color,
                marginRight: '8px',
                border: '1px solid #555'
              }} />
              <span>{option.label}</span>
            </div>
          )}
        />

        <CustomSelect
          label="Zodiac Sign"
          id="zodiacSign"
          value={zodiacSign}
          onChange={setZodiacSign}
          icon={<span role="img" aria-label="zodiac icon" className="text-gray-400">✨</span>}
          placeholder="Select your zodiac sign"
          options={zodiacSigns}
          optionRender={(option) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>{option.icon}</span>
              <span>{option.label}</span>
            </div>
          )}
        />

        <CustomSelect
          label="Favorite Pokémon"
          id="favoritePokemon"
          value={favoritePokemon}
          onChange={setFavoritePokemon}
          onSearch={handlePokemonSearch}
          options={pokemonOptions}
          loading={loadingPokemon}
          showSearch
          icon={<span role="img" aria-label="pokeball icon" className="text-gray-400">⚪</span>}
          placeholder="E.g., Pikachu"
          optionRender={(option) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>{option.icon}</span>
              <span>{option.label}</span>
            </div>
          )}
        />

        <CustomSelect
          label="Favorite Digimon"
          id="favoriteDigimon"
          value={favoriteDigimon}
          onChange={setFavoriteDigimon}
          onSearch={handleDigimonSearch}
          options={digimonOptions}
          loading={loadingDigimon}
          showSearch
          icon={<span role="img" aria-label="digital monster icon" className="text-gray-400">👾</span>}
          placeholder="E.g., Agumon"
          optionRender={(option) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px' }}>{option.icon}</span>
              <span>{option.label}</span>
            </div>
          )}
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
