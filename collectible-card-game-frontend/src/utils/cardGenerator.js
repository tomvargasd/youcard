// src/utils/cardGenerator.js
import avatarsData from '../data/avatars.json';
import weaponsData from '../data/weapons.json';
import ultimatesData from '../data/ultimates.json';
import { getRandomElement } from './randomizer';
import { getWeightedRandomItemByRarity } from './raritySelector'; // MODIFIED: Import from raritySelector

// MODIFIED: Local getWeightedRandomEpic function REMOVED from here

export const generateCardSet = (userInput) => {
  if (!userInput) {
    console.error("userInput is undefined in generateCardSet");
    return { heroCard: null, weaponCard: null, ultimateCard: null };
  }
  const {
    nickname = "Adventurer",
    favoriteColor = "grey",
    zodiacSign = "ophiuchus",
    favoritePokemon = "",
    favoriteDigimon = "",
    favoriteFruit = "apple",
    favoriteSong = "",
    osPreference = "android",
  } = userInput;

  // --- 1. Hero Card Generation ---
  let selectedAvatarTemplate = avatarsData.find(a => a.fruitAffinity === favoriteFruit) || getRandomElement(avatarsData);
  if (!selectedAvatarTemplate) selectedAvatarTemplate = avatarsData[0];

  const heroCard = {
    id: `hero_${selectedAvatarTemplate.id}_${Date.now()}`,
    name: selectedAvatarTemplate.name_template
      .replace('{{NICKNAME}}', nickname)
      .replace('{{FRUIT}}', favoriteFruit)
      .replace('{{OS}}', osPreference),
    description: selectedAvatarTemplate.description_template
      .replace('{{NICKNAME}}', nickname)
      .replace('{{FRUIT}}', favoriteFruit)
      .replace('{{OS}}', osPreference),
    type: "Hero",
    fruitAffinity: selectedAvatarTemplate.fruitAffinity,
    osAffinity: selectedAvatarTemplate.osAffinity,
    auraColor: favoriteColor,
    stats: { hp: 100, attack: 10, defense: 10 }
  };

  // --- 2. Weapon Card Generation ---
  const increaseEpicChance = favoriteColor === "red" || favoriteColor === "black";
  // MODIFIED: Call imported function
  let selectedWeapon = getWeightedRandomItemByRarity(weaponsData, increaseEpicChance);
  if (!selectedWeapon) selectedWeapon = weaponsData[0];

  let weaponVisualTags = [...selectedWeapon.visualTags];
  const pokemonQuery = favoritePokemon.toLowerCase();
  const digimonQuery = favoriteDigimon.toLowerCase();

  if (pokemonQuery.includes("legendary") || digimonQuery.includes("legendary")) {
    weaponVisualTags.push("legendary_aura");
  }
  if (pokemonQuery.includes("charizard") || pokemonQuery.includes("moltres")) {
      if (!weaponVisualTags.includes("fiery")) weaponVisualTags.push("fiery");
  }

  const weaponCard = {
    id: `weapon_${selectedWeapon.id}_${Date.now()}`,
    name: selectedWeapon.name,
    type: selectedWeapon.type,
    power: selectedWeapon.power,
    rarity: selectedWeapon.rarity,
    visualTags: weaponVisualTags,
    description: selectedWeapon.description,
    imageUrl: selectedWeapon.imageUrl,
    stats: { power: selectedWeapon.power, rarity: selectedWeapon.rarity }
  };

  // --- 3. Ultimate Skill Card Generation ---
  let selectedUltimate = getRandomElement(ultimatesData);
  if (!selectedUltimate) selectedUltimate = ultimatesData[0];

  let ultimatePower = selectedUltimate.basePower;
  const songQuery = favoriteSong.toLowerCase();
  if (songQuery.includes("emotional") || songQuery.includes("epic") || songQuery.includes("power")) {
    ultimatePower = Math.round(ultimatePower * 1.2);
  }

  const ultimateCard = {
    id: `ultimate_${selectedUltimate.id}_${Date.now()}`,
    name: selectedUltimate.name,
    description: selectedUltimate.description,
    basePower: ultimatePower,
    element: selectedUltimate.element,
    themeTags: selectedUltimate.themeTags,
    imageUrl: selectedUltimate.imageUrl,
    type: "Ultimate Skill",
    stats: { power: ultimatePower, element: selectedUltimate.element }
  };

  console.log("Generated card set:", { heroCard, weaponCard, ultimateCard });
  return { heroCard, weaponCard, ultimateCard };
};
