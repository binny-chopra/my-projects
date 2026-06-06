import { personal, socials } from '../../../data/personal';
import { Mail, LinkedIn, GitHub } from '../Icon/icons';

const links = [
  { key: 'email', label: 'Email', url: `mailto:${personal.email}`, Icon: Mail, external: false },
  { key: 'linkedin', label: socials.linkedin.label, url: socials.linkedin.url, Icon: LinkedIn, external: true },
  { key: 'github', label: socials.github.label, url: socials.github.url, Icon: GitHub, external: true },
];

/** Row of social/contact icon links. */
export function SocialLinks() {
  return (
    <div className="flex gap-2.5">
      {links.map(({ key, label, url, Icon, external }) => (
        <a
          key={key}
          href={url}
          aria-label={label}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="grid h-[38px] w-[38px] place-items-center rounded-lg border border-line text-dim transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-accent hover:text-accent [&_svg]:h-[18px] [&_svg]:w-[18px]"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
