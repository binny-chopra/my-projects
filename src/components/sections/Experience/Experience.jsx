import { Container } from '../../common/Container/Container';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Reveal } from '../../common/Reveal/Reveal';
import { MapPin } from '../../common/Icon/icons';
import { Logo } from '../../common/Logo/Logo';
import { experience } from '../../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-[clamp(70px,11vw,140px)]">
      <Container>
        <SectionHeading
          eyebrow="03 / Experience"
          title="Where I've shipped."
          highlight="shipped"
          intro="From global institutions to trading desks — frontends under real load."
        />

        <div className="mt-[54px]">
          {experience.map((job) => (
            <Reveal
              as="article"
              key={job.id}
              className="group grid grid-cols-1 gap-[30px] border-t border-line py-[30px] last:border-b menu:grid-cols-[220px_1fr]"
            >
              <div>
                <div className="mb-2 font-mono text-[0.78rem] text-accent">{job.period}</div>
                <div className="flex items-center gap-1.5 font-mono text-[0.74rem] text-faint">
                  <MapPin width={12} height={12} />
                  {job.location}
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center gap-3.5">
                  <Logo domain={job.domain} short={job.short} color={job.color} name={job.company} />
                  <div>
                    <h3 className="text-[1.18rem] font-semibold leading-tight tracking-[-0.01em]">{job.role}</h3>
                    <div className="font-mono text-[0.85rem] text-dim transition-colors group-hover:text-accent">
                      {job.company}
                    </div>
                  </div>
                </div>
                <div className="mb-4 text-[0.84rem] italic text-faint">{job.project}</div>
                <ul className="grid gap-2.5">
                  {job.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-[0.97rem] leading-[1.55] text-dim before:mt-[9px] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:opacity-[0.65] before:content-['']"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
