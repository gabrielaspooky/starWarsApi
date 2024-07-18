import React, { useEffect, useState } from 'react'

const Card = ({character}) => {
    const [homeworld, setHomeworld] = useState("");
    useEffect(() => {
        const fetchCharacters = async () => {
          try {
            const response = await fetch(character.homeworld);
            const data = await response.json();
            setHomeworld(data.name);
    
          } catch (error) {
            console.log('Error fetching:', error);
          }
        };
    
        fetchCharacters();
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    console.log(homeworld);
  return (
    <div>
          <div className="p-4 m-4 bg-black text-white rounded-lg">
        <img className="flex items-center content-center" src="https://static.wikia.nocookie.net/esstarwars/images/d/d9/Luke-rotjpromo.jpg" alt="Foto del personaje" />
      <h1 className="text-3xl mb-2 font-starwars text-yellow-400">{character.name}</h1>
      <h3 className="text-xl mb-4">Lives in {homeworld}</h3>
      <div className="flex flex-col space-y-2">
        <p>Height: {character.height} cm</p>
        <p>Weight: {character.mass} kg</p>
      </div>
    </div>
    </div>
  )
}

export default Card
