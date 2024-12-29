import chefImg from '../../../assets/home/chef-services.png';

const BistroBoss = () => {
    return (
        <div className='py-10'>
            <div className='w-full relative'>
                {/* Image */}
                <img className='w-[80%] mx-auto' src={chefImg} alt="chef-services" />

                {/* White background div */}
                <div className='absolute z-50 top-5 md:top-10 lg:top-16 left-0 right-0 mx-auto w-[50%] rounded-lg h-[60%] bg-white flex items-center justify-center'>
                    <h1 className="text-center">Bistro Boss</h1>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;
