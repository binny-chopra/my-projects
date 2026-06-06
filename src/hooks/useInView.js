import { useEffect, useRef, useState } from 'react';

/**
 * Observe an element and report when it enters the viewport.
 *
 * @param {Object}  [options]
 * @param {number}  [options.threshold=0.15]  Intersection ratio that triggers `inView`.
 * @param {string}  [options.rootMargin='0px']
 * @param {boolean} [options.once=true]        Stop observing after the first reveal.
 * @returns {[React.RefObject, boolean]} `[ref, inView]`
 */
export function useInView({ threshold = 0.15, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
