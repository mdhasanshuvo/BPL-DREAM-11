import logo from '../assets/logo.png'
import dollar from '../assets/dollar 1.svg'
import Banner from './Banner';

const Header = ({ handleCoin, coin }) => {

    return (
        <div>
            {/* Navbar section */}
            <div className="container mx-auto px-4 pt-10 pb-6">
                <div className="navbar bg-base-100 justify-center items-center">
                    <div className="flex-1">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 justify-center items-center gap-3">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                            <li>
                                <button className='btn btn-outline border-inherit'>
                                    {coin} Coin
                                    <img src={dollar} alt="" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Banner Section */}
            <Banner handleCoin={handleCoin}></Banner>
        </div>
    );
};

export default Header;