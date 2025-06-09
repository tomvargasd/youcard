// src/utils/apiService.js

/**
 * Placeholder for functions that interact with external APIs.
 */

// --- Pokémon API (PokeAPI) ---
/**
 * Searches for Pokémon based on a query string.
 * (Placeholder for PokeAPI integration)
 * @param {string} query - The search term (e.g., "Pikachu").
 * @returns {Promise<Array>} A promise that resolves to an array of Pokémon suggestions.
 */
export const searchPokemon = async (query) => {
  console.log(`[apiService.searchPokemon] Called with query: "${query}" - Implementation pending.`);
  if (!query) return Promise.resolve([]);
  // Simulate API call delay and return sample data
  await new Promise(resolve => setTimeout(resolve, 500));
  if (query.toLowerCase().includes("pika")) {
    return Promise.resolve([
      { id: 25, name: "Pikachu", suggestion: "Pikachu (Electric)" },
      { id: 172, name: "Pichu", suggestion: "Pichu (Electric)" },
    ]);
  }
  return Promise.resolve([{ id: 0, name: query, suggestion: `${query} (Unknown Type - Sample)` }]);
};

// --- Digimon API (Digi-API) ---
/**
 * Searches for Digimon based on a query string.
 * (Placeholder for Digi-API integration)
 * @param {string} query - The search term (e.g., "Agumon").
 * @returns {Promise<Array>} A promise that resolves to an array of Digimon suggestions.
 */
export const searchDigimon = async (query) => {
  console.log(`[apiService.searchDigimon] Called with query: "${query}" - Implementation pending.`);
  if (!query) return Promise.resolve([]);
  await new Promise(resolve => setTimeout(resolve, 500));
  if (query.toLowerCase().includes("agu")) {
    return Promise.resolve([
      { id: 1, name: "Agumon", suggestion: "Agumon (Rookie)" },
      { id: 2, name: "Agumon (Black)", suggestion: "Agumon (Black) (Rookie)" },
    ]);
  }
  return Promise.resolve([{ id: 0, name: query, suggestion: `${query} (Unknown Level - Sample)` }]);
};

// --- Music API (Free Music API - e.g., MusicBrainz, Deezer public API) ---
/**
 * Searches for song information based on artist and title.
 * (Placeholder for a free music API integration)
 * @param {string} artist - The artist's name.
 * @param {string} title - The song's title.
 * @returns {Promise<Object|null>} A promise that resolves to song information or null if not found.
 */
export const searchSong = async (artist, title) => {
  console.log(`[apiService.searchSong] Called with artist: "${artist}", title: "${title}" - Implementation pending.`);
  if (!artist || !title) return Promise.resolve(null);
  await new Promise(resolve => setTimeout(resolve, 500));
  if (artist.toLowerCase().includes("queen") && title.toLowerCase().includes("bohemian")) {
    return Promise.resolve({
      artist: "Queen",
      title: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      year: "1975",
      genre: "Rock",
    });
  }
  return Promise.resolve({
    artist: artist,
    title: title,
    album: "Unknown Album (Sample)",
    year: "Unknown Year (Sample)",
    genre: "Unknown Genre (Sample)",
  });
};

// It would also be good to think about how to handle API keys if needed,
// though these specific public APIs might not require them for basic search.
// For APIs requiring keys, they should not be hardcoded.
