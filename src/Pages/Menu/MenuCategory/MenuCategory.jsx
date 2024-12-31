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


        </div>
    );
};

export default MenuCategory;