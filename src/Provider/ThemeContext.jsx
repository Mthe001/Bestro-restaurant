import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    // State to manage the current theme (default is 'light')
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Update the `data-theme` attribute in the `html` tag when theme changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Save theme to localStorage
    }, [theme]);

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom Hook to use Theme Context
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
