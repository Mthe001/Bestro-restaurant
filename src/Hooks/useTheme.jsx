import { useContext } from 'react';
import ThemeContext from './ThemeContext'; // Make sure this points to your ThemeContext file

const useTheme = () => {
    // Access the context using useContext
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};

export default useTheme;
