/**
 * Skills grouped by category. Icons are resolved by name in
 * `components/sections/Skills/skillIcons.jsx` (bundled — no CDN).
 */
export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6)' },
      { name: 'JSX' },
      { name: 'Python' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Styling',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Sass / SCSS' },
      { name: 'Bootstrap' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Angular' },
      { name: 'Angular Material' },
      { name: 'React' },
      { name: 'Vite' },
      { name: 'Flask' },
      { name: 'Jest' },
      { name: 'Jasmine / Karma' },
    ],
  },
  {
    id: 'tooling',
    title: 'Tooling & Platform',
    skills: [
      { name: 'Git' },
      { name: 'Jenkins' },
      { name: 'Bitbucket' },
      { name: 'JIRA' },
      { name: 'Postman' },
      { name: 'Swagger' },
      { name: 'NPM' },
      { name: 'MySQL' },
      { name: 'IntelliJ' },
      { name: 'Visual Studio' },
    ],
  },
];
