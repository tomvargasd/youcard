// src/components/SvgCard.jsx
import React, { useEffect, useState } from 'react';

// Attempt to import SVG assets as raw strings using Vite's ?raw feature
// These paths are relative to this file's location.
// NOTE: Actual paths might need adjustment based on project setup and how Vite serves/resolves them.
// For robust solution, SVGR or explicit copying to public might be better.

// Placeholder for SVG content - will be populated by fetching or direct import
let bodyAppleSvg = '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Apple Body Placeholder</text>';
let bodyBananaSvg = '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Banana Body Placeholder</text>';
let bodyCherrySvg = '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Cherry Body Placeholder</text>';
let accessoryIosSvg = '<text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="8px">iOS Acc Placeholder</text>';
let accessoryAndroidSvg = '<text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="8px">Android Acc Placeholder</text>';

// --- SVG Template (Simplified for clarity, based on earlier definition) ---
const baseCardTemplate = `
<svg width="250" height="350" xmlns="http://www.w3.org/2000/svg" class="card-svg">
  <defs>
    <style>
      .card-title { font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; text-anchor: middle; dominant-baseline: middle; }
      .card-type { font-family: Arial, sans-serif; font-size: 12px; text-anchor: middle; dominant-baseline: middle; }
      .card-desc { font-family: Arial, sans-serif; font-size: 10px; }
      .card-stats { font-family: Arial, sans-serif; font-size: 12px; }
    </style>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="{{CARD_BACKGROUND_COLOR}}" stroke="#333" stroke-width="2" rx="10" ry="10" />
  <rect x="5" y="5" width="240" height="340" fill="transparent" stroke="{{CARD_BORDER_COLOR}}" stroke-width="3" rx="8" ry="8" />

  <g id="art-area" transform="translate(25, 30) scale(0.9)">
    <!-- Composed Avatar SVGs -->
    {{AVATAR_BODY_SVG_CONTENT}}
    {{AVATAR_ACCESSORY_SVG_CONTENT}}
    <!-- Or Direct Image -->
    <!-- <image href="{{IMAGE_URL}}" x="0" y="0" width="200" height="150" /> -->
  </g>

  <text x="50%" y="190" class="card-title" fill="{{TEXT_COLOR}}">{{CARD_NAME}}</text>
  <text x="50%" y="210" class="card-type" fill="{{TEXT_COLOR_SECONDARY}}">{{CARD_TYPE}}</text>

  <foreignObject x="25" y="225" width="200" height="60">
    <p xmlns="http://www.w3.org/1999/xhtml" class="card-desc" style="color: {{TEXT_COLOR_SECONDARY}}; margin:0; word-wrap:break-word; height: 100%; overflow: hidden;">
      {{DESCRIPTION}}
    </p>
  </foreignObject>

  <g id="stats-area" transform="translate(25, 295)">
    <text x="0" y="0" class="card-stats" fill="{{TEXT_COLOR}}">{{STAT_1_NAME}}: {{STAT_1_VALUE}}</text>
    <text x="0" y="20" class="card-stats" fill="{{TEXT_COLOR}}">{{STAT_2_NAME}}: {{STAT_2_VALUE}}</text>
    <text x="0" y="40" class="card-stats" fill="{{TEXT_COLOR}}">{{STAT_3_NAME}}: {{STAT_3_VALUE}}</text>
  </g>

  {{AURA_LAYER}}
</svg>
`;

// Helper to simulate fetching local SVG content (replace with ?raw imports if possible)
// For now, these will be manually populated if ?raw imports don't work in subtask
const svgContentCache = {};

// This function would ideally use Vite's `import svgString from './path/to/file.svg?raw';`
// but direct execution of that in subtask might be tricky.
// We'll simulate it or use placeholders.

const getSvgPartContent = (partName) => {
    // In a real component, these would be actual imports:
    // import bodyAppleRaw from '../assets/svgs/avatars/body_apple.svg?raw'; etc.
    if (partName === 'body_apple') return svgContentCache.body_apple || bodyAppleSvg;
    if (partName === 'body_banana') return svgContentCache.body_banana || bodyBananaSvg;
    if (partName === 'body_cherry') return svgContentCache.body_cherry || bodyCherrySvg;
    if (partName === 'accessory_ios') return svgContentCache.accessory_ios || accessoryIosSvg;
    if (partName === 'accessory_android') return svgContentCache.accessory_android || accessoryAndroidSvg;
    return '<text>Unknown SVG Part</text>';
};


