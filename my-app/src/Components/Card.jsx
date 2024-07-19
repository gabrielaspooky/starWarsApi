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
    <div className='flex flex-col p-5 m-1'>
          <div className="p-4 m-4 bg-black text-white rounded-lg cursor-pointer">
        <img className="flex items-center content-center p-1 border-2 border-white" src="https://www.komar.de/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/0/2/026-dvd2_star_wars_poster_classic_1_web.jpg" alt="Foto de los personajes" />
      <h1 className="text-3xl mb-2 font-starwars text-yellow-400 flex flex-col text-center">{character.name}</h1>
      <h3 className="text-xl mb-4">Lives in {homeworld}</h3>
      <div className="flex flex-col space-y-2">
        <p>Height: {character.height} cm</p>
        <p>Weight: {character.mass} kg</p>
        <p>Gender: {character.gender}</p>
        <p>Birth year: {character.birth_year}</p>
      </div>
    </div>
    </div>
  )
}

export default Card
