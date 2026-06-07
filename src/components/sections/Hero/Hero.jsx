import { Sparkline } from './Sparkline';
import { Container } from '../../common/Container/Container';
import { Button } from '../../common/Button/Button';
import { Reveal } from '../../common/Reveal/Reveal';
import { CountUp } from '../../common/CountUp/CountUp';
import { ArrowRight, MapPin } from '../../common/Icon/icons';
import { personal, stats } from '../../../data/personal';
import { scrollToSection } from '../../../utils/helpers';

export function Hero() {
  return (
    <section id="top" className="flex min-h-[100svh] items-center pb-16 pt-[150px] max-[560px]:pt-[120px]">
      <Container className="grid items-stretch gap-[clamp(30px,5vw,64px)] menu:grid-cols-[1.05fr_0.95fr]">
        {/* Left: name, tagline, roles, actions, stats */}
        <div className="flex flex-col">
          <Reveal
            as="span"
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-[7px] font-mono text-[0.74rem] text-dim"
          >
            <span className="h-2 w-2 animate-dot rounded-full bg-up" aria-hidden="true" />
            {personal.location} · {personal.availability}
          </Reveal>

          <Reveal
            as="h1"
            delay={0.08}
            className="mb-6 font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-[360] leading-[1.02] tracking-[-0.025em]"
          >
            <span className="block font-semibold">{personal.name}</span>
            <span className="mt-3.5 block max-w-[22ch] text-[0.6em] italic text-dim">{personal.tagline}</span>
          </Reveal>

          <Reveal delay={0.16} className="mb-[30px] flex flex-wrap gap-x-3.5 gap-y-2 font-mono text-[0.82rem] text-dim">
            {personal.roles.map((role) => (
              <span key={role} className="inline-flex items-center gap-2 before:text-accent before:content-['▹']">
                {role}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.16} className="mb-11 flex flex-wrap gap-3">
            <Button
              variant="primary"
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('projects');
              }}
            >
              View my work
              <ArrowRight />
            </Button>
            <Button
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </Button>
          </Reveal>

          <Reveal
            delay={0.24}
            className="mt-auto grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="bg-bg p-4 transition-colors hover:bg-surface">
                <div className="font-mono text-[clamp(1.3rem,3vw,1.9rem)] font-semibold tracking-[-0.02em]">
                  {stat.target === null ? stat.display : <CountUp target={stat.target} suffix={stat.suffix} />}
                </div>
                <div className="mt-0.5 text-[0.72rem] text-faint">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Right: square (1:1) portrait + sparkline */}
        <Reveal delay={0.16} className="mx-auto flex w-full max-w-[460px] flex-col menu:mx-0">
          <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-card ring-1 ring-inset ring-line2">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/45 to-transparent px-3.5 py-3 font-mono text-[0.66rem] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
              <span>profile.jpg</span>
              <span>● REC</span>
            </div>
            <img
              src={personal.photo}
              alt={`${personal.name} at the United Nations, Geneva`}
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-4 pb-3.5 pt-9 font-mono text-[0.7rem] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
              <span className="flex items-center gap-1.5">
                <MapPin width={13} height={13} />
                {personal.photoCaption}
              </span>
              <span>{personal.photoYear}</span>
            </figcaption>
          </figure>

          <div className="mt-auto">
            <Sparkline />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
