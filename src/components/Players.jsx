import Player from "./Player";
import PropType from 'prop-types'

const Players = ({ coin, handleCoinDecrease, players }) => {

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 pt-8">
                {
                    players.map(player => <Player
                        handleCoinDecrease={handleCoinDecrease}
                        coin={coin}
                        key={player.id}
                        player={player}
                    ></Player>)
                }
            </div>
        </div>

    );
};

Players.propTypes = {
    coin: PropType.number,
    handleCoinDecrease: PropType.func,
    players: PropType.array,
}

export default Players;