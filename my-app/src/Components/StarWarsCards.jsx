import React, { useState, useEffect } from 'react';

const Character = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState('');

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/1`);
        const data = await response.json();
        setCharacter(data);

        const homeworldResponse = await fetch(data.homeworld);
        const homeworldData = await homeworldResponse.json();
        setHomeworld(homeworldData.name);
      } catch (error) {
        window.alert('Error fetching:', error);
      }
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="p-4 m-4 bg-black text-white rounded-lg">
        <img className="grid items-center content-center" src="https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg" alt="Foto del personaje" />
      <h1 className="text-3xl mb-2 font-starwars text-yellow-400 whitespace-break-spaces">{character.name}</h1>
      <h3 className="text-xl mb-4">Lives in {homeworld}</h3>
      <div className="flex flex-col space-y-2">
        <p>Height: {character.height} cm</p>
        <p>Weight: {character.mass} kg</p>
      </div>
    </div>
  );
};

export default Character;
