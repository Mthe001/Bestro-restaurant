
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import useMenu from '../../../Hook/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')



    return (
        <section className='my-6'>
            <SectionTitle
                heading='Form Our Menu'
                subHeading='-- Popular Items --'
            >
            </SectionTitle>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-10 gap-5 md:grid-cols-2'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

            {/* "Order Now" Button */}
            <div className="flex justify-center ">
                <button
                    className="btn btn-outline border-yellow-400 hover:bg-yellow-300  hover:border-transparent  border-b-4 border-0 transition-all"
                >
                    Check in Details
                </button>
            </div>
        </section>
    );
};

export default PopularMenu;
