import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './theme-context';
import { STORAGE_KEYS, THEMES } from '../constants';

/** Read the initial theme: a saved choice wins, otherwise follow the OS. */
function getInitialTheme() {
  if (typeof window === 'undefined') return THEMES.DARK;
  const stored = window.localStorage.getItem(STORAGE_KEYS.THEME);
  if (stored === THEMES.LIGHT || stored === THEMES.DARK) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Reflect the theme onto <html> so the CSS variables apply.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow the OS preference until the user makes an explicit choice.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      if (!window.localStorage.getItem(STORAGE_KEYS.THEME)) {
        setTheme(event.matches ? THEMES.DARK : THEMES.LIGHT);
      }
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      window.localStorage.setItem(STORAGE_KEYS.THEME, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
