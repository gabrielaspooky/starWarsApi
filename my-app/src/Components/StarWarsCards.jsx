import React, { useState, useEffect, Fragment } from 'react';
import Card from './Card';
import LoadingScreen from './LoadingScreen';

const Characters = ({ charactersId }) => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/`);
        const data = await response.json();
        setCharacters(data.results);

      } catch (error) {
        console.log('Error fetching:', error);
      }
    };

    fetchCharacters();

  }, [charactersId]);

  console.log(characters);

  if (!characters) return <LoadingScreen />;

  return (
    <>
    {characters.map(character => {

return(<Card character={character} />)

    })}
    </>


  );
};

export default Characters;
