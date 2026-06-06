import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

/** Access the current theme and the toggle function. */
export function useTheme() {
  return useContext(ThemeContext);
}
