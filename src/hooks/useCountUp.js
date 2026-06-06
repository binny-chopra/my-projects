import { useEffect, useRef, useState } from 'react';

/**
 * Animate a number from 0 to `target` when `start` becomes true.
 *
 * @param {number}  target           Final value.
 * @param {boolean} start            Begin the animation when true.
 * @param {number}  [duration=1500]  Animation length in ms.
 * @returns {number} The current (rounded) value.
 */
export function useCountUp(target, start, duration = 1500) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!start) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      frameRef.current = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frameRef.current);
    }

    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(Math.round(target * eased));
      if (elapsed < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, start, duration]);

  return value;
}
