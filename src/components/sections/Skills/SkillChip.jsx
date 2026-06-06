import { skillIcons } from './skillIcons';

/** A single skill chip with a bundled brand/tech icon. */
export function SkillChip({ name }) {
  const Icon = skillIcons[name];

  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface2 px-[13px] py-2 text-[0.85rem] text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-bg2 hover:text-accent">
      {Icon && <Icon className="h-[17px] w-[17px] shrink-0" aria-hidden="true" />}
      <span>{name}</span>
    </span>
  );
}
