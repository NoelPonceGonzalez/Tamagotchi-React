import miGif from '../assets/tamagotchi-bandai-unscreen.gif';

const TamagotchiDead = ({ onRestart }) => {
  const handleClick = () => {
    onRestart();
  };

  return (
    <div className="flex flex-col m-4">
      <button onClick={handleClick}>
        <div className='bg-verde-turquesa rounded'>
          <img src={miGif} alt="Mi GIF" className='h-16' />
          <p>Ha muerto</p>
        </div>
      </button>
    </div>
  );
};

export default TamagotchiDead;
