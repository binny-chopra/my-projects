import { cx } from '../../../utils/helpers';

const VARIANTS = {
  primary:
    'bg-accent text-accentc border-accent shadow-[0_10px_28px_-12px_var(--accent)] hover:shadow-[0_16px_34px_-10px_var(--accent)]',
  ghost: 'border-line2 text-text hover:border-accent',
};

/**
 * Polymorphic button: renders an <a> when `href` is provided, otherwise a <button>.
 *
 * @param {'primary'|'ghost'} [variant='ghost']
 */
export function Button({ variant = 'ghost', href, className, children, ...rest }) {
  const classes = cx(
    'inline-flex items-center gap-2 whitespace-nowrap rounded-lg border px-[18px] py-[11px] font-mono text-[0.78rem] transition-all duration-200 ease-out hover:-translate-y-0.5 [&_svg]:h-[15px] [&_svg]:w-[15px]',
    VARIANTS[variant],
    className,
  );

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
