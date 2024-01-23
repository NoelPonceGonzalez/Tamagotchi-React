import React, { useState, useEffect } from "react";
import { decreaseStats, playStat, hungerStat, healthStat } from "../functions/tamagochi-functions";

const TamagotchiButtons = ({ isAlive }) => {
  const [hunger, setHunger] = useState(60);
  const [happiness, setHappiness] = useState(80);
  const [health, setHealth] = useState(100);

  useEffect(() => {
    const intervalId = setInterval(() => {
      decreaseStats(setHunger, setHappiness);
      healthStat(hunger, happiness, setHealth, isAlive); 
    }, 1000);

    return () => clearInterval(intervalId);
  }, [hunger, happiness]);

  return (
    <div className="flex flex-col items-center mt-1">
      <div className="flex space-x-2">
        <div className="flex flex-col items-center text-center">
          <p className="text-black">{hunger}</p>
          <button className="bg-blue-500 text-white w-12 h-6 rounded-full flex items-center justify-center">
            <span className="text-xs" onClick={() => hungerStat(setHunger, setHealth)}>hunger</span>
          </button>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-black">{happiness}</p>
          <button className="bg-green-500 text-white w-12 h-6 rounded-full flex items-center justify-center">
            <span className="text-xs" onClick={() => playStat(setHappiness, setHunger, setHealth)}>play</span>
          </button>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-black">{health}</p>
          <button className="bg-red-500 text-white w-12 h-6 rounded-full flex items-center justify-center">
            <span className="text-xs">health</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TamagotchiButtons;
