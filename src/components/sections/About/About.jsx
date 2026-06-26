import { Container } from '../../common/Container/Container';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Reveal } from '../../common/Reveal/Reveal';
import { aboutParagraphs, principles } from '../../../data/about';

export function About() {
  return (
    <section id="about" className="py-[clamp(26px,3.8vw,52px)]">
      <Container>
        <SectionHeading
          eyebrow="01 / About"
          title="Frontend that survives real traffic."
          highlight="real"
          intro="Six-plus years turning messy data and shifting requirements into interfaces people can actually rely on."
        />

        <div className="mt-12 grid items-start gap-[clamp(30px,5vw,66px)] menu:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-[18px] text-[1.06rem] text-dim">
            {aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-surface p-7">
            <p className="mb-3.5 font-mono text-[0.74rem] uppercase tracking-[0.12em] text-faint">What I care about</p>
            <ul className="grid gap-2.5">
              {principles.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-[0.98rem] text-text before:font-mono before:text-accent before:content-['→']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
