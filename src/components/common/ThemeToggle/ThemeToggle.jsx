import { useTheme } from '../../../hooks/useTheme';
import { THEMES } from '../../../constants';
import { Sun, Moon } from '../Icon/icons';

/** Button that toggles between light and dark themes. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === THEMES.DARK;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-text transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-line2 [&_svg]:h-[18px] [&_svg]:w-[18px]"
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
