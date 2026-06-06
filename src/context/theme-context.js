import { createContext } from 'react';

/**
 * Theme context shape:
 *   { theme: 'light' | 'dark', toggleTheme: () => void }
 * Kept in its own file so component files only export components
 * (keeps React Fast Refresh happy).
 */
export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});
