import miGif from '../assets/tamagotchi-bandai-unscreen.gif'

const TamagotchiScreen = () => {
    return (
        <div className="flex flex-col m-4">
            <div className='bg-verde-turquesa rounded'>
                <img src={miGif} alt="Mi GIF" className='h-16'/>
            </div>
        </div>
    )
}

export default TamagotchiScreen;