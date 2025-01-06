import { FcGoogle } from "react-icons/fc"; // Google icon
import useAuth from "../../Hook/useAuth"; // Custom hook for authentication
import useAxiosPublic from "../../Hook/useAxiosPublic"; // Custom Axios instance
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth(); // Custom Google Sign-In method
    const axiosPublic = useAxiosPublic(); // Axios instance for public API calls
    const navigate = useNavigate(); // Navigation
    const [loading, setLoading] = useState(false); // Loading state

    const handleGoogleLogin = async () => {
        setLoading(true); // Show loading spinner
        try {
            const result = await signInWithGoogle(); // Attempt to sign in with Google

            if (!result || !result.user) {
                console.error("Google Sign-In result is invalid or missing the 'user' property.");
                alert("Sign-in failed. Please try again.");
                return;
            }

            const userInfo = {
                email: result.user.email,
                name: result.user.displayName,
                photoUrl: result.user.photoURL, // Save profile picture URL if available
            };

            // Save the user in the database
            const response = await axiosPublic.post('/users', userInfo);

            if (response.data.success) {
                console.log("User saved successfully:", response.data);
                navigate('/'); // Navigate to the home page or desired route
            } else {
                console.warn("User already exists:", response.data.message);
                alert(response.data.message); // Optional: Show a message to the user
                navigate('/'); // Navigate anyway (optional)
            }
        } catch (error) {
            console.error("Error during Google Sign-In:", error.message);
            alert("An error occurred during Google Sign-In. Please try again.");
        } finally {
            setLoading(false); // Hide loading spinner
        }
    };

    return (
        <div>
            {/* Google Login Button */}
            <button
                onClick={handleGoogleLogin}
                className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 flex items-center justify-center"
                disabled={loading} // Disable the button while loading
            >
                {loading ? (
                    "Signing in..."
                ) : (
                    <>
                        <FcGoogle size={20} className="mr-2" />
                        Sign in with Google
                    </>
                )}
            </button>
        </div>
    );
};

export default SocialLogin;
