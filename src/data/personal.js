/**
 * Personal details, links, and headline stats.
 * Centralising this makes the content easy to update without touching components.
 */

export const personal = {
  name: 'Binny Chopra',
  shortRole: 'Frontend / SW Engineer',
  roles: ['Software Development Engineer', 'Frontend', 'Web & Application Development'],
  tagline: 'I make frontend systems behave when the data and requirements stop behaving.',
  location: 'United States',
  availability: 'Open to frontend & SWE roles',
  email: '159.binny@gmail.com',
  // Square (1:1) profile image shown beside the name in the hero.
  photo: `${socials['projects']['url']}/assets/profile.jpg`,
  photoCaption: 'United Nations · Geneva',
  photoYear: '2024',
};

export const socials = {
  linkedin: {
    label: 'LinkedIn',
    handle: 'in/159-binny',
    url: 'https://www.linkedin.com/in/159-binny',
  },
  github: {
    label: 'GitHub',
    handle: 'binny-chopra',
    url: 'https://github.com/binny-chopra',
  },
  projects: {
    label: 'All projects',
    handle: 'binny-chopra.github.io',
    url: 'https://binny-chopra.github.io/my-projects/',
  },
};

/** Hero metrics. A `null` target renders the static `display` value instead of a count-up. */
export const stats = [
  { id: 'years', target: 6, suffix: '+', label: 'years building UIs' },
  { id: 'users', target: 700, suffix: '+', label: 'WTO users served' },
  { id: 'data', target: 200, suffix: 'K+', label: 'data points rendered' },
  { id: 'load', target: null, display: '<1s', label: 'dashboard load time' },
];
