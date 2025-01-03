import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { image, price, recipe, name, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    // Reusable SweetAlert Function
    const showAlert = (title, text, icon, showConfirmButton = true) => {
        Swal.fire({
            title,
            text,
            icon,
            showConfirmButton,
            timer: icon === 'success' ? 2000 : undefined,
        });
    };

    // // for unlimited times added same product in cart
    // const handleCart = async () => {
    //     if (user && user.email) {
    //         try {
    //             const cartItem = {
    //                 menuId: _id,
    //                 email: user.email,
    //                 name,
    //                 image,
    //                 price,
    //             };

    //             const res = await axiosSecure.post('/carts', cartItem);
    //             if (res.data.insertedId) {
    //                 showAlert(`${name} added to cart successfully`, 'Check your cart for more details', 'success', false);
    //                 refetch(); // Refetch only after successful insertion
    //             }
    //         } catch (error) {
    //             console.error('Error adding to cart:', error);
    //         }
    //     } else {
    //         // Guest users handling
    //         Swal.fire({
    //             title: "Operation is not allowed (-_-) !",
    //             text: "Can't add item in cart for guest user!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Please Login!"
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate('/login', { state: { from: location } });
    //             }
    //         });
    //     }
    // };





    // 2 times added same product in cart
    const handleCart = async () => {
        if (user && user.email) {
            try {
                // Create a cart item object
                const cartItem = {
                    menuId: _id,
                    email: user.email,
                    name,
                    image,
                    price,
                };

                // Fetch the current cart items
                const res = await axiosSecure.get(`/carts?email=${user.email}`);

                // Count how many times this item already exists in the cart
                const itemCount = res.data.filter(item => item.menuId === _id).length;

                if (itemCount >= 2) {
                    // If the item count is already 2, show a warning
                    Swal.fire({
                        title: `${name} is already added twice to your cart!`,
                        text: 'You can only add this item two times.',
                        icon: 'warning',
                        showConfirmButton: false,
                        timer: 2000
                    });
                } else {
                    // Otherwise, add the item to the cart
                    const postRes = await axiosSecure.post('/carts', cartItem);
                    if (postRes.data.insertedId) {
                        Swal.fire({
                            title: `${name} added to cart successfully`,
                            text: 'Check your cart for more details',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        refetch(); // Refetch to get the updated cart data
                    }
                }
            } catch (error) {
                console.error('Error adding to cart:', error);
            }
        } else {
            // Guest users handling
            Swal.fire({
                title: "Operation is not allowed (-_-) !",
                text: "Can't add item in cart for guest user!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };








    return (
        <div className="max-w-sm mx-auto bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="h-48 bg-gray-200 dark:bg-zinc-800">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full p-2 rounded-xl object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }}
                />
            </div>

            {/* Card Content */}
            <div className="p-4 dark:bg-zinc-900 m-1 rounded-lg text-center">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{recipe}</p>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-yellow-500 mt-2">${price}</p>
                    <button
                        onClick={handleCart}
                        className="mt-4 px-4 py-2 bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 dark:hover:bg-yellow-300 transition-colors duration-300"
                        aria-label={`Add ${name} to Cart`}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
