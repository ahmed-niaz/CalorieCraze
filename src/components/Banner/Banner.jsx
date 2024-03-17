import banner from '../../assets/banner/banner.png';

const Banner = () => {
    return (
        <main style={{ backgroundImage: `url(${banner})` }} className='bg-no-repeat bg-cover lg:mt-10 rounded-3xl mx-4'>
            <div className='flex flex-col items-center justify-center   lg:p-36 text-center text-white'>
                <h2 className='text-xl lg:text-5xl font-bold lg:font-extrabold mt-2 mb-4 lg:mb-8 lg:mt-4 w-11/12 lg:w-full'>Find a unique cooking workshop designed specifically to suit your needs!</h2>
                <p className='mb-4 lg:mb-8 w-11/12 font-balance lg:font-semibold text-sm lg:text-xl'>
                    Explore a personalized culinary experience with our tailored cooking class, crafted just for you. Unleash your inner chef and embark on a flavorful journey like never before!
                </p>
                <div className='space-x-4 lg:space-x-10 mb-4'>
                    <button className="btn bg-[#0BE58A] border-none text-[#150B2B] lg:text-2xl font-bold rounded-3xl ">Explore Now</button>
                    <button className="btn btn-outline text-white lg:text-2xl font-bold rounded-3xl">Our Feedback</button>
                </div>
            </div>
        </main>
    );
};

export default Banner;
