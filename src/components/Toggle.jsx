import './all.css'
import Players from './Players';
import PropType from 'prop-types'
import Selected from './Selected';

const Toggle = ({ handleIsActive, isActive, coin, handleCoinDecrease, selectedCount, players, addNewPlayer, handleDelete }) => {
    return (
        <div>
            <div className='container mx-auto px-4'>
                <div className="flex justify-between items-center">
                    <h3 className='font-bold text-black text-2xl' >{isActive?.cart ? "Available Players" : `Selected Player (${selectedCount}/6)`}</h3>
                    <div className="border rounded-xl">
                        <button onClick={() => {
                            handleIsActive('Available')
                        }} className={`${isActive?.cart ? "btn bg-transparent active" : "btn bg-transparent"}`}>Available</button>
                        <button onClick={() => {
                            handleIsActive('Selected')
                        }} className={`${isActive?.cart ? "btn bg-transparent" : "btn bg-transparent active"}`}>Selected
                            ({selectedCount})
                        </button>
                    </div>
                </div>
            </div>

            {isActive?.cart ?
                <Players
                    players={players}
                    handleCoinDecrease={handleCoinDecrease}
                    coin={coin}
                ></Players> : (addNewPlayer.map(NewPlayer =>
                    <Selected
                        handleDelete={handleDelete}
                        key={NewPlayer.id}
                        NewPlayer={NewPlayer}
                    >
                    </Selected>
                ))}


            {!isActive.cart &&
                <div className="container mx-auto px-4 pt-6">
                    <button onClick={() => {
                        handleIsActive('Available')
                    }} className="btn bg-[#E7FE29] border-inherit rounded-xl font-bold ">Add More Player</button>
                </div>
            }

        </div>
    );
};

Toggle.propTypes = {
    handleIsActive: PropType.func,
    isActive: PropType.object,
    coin: PropType.number,
    handleCoinDecrease: PropType.func,
    selectedCount: PropType.number,
    players: PropType.array,
    addNewPlayer: PropType.array,
    handleDelete: PropType.func
}

export default Toggle;