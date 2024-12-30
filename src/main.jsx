import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { ThemeProvider } from './Provider/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider> {/* Use ThemeProvider instead of ThemeContext.Provider */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
