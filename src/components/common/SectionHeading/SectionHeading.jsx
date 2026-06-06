import { Reveal } from '../Reveal/Reveal';

/**
 * Standard section header: a monospace eyebrow, a serif title with an
 * optional highlighted word, and an optional intro line.
 *
 * @param {string} eyebrow
 * @param {string} title
 * @param {string} [highlight]  A word in `title` to colour as the accent.
 * @param {string} [intro]
 */
export function SectionHeading({ eyebrow, title, highlight, intro }) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return title;
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <em className="italic text-accent">{highlight}</em>
        {after}
      </>
    );
  };

  return (
    <div className="flex flex-col">
      <Reveal
        as="span"
        className="mb-[18px] inline-flex items-center gap-2.5 font-mono text-[0.74rem] uppercase tracking-[0.16em] text-accent before:inline-block before:h-px before:w-[26px] before:bg-accent before:content-['']"
      >
        {eyebrow}
      </Reveal>
      <Reveal
        as="h2"
        delay={0.08}
        className="mb-4 font-display text-[clamp(2rem,4.6vw,3.3rem)] font-normal leading-[1.04] tracking-[-0.02em]"
      >
        {renderTitle()}
      </Reveal>
      {intro && (
        <Reveal as="p" delay={0.16} className="max-w-[60ch] text-[1.04rem] text-dim">
          {intro}
        </Reveal>
      )}
    </div>
  );
}
