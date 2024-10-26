import './all.css'
import logo from '../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-4 border p-4 rounded-2xl relative top-40 left-'>
                <div className="news rounded-2xl flex flex-col items-center gap-4 p-20">
                    <h2 className='font-bold text-black text-3xl'>Subscribe to our Newsletter</h2>
                    <p className='font-normal text-[#131313b3] text-lg'>Get the latest updates and news right in your inbox!</p>
                    <div>
                        <input className='border rounded-xl pl-5 pr-16 mr-5 py-3' type="text" name="" id="" placeholder="Enter your email" />
                        <button className="btn btn-gradient font-bold p-4" >Subscribe</button>
                    </div>
                </div>
            </div>


            <footer className="bg-neutral px-4 pt-52">

                <div className='flex justify-center'>
                    <img src={logo} alt="" />
                </div>
                <div className="footer text-neutral-content px-4 pt-10 pb-20 container mx-auto grid-cols-3 justify-items-center">

                    <nav className="space-y-2 text-base">
                        <div className="flex items-center">
                            <h6 className="footer-title text-xl text-white mb-4 opacity-100 font-semibold">About Us</h6>
                        </div>
                        <p className="">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>

                    <nav className="text-base opacity-90">
                        <h6 className="footer-title text-xl text-white mb-4 opacity-100 font-semibold">Useful Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                    </nav>

                    <nav className=''>
                        <fieldset className="form-control w-80 space-y-4">
                            <div className=''>
                                <label className="label pt-0">
                                    <span className="label-text text-white text-xl font-semibold">Subscribe</span>
                                </label>
                                <label className="label">
                                    <span className="label-text text-white text-sm font-medium opacity-60">Subscribe to our newsletter for the latest updates.</span>
                                </label>
                            </div>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="input input-bordered join-item"
                                />
                                <button className="btn btn-primary join-item btn-gradient text-black border-none">Subscribe</button>
                            </div>

                        </fieldset>
                    </nav>

                </div>
            </footer>
            <div className='bg-neutral'>
                <hr className='h-0.5 opacity-30' />
                <div className='p-8 text-[#ffffff99] text-base font-normal text-center'>@2024 BPL-DREAM 11 All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;



