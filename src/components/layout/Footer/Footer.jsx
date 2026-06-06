import { Container } from '../../common/Container/Container';
import { SocialLinks } from '../../common/SocialLinks/SocialLinks';
import { personal } from '../../../data/personal';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10 pb-14">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[0.78rem] text-faint">
          © {year} <b className="text-text">{personal.name}</b> · Built with React + Tailwind, no templates.
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
}
