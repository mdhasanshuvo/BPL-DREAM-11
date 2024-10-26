import bg from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'
import PropType from 'prop-types'

const Banner = ({handleCoin}) => {
    return (
        <div className="container mx-auto px-4 pb-20">
            <div className="h-auto bg-cover bg-center bg-black rounded-2xl py-16"
            style={{ backgroundImage: `url(${bg})` }}>
                <div className='flex flex-col items-center gap-6'>
                    <img src={banner} alt="" />
                    <h2 className='font-bold text-white text-2xl lg:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='font-normal text-[#ffffffb3] text-xl'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={handleCoin} className='btn text-black font-semibold text-base bg-[#E7FE29] border-[#E7FE29]'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleCoin: PropType.func
}

export default Banner;