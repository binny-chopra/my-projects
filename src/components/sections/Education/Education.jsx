import { LuGraduationCap, LuBadgeCheck } from 'react-icons/lu';
import { Container } from '../../common/Container/Container';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Reveal } from '../../common/Reveal/Reveal';
import { Logo } from '../../common/Logo/Logo';
import { education, certifications } from '../../../data/education';

export function Education() {
  return (
    <section id="education" className="py-[clamp(26px,3.8vw,52px)]">
      <Container>
        <SectionHeading eyebrow="05 / Education & Certifications" title="Always learning." highlight="learning" />

        <div className="mt-[50px] grid gap-6 menu:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-surface p-[30px]">
            <h3 className="mb-[22px] flex items-center gap-2 font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] text-faint">
              <LuGraduationCap className="h-[18px] w-[18px] text-accent" aria-hidden="true" />
              Education
            </h3>
            {education.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 border-b border-dashed border-line py-4 last:border-b-0 last:pb-0"
              >
                <Logo domain={item.domain} short={item.short} color={item.color} name={item.school} />
                <div>
                  <div className="text-[1.04rem] font-semibold">{item.degree}</div>
                  <div className="mt-[3px] text-[0.92rem] text-dim">{item.school}</div>
                  <div className="mt-[5px] font-mono text-[0.76rem] text-accent">{item.year}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-surface p-[30px]">
            <h3 className="mb-[22px] flex items-center gap-2 font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] text-faint">
              <LuBadgeCheck className="h-[18px] w-[18px] text-accent" aria-hidden="true" />
              Awards & Certifications
            </h3>
            <ul className="grid gap-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-baseline gap-2.5 text-[0.95rem] text-dim">
                  <LuBadgeCheck className="relative top-[3px] h-[16px] w-[16px] shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <b className="font-semibold text-text">{cert.name}</b> — {cert.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
