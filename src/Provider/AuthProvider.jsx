import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.init"; // Import your `auth` from the Firebase config
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile, // Import updateProfile
} from "firebase/auth";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // To store authenticated user
    const [loading, setLoading] = useState(true); // To manage loading state
    const [error, setError] = useState(null); // To store authentication errors

    const googleProvider = new GoogleAuthProvider(); // Google Auth Provider

    // Sign in with Email and Password
    const signInWithEmail = async (email, password) => {
        setLoading(true); // Set loading while processing
        setError(null); // Clear any previous error
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message); // Set error message if any
        } finally {
            setLoading(false); // Set loading to false after attempt
        }
    };






    // Sign in with Google
    const signInWithGoogle = async () => {
        try {
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google Sign-In result:", result); // Log the full result for debugging
            return result;
        } catch (error) {
            console.error("Error in signInWithGoogle:", error);
            throw error; // Rethrow the error to handle it in the calling function
        }
    };










    // Logout user
    const logout = async () => {
        setLoading(true); // Set loading while processing logout
        try {
            await signOut(auth); // Call Firebase signOut
            setUser(null); // Clear user from state
        } catch (err) {
            setError(err.message); // Set error message if any during logout
        } finally {
            setLoading(false); // Set loading to false after logout attempt
        }
    };

    // Register user with Email and Password (create user)
    const registerUser = async (email, password, name, photoURL) => {
        setLoading(true); // Set loading while processing
        setError(null); // Clear any previous error
        try {
            // Firebase's createUserWithEmailAndPassword
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const currentUser = userCredential.user;

            // Update user's profile (name and photoURL)
            if (name || photoURL) {
                await updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                });
            }
        } catch (err) {
            setError(err.message); // Set error message if any
        } finally {
            setLoading(false); // Set loading to false after attempt
        }
    };

    // Monitor auth state changes (user login/logout)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Update user state
            setLoading(false); // Stop loading when user state is resolved
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const authInfo = {
        user, // Authenticated user
        loading, // Loading state
        error, // Error state
        signInWithEmail, // Function for email/password sign-in
        signInWithGoogle, // Function for Google sign-in
        logout, // Function for logging out
        registerUser, // Function for email/password registration with name and photoURL
    };

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;