function SvgCard({ cardData }) {
  const [finalSvg, setFinalSvg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!cardData) {
      setIsLoading(false);
      setFinalSvg('<svg width="250" height="350"><text>No card data</text></svg>');
      return;
    }

    // Simulate loading SVG parts if we were actually fetching them
    // For now, this is synchronous as we use placeholders or direct strings.
    // If using actual ?raw imports, they are available at module load time.

    // Pre-populate cache with placeholder SVG strings (if ?raw imports are not used/failed)
    // This part is for ensuring the component has *some* SVG strings to work with.
    // In a real scenario with Vite `?raw` imports, these would be directly assigned:
    // svgContentCache.body_apple = bodyAppleRaw; // (if bodyAppleRaw was imported)

    // For the subtask, we'll assume the global placeholder strings are sufficient if ?raw fails.

    let populatedSvg = baseCardTemplate;

    // Default styles and content
    const defaults = {
      CARD_BACKGROUND_COLOR: '#f0f0f0',
      CARD_BORDER_COLOR: '#555555',
      TEXT_COLOR: '#111111',
      TEXT_COLOR_SECONDARY: '#444444',
      AVATAR_BODY_SVG_CONTENT: '',
      AVATAR_ACCESSORY_SVG_CONTENT: '',
      IMAGE_URL: '',
      AURA_LAYER: '',
      CARD_NAME: 'N/A',
      CARD_TYPE: 'N/A',
      DESCRIPTION: 'N/A',
      STAT_1_NAME: '', STAT_1_VALUE: '',
      STAT_2_NAME: '', STAT_2_VALUE: '',
      STAT_3_NAME: '', STAT_3_VALUE: '',
    };

    const data = { ...defaults };

    // Populate based on card type
    if (cardData.type === 'Hero') {
      data.CARD_BACKGROUND_COLOR = '#e0f7fa'; // Light cyan
      data.CARD_BORDER_COLOR = cardData.auraColor || '#00796b';
      data.TEXT_COLOR = '#004d40';
      data.CARD_NAME = cardData.name;
      data.CARD_TYPE = cardData.type;
      data.DESCRIPTION = cardData.description;
      data.AVATAR_BODY_SVG_CONTENT = getSvgPartContent(`body_${cardData.fruitAffinity}`);
      data.AVATAR_ACCESSORY_SVG_CONTENT = getSvgPartContent(`accessory_${cardData.osAffinity}`);
      if (cardData.auraColor) {
        data.AURA_LAYER = `<rect x="0" y="0" width="100%" height="100%" fill="${cardData.auraColor}" opacity="0.15" style="pointer-events:none;" rx="10" ry="10" />`;
      }
      data.STAT_1_NAME = 'HP'; data.STAT_1_VALUE = cardData.stats?.hp || 'N/A';
      data.STAT_2_NAME = 'ATK'; data.STAT_2_VALUE = cardData.stats?.attack || 'N/A';
      data.STAT_3_NAME = 'DEF'; data.STAT_3_VALUE = cardData.stats?.defense || 'N/A';

    } else if (cardData.type === 'Weapon') {
      data.CARD_BACKGROUND_COLOR = '#ffecb3'; // Light orange
      data.CARD_BORDER_COLOR = '#e65100';
      data.TEXT_COLOR = '#4e342e';
      data.CARD_NAME = cardData.name;
      data.CARD_TYPE = `${cardData.rarity} ${cardData.type}`;
      data.DESCRIPTION = cardData.description;
      // data.IMAGE_URL = cardData.imageUrl; // If using <image> tag
      // For now, let's put a placeholder if no SVG composition for weapons
      data.AVATAR_BODY_SVG_CONTENT = `<text x="100" y="80" text-anchor="middle" font-size="14">${cardData.type} Art</text>`;
      data.STAT_1_NAME = 'Power'; data.STAT_1_VALUE = cardData.stats?.power || 'N/A';
      data.STAT_2_NAME = 'Rarity'; data.STAT_2_VALUE = cardData.stats?.rarity || 'N/A';

    } else if (cardData.type === 'Ultimate Skill') {
      data.CARD_BACKGROUND_COLOR = '#d1c4e9'; // Light purple
      data.CARD_BORDER_COLOR = '#4527a0';
      data.TEXT_COLOR = '#311b92';
      data.CARD_NAME = cardData.name;
      data.CARD_TYPE = cardData.type;
      data.DESCRIPTION = cardData.description;
      data.AVATAR_BODY_SVG_CONTENT = `<text x="100" y="80" text-anchor="middle" font-size="14">${cardData.element} Skill Art</text>`;
      data.STAT_1_NAME = 'Power'; data.STAT_1_VALUE = cardData.stats?.power || 'N/A';
      data.STAT_2_NAME = 'Element'; data.STAT_2_VALUE = cardData.stats?.element || 'N/A';
    }

    // Replace placeholders
    for (const key in data) {
      populatedSvg = populatedSvg.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
    }

    setFinalSvg(populatedSvg);
    setIsLoading(false);

  }, [cardData]);

  if (isLoading) {
    return <div>Loading SVG Card...</div>;
  }

  // Use dangerouslySetInnerHTML to render the SVG string
  return <div dangerouslySetInnerHTML={{ __html: finalSvg }} />;
}

export default SvgCard;
