import { useState, useEffect } from 'react';

// Custom hook for theme management
const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Effect to apply the theme when it's changed
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark'); // Apply dark class
        } else {
            document.documentElement.classList.remove('dark'); // Remove dark class
        }
    }, [theme]);

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme); // Save to localStorage
            return newTheme;
        });
    };

    return { theme, toggleTheme };
};

export default useTheme;
