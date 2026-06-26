import { useEffect, useState } from 'react';
import { Container } from '../../common/Container/Container';
import { ThemeToggle } from '../../common/ThemeToggle/ThemeToggle';
import { Button } from '../../common/Button/Button';
import { Menu, Close } from '../../common/Icon/icons';
import { navItems } from '../../../data/navigation';
import { personal } from '../../../data/personal';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { cx, scrollToSection } from '../../../utils/helpers';

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-[100] border-b border-transparent transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled &&
          'border-line bg-[color-mix(in_srgb,var(--bg)_78%,transparent)] backdrop-blur-[14px] backdrop-saturate-150',
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a
          href="#top"
          onClick={(event) => handleNavClick(event, 'top')}
          aria-label={`${personal.name} — home`}
          className="flex items-center gap-[11px] font-mono"
        >
          <img
            src={personal.photo}
            alt={`${personal.name}`}
            width={34}
            height={34}
            className="h-[34px] w-[34px] shrink-0 rounded-full object-cover shadow-[0_0_0_1px_var(--line-strong),0_6px_18px_-8px_var(--accent)] ring-1 ring-inset ring-white/10"
          />
          <span className="flex flex-col leading-[1.1]">
            <b className="text-[0.92rem]">{personal.name}</b>
            <span className="text-[0.64rem] tracking-[0.04em] text-faint">{personal.shortRole}</span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className={cx(
            'items-center gap-1',
            menuOpen
              ? 'absolute inset-x-0 top-[72px] flex flex-col items-stretch gap-1 border-b border-line bg-bg px-7 pb-[22px] pt-[14px] shadow-card menu:static menu:flex-row menu:border-0 menu:bg-transparent menu:p-0 menu:shadow-none'
              : 'hidden menu:flex',
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              className={cx(
                'relative rounded-lg px-[13px] py-2 font-mono text-[0.78rem] transition-colors hover:bg-surface hover:text-text max-menu:py-3',
                activeId === item.id ? 'text-text' : 'text-dim',
              )}
            >
              <span className="mr-1.5 text-[0.7rem] text-accent opacity-70">{item.index}</span>
              {item.label}
              {activeId === item.id && (
                <span className="absolute inset-x-[13px] bottom-0.5 h-[1.5px] rounded bg-accent max-menu:hidden" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <span className="hidden menu:inline-flex">
            <Button variant="primary" href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>
              Get in touch
            </Button>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-text menu:hidden"
          >
            {menuOpen ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
        </div>
      </Container>
    </header>
  );
}
