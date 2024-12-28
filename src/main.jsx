import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { ThemeProvider } from './Provider/ThemeContext'; // Import the ThemeProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Use ThemeProvider instead of ThemeContext.Provider */}
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </StrictMode>
);
