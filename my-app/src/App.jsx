import React, { useState, useEffect } from 'react';
import LoadingScreen from './Components/LoadingScreen';
import StarWarsCards from './Components/StarWarsCards'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen isVisible={isLoading} />
      ) : (
        <div>
          <div className="flex items-center justify-center">
            <StarWarsCards />
        <footer>Esto es un footer</footer>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
