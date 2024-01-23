export const decreaseStats = (setHunger, setHappiness) => {
    setHunger((prevHunger) => (prevHunger > 0 ? prevHunger - 1 : 0));
    setHappiness((prevHappiness) => (prevHappiness > 0 ? prevHappiness - 1 : 0));
};

export const playStat = (setHappiness, setHunger) => {
    const randomIncrement = Math.floor(Math.random() * 10) + 1;

    setHappiness((prevHappiness) => {
        const newHappiness = prevHappiness + randomIncrement;
        return newHappiness <= 100 ? newHappiness : 100;
      });

    setHunger((prevHunger) => (prevHunger >= 5 ? prevHunger - 5 : 0));

};

export const hungerStat = (setHunger) => {
    const randomIncrement = Math.floor(Math.random() * 10) + 1;

    setHunger((prevHunger) => {
        const newHunger = prevHunger + randomIncrement;
        return newHunger <= 100 ? newHunger : 100;
    });
};

export const healthStat = (hunger, play, setHealth, setIsAlive) => {
    const randomDecrement = Math.floor(Math.random() * 10) + 1;

    setHealth((prevHealth) => {
        let updatedHealth;

        if (hunger < 30 || play < 30) {
            const newHealth = prevHealth - randomDecrement;
            updatedHealth = Math.min(Math.max(newHealth, 0), 100);

            if (updatedHealth === 0) {
                setIsAlive(false);
            }
        } else if (hunger > 30 && play > 30) {
            const newHealth = prevHealth + randomDecrement;
            updatedHealth = Math.min(Math.max(newHealth, 0), 100);

            if (updatedHealth === 0) {
                setIsAlive(false);
            }
        } else {
            updatedHealth = Math.min(Math.max(prevHealth, 0), 100);
        }

        return updatedHealth;
    });
};
