import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { generateCardSet } from '../utils/cardGenerator';
import SvgCard from '../components/SvgCard'; // Import the SvgCard component

function PackPage() {
  const location = useLocation();
  const [generatedCards, setGeneratedCards] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const userInput = location.state?.formData;

    if (userInput) {
      try {
        const cardSet = generateCardSet(userInput);
        setGeneratedCards(cardSet);
      } catch (err) {
        console.error("Error generating card set:", err);
        setError('There was an error generating your cards. Please try again.');
        // Fallback to very basic default cards or structure if needed
        setGeneratedCards({
            heroCard: { name: "Error Hero", type: "Hero", description: "Error generating hero." },
            weaponCard: { name: "Error Weapon", type: "Weapon", description: "Error generating weapon." },
            ultimateCard: { name: "Error Ultimate", type: "Ultimate Skill", description: "Error generating ultimate." }
        });
      }
    } else {
      // Handle case where no user input is found (e.g., direct navigation to /pack)
      console.warn("No user input found in location state. Displaying default/error message.");
      setError('No user data found to generate cards. Please start from the home page.');
       // Optionally, generate a completely random set or show specific message
      setGeneratedCards({ // Provide some structure for SvgCard to render fallbacks
            heroCard: { name: "Default Hero", type: "Hero", description: "Please submit form on home page." },
            weaponCard: { name: "Default Weapon", type: "Weapon", description: "Please submit form on home page." },
            ultimateCard: { name: "Default Ultimate", type: "Ultimate Skill", description: "Please submit form on home page." }
        });
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold mb-3">Your Generated Pack</h1>
        {error && <p className="text-red-400 text-lg">{error}</p>}
        {!error && !generatedCards && <p className="text-lg text-gray-300">Generating your cards...</p>}
      </header>

      {generatedCards && (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 px-4 max-w-screen-xl w-full">
          {generatedCards.heroCard && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-3">Hero Card</h2>
              <SvgCard cardData={generatedCards.heroCard} />
            </div>
          )}
          {generatedCards.weaponCard && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-3">Weapon Card</h2>
              <SvgCard cardData={generatedCards.weaponCard} />
            </div>
          )}
          {generatedCards.ultimateCard && (
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-3">Ultimate Skill</h2>
              <SvgCard cardData={generatedCards.ultimateCard} />
            </div>
          )}
        </main>
      )}

      <footer className="text-center my-8">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out"
        >
          Create Another Pack
        </Link>
      </footer>
    </div>
  );
}

export default PackPage;
