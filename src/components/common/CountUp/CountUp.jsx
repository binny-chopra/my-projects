import { useInView } from '../../../hooks/useInView';
import { useCountUp } from '../../../hooks/useCountUp';

/**
 * Render a number that counts up when it scrolls into view.
 *
 * @param {number} target            Final number.
 * @param {string} [suffix='']       Appended after the value (e.g. '+', 'K+').
 */
export function CountUp({ target, suffix = '' }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const value = useCountUp(target, inView);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
