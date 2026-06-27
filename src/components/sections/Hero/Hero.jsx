import { HeroVideo } from './HeroVideo';
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
    <section
      id="top"
      className="flex min-h-[86svh] items-center pb-[clamp(36px,5vw,64px)] pt-[clamp(90px,10vh,108px)] max-[560px]:pt-[88px]"
    >
      <Container className="flex w-full flex-col gap-[clamp(26px,3.5vw,48px)]">
        {/* Top: enlarged video (left) + identity / name / actions (right) */}
        <div className="grid items-center gap-[clamp(30px,5vw,60px)] menu:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.16} className="order-2 mx-auto w-full max-w-[560px] menu:order-1 menu:mx-0">
            <HeroVideo />
          </Reveal>

          <div className="relative order-1 flex flex-col menu:order-2">
            {/* Identity row — only the avatar reveals the enlarged captioned photo */}
            <Reveal as="div" className="relative z-30 mb-6 flex items-center gap-3.5">
              <div className="group">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  width={56}
                  height={56}
                  tabIndex={0}
                  className="h-14 w-14 shrink-0 cursor-pointer rounded-full object-cover object-top shadow-card ring-1 ring-inset ring-line2 transition-[transform,box-shadow] duration-200 hover:scale-105 hover:ring-accent focus-visible:scale-105 focus-visible:ring-accent focus:outline-none"
                />
                <figure
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 z-40 w-[clamp(230px,24vw,300px)] origin-top-left scale-90 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-line2 shadow-card ring-1 ring-inset ring-line2">
                    <img
                      src={personal.photo}
                      alt={`${personal.name} — ${personal.photoCaption}`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/55 to-transparent px-3.5 py-3 font-mono text-[0.62rem] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                      <span>United Nations</span>
                      <span className="flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                        REC
                      </span>
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/65 to-transparent px-3.5 pb-3 pt-9 font-mono text-[0.66rem] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                      <span className="flex items-center gap-1.5">
                        <MapPin width={12} height={12} />
                        {personal.photoCaption}
                      </span>
                      <span>{personal.photoYear}</span>
                    </figcaption>
                  </div>
                </figure>
              </div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-[7px] font-mono text-[0.74rem] text-dim">
                <span className="h-2 w-2 animate-dot rounded-full bg-up" aria-hidden="true" />
                {personal.location} · {personal.availability}
              </span>
            </Reveal>

            <Reveal
              as="h1"
              delay={0.08}
              className="font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-[360] leading-[1.02] tracking-[-0.025em]"
            >
              <span className="block font-semibold">{personal.name}</span>
              <span className="mt-3.5 block max-w-[24ch] text-[0.6em] italic text-dim">{personal.tagline}</span>
            </Reveal>

            <Reveal delay={0.16} className="mb-8 mt-6 flex flex-wrap gap-x-3.5 gap-y-2 font-mono text-[0.82rem] text-dim">
              {personal.roles.map((role) => (
                <span key={role} className="inline-flex items-center gap-2 before:text-accent before:content-['▹']">
                  {role}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.16} className="flex flex-wrap gap-3">
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
          </div>
        </div>

        {/* Bottom: the two boxes, aligned horizontally in one row */}
        <div className="grid items-stretch gap-4 sm:grid-cols-[0.82fr_1.5fr]">
          <Reveal delay={0.12} className="h-full">
            <Sparkline />
          </Reveal>

          <Reveal
            delay={0.18}
            className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col justify-center bg-bg p-4 transition-colors hover:bg-surface">
                <div className="font-mono text-[clamp(1.3rem,3vw,1.9rem)] font-semibold tracking-[-0.02em]">
                  {stat.target === null ? stat.display : <CountUp target={stat.target} suffix={stat.suffix} />}
                </div>
                <div className="mt-0.5 text-[0.72rem] text-faint">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
