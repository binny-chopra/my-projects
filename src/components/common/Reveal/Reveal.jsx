import { useInView } from '../../../hooks/useInView';
import { cx } from '../../../utils/helpers';

/**
 * Fades and slides its children in when scrolled into view.
 *
 * @param {number} [delay=0]  Stagger delay in seconds.
 * @param {string} [as='div'] Element/tag to render.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className, children, ...rest }) {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
    <Tag
      ref={ref}
      className={cx(
        'transition-all duration-700 ease-out motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:transition-none',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
