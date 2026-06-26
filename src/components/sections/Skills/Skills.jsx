import { SkillChip } from './SkillChip';
import { Container } from '../../common/Container/Container';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Reveal } from '../../common/Reveal/Reveal';
import { skillGroups } from '../../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-[clamp(26px,3.8vw,52px)]">
      <Container>
        <SectionHeading
          eyebrow="02 / Toolkit"
          title="The stack I reach for."
          highlight="reach for"
          intro="Languages, frameworks and tools I use to ship and maintain production frontends."
        />

        <div className="mt-[50px] grid gap-[18px] menu:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={(index % 2) * 0.08}
              className="rounded-2xl border border-line bg-surface p-[26px] transition-all duration-300 hover:-translate-y-[3px] hover:border-line2"
            >
              <h3 className="mb-5 flex items-center gap-2.5 font-mono text-[0.78rem] font-medium uppercase tracking-[0.06em] text-faint">
                <span className="text-accent">/</span> {group.title}
              </h3>
              <div className="flex flex-wrap gap-[9px]">
                {group.skills.map((skill) => (
                  <SkillChip key={skill.name} name={skill.name} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
