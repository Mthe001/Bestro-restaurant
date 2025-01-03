import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useCart = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { refetch, data: cart = [], error } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !!user?.email,
        staleTime: 0,
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/carts?email=${user.email}`);
                return res.data;
            } catch (err) {
                console.error('Error fetching cart:', err);
                throw error;
            }
        }
    });



    return [cart, refetch];





};

export default useCart;