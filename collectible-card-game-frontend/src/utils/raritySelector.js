// src/utils/raritySelector.js
import { getRandomElement } from './randomizer';

/**
 * Selects an item from a list based on rarity with weighted probabilities.
 * Allows for a boosted chance for 'Epic' items.
 *
 * @param {Array<Object>} items - Array of items, each with a 'rarity' property.
 * @param {boolean} boostEpicChance - If true, increases the chance of selecting an 'Epic' item.
 * @returns {Object|null} A randomly selected item, or null if input is invalid.
 */
export const getWeightedRandomItemByRarity = (items, boostEpicChance = false) => {
  if (!items || items.length === 0) return null;

  const common = items.filter(i => i.rarity === 'Common');
  const rare = items.filter(i => i.rarity === 'Rare');
  const epic = items.filter(i => i.rarity === 'Epic');
  const legendary = items.filter(i => i.rarity === 'Legendary');

  // Define base chances
  const chances = {
    legendary: 0.05, // 5%
    epic: 0.15,      // 15%
    rare: 0.30,      // 30%
    common: 0.50     // 50%
  };

  if (boostEpicChance) {
    chances.epic = 0.30;      // Boosted to 30%
    chances.rare = 0.25;      // Adjust rare
    chances.common = 0.40;    // Adjust common
    // Legendary chance remains 5%. Total = 30+25+40+5 = 100%
  }
  // Ensure common fills remaining probability if adjustments are made elsewhere
  // For now, the above sum to 1.0 for both cases.

  const rand = Math.random();
  let cumulativeChance = 0;

  cumulativeChance += chances.legendary;
  if (rand < cumulativeChance && legendary.length > 0) return getRandomElement(legendary);

  cumulativeChance += chances.epic;
  if (rand < cumulativeChance && epic.length > 0) return getRandomElement(epic);

  cumulativeChance += chances.rare;
  if (rand < cumulativeChance && rare.length > 0) return getRandomElement(rare);

  // Fallback to common or any item if specific rarities are empty
  if (common.length > 0) return getRandomElement(common);
  if (items.length > 0) return getRandomElement(items);
  return null; // Should not happen if items is not empty initially
};

// Placeholder for other rarity-based selection functions if needed in the future.
// export const selectByRarity = (itemsWithRarity) => {
//   if (!itemsWithRarity || itemsWithRarity.length === 0) return null;
//   return itemsWithRarity[0];
// };
