import { Link } from 'react-router-dom';
import Cover from '../../../shared/Cover/Cover';
import MenuItem from '../../../shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, coverImg, desc }) => {
    return (
        <div>

            {title && <Cover img={coverImg} title={title} description={desc}></Cover>}
            <div className='grid md:grid-cols-2 lg:grid-cols-2 my-10 gap-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}>

                    </MenuItem>)
                }

            </div>

            <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                Order Now
            </Link>


        </div>
    );
};

export default MenuCategory;