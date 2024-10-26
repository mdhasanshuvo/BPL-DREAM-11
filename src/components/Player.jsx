import PropType from 'prop-types'
import Selected from './Selected';

const Player = ({ player, coin, handleCoinDecrease }) => {
    const { image, name, country, role, batting_style, bowling_style, price } = player;
    return (
        <div className="p-4 border rounded-2xl space-y-4">
            <img className="h-52 w-full object-cover rounded-2xl" src={image} alt="" />
            <div className="flex gap-4 items-center">
                <i className="fa-solid fa-user"></i>
                <h2 className="text-black text-xl font-semibold">{name}</h2>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                    <i className="fa-solid fa-flag"></i>
                    <h2 className="text-black text-base opacity-50">{country}</h2>
                </div>
                <button className="btn text-black">{role}</button>
            </div>
            <hr />
            <h2 className="text-black font-bold text-lg">Rating</h2>
            <div className="flex items-center justify-between text-black font-semibold text-base">
                <h4>{batting_style}</h4>
                <h4>{bowling_style}</h4>
            </div>
            <div className="flex items-center justify-between">
                <h4 className="text-black font-semibold text-base">Price: ${price}</h4>
                <button onClick={()=>{
                    handleCoinDecrease(price,player)
                }} className="btn btn-outline border-inherit text-black font-normal text-sm">Choose Player</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropType.object,
}

export default Player;