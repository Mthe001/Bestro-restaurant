import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';

const useAuth = () => {
    const auth = useContext(Authcontext);
    return auth;
};

export default useAuth;