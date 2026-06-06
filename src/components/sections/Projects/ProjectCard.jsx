import { useCallback } from 'react';
import { ArrowUpRight } from '../../common/Icon/icons';

/** A single project card linking out to a live demo or sandbox. */
export function ProjectCard({ project, number }) {
  const handlePointerMove = useCallback((event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handlePointerMove}
      className="group relative flex min-h-[150px] w-full flex-col gap-3.5 overflow-hidden rounded-xl border border-line bg-surface p-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-line2"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,0%),var(--glow),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="absolute right-5 top-5 text-faint transition-all duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] group-hover:text-accent [&_svg]:h-[18px] [&_svg]:w-[18px]">
        <ArrowUpRight />
      </span>
      <span className="font-mono text-[0.72rem] text-faint">{number}</span>
      <h3 className="text-[1.12rem] font-semibold tracking-[-0.01em]">{project.name}</h3>
      <span className="mt-auto font-mono text-[0.74rem] text-dim">{project.tag}</span>
    </a>
  );
}
