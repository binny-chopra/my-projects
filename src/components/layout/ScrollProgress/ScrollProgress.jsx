import { useScrollProgress } from '../../../hooks/useScrollProgress';

/** Thin progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed left-0 top-0 z-[200] h-0.5 bg-accent"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
