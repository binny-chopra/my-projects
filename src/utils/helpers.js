import { NAV_OFFSET } from '../constants';

/** Join truthy class names into a single string. */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

/** Smoothly scroll to a section by id, accounting for the fixed navbar. */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}
