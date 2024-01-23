// TamagotchiScreen.js
import React, { useState } from 'react';

//imports
import TamagotchiScreen from '../components/tamagochiScreen';
import TamagotchiButtons from '../components/tamagochiButtons';
import TamagotchiDead from '../components/tamagochiDead';

const Tamagotchi = () => {
  const [hunger, setHunger] = useState(60);
  const [happiness, setHappiness] = useState(80);
  const [health, setHealth] = useState(100);
  const [isAlive, setIsAlive] = useState(true);

  const resetGame = () => {
    setIsAlive(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      {isAlive ? (
        <>
          <div className="bg-white p-8 rounded-full shadow-md">
            <TamagotchiScreen />
            <div className="flex flex-col items-center space-y-2 text-white">
              <TamagotchiButtons isAlive={setIsAlive} />
            </div>
          </div>
        </>
      ) : (
        <div>
          <TamagotchiDead onRestart={resetGame}/>
        </div>
      )}
    </div>
  );
};

export default Tamagotchi;
