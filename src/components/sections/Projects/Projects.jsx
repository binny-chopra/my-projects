import { ProjectCard } from './ProjectCard';
import { Container } from '../../common/Container/Container';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Reveal } from '../../common/Reveal/Reveal';
import { Button } from '../../common/Button/Button';
import { ArrowUpRight } from '../../common/Icon/icons';
import { projects } from '../../../data/projects';
import { socials } from '../../../data/personal';

export function Projects() {
  return (
    <section id="projects" className="py-[clamp(70px,11vw,140px)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-[18px]">
          <SectionHeading
            eyebrow="04 / Projects"
            title="Practice playground."
            highlight="playground"
            intro="A collection of small builds and experiments — components, tools and patterns I've put together for fun and practice."
          />
          <Reveal delay={0.16}>
            <Button href={socials.projects.url} target="_blank" rel="noopener noreferrer">
              View all projects
              <ArrowUpRight />
            </Button>
          </Reveal>
        </div>

        <div className="mt-[50px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 3) * 0.07} className="flex">
              <ProjectCard project={project} number={String(index + 1).padStart(2, '0')} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
