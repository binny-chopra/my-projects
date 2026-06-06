/**
 * App-wide configuration constants.
 * Content lives in `src/data/*`; this file holds config and "magic" values.
 */

/** localStorage keys. */
export const STORAGE_KEYS = {
  THEME: 'theme',
};

/** Theme names. */
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

/** Pixel offset applied when smooth-scrolling to a section (fixed navbar height). */
export const NAV_OFFSET = 76;


/** FormSubmit AJAX endpoint base — the recipient email is appended at runtime. */
export const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/';

/** How long (ms) the contact-form success message stays before auto-dismissing. */
export const STATUS_DISMISS_MS = 5000;

/** Default animation easing curve. */
export const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/**
 * Logo image source(s) for a domain, tried in order, then a monogram fallback.
 * Tier 1: Clearbit (clean square brand logos). Tier 2: Google's icon service
 * (very reliable, covers most domains incl. universities). No artwork is
 * bundled or recreated — logos are loaded live by domain at runtime.
 */
export const getLogoSources = (domain) =>
  domain
    ? [
        `https://logo.clearbit.com/${domain}`,
        `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      ]
    : [];
