import { useState } from 'react';
import { getLogoSources } from '../../../constants';

/**
 * Displays an organisation's real logo, loaded by domain from a logo service.
 * If no source loads (unknown domain or service unavailable), it falls back to
 * a brand-toned monogram badge so the layout never looks broken.
 *
 * @param {string} domain  e.g. 'accenture.com'
 * @param {string} short   monogram fallback text, e.g. 'ACN'
 * @param {string} color   monogram background colour
 * @param {string} name    used for the image alt text
 */
export function Logo({ domain, short, color, name, className = '' }) {
  const sources = getLogoSources(domain);
  const [index, setIndex] = useState(0);
  const src = sources[index];

  if (src) {
    return (
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white p-1.5 ${className}`}
      >
        <img
          src={src}
          alt={`${name} logo`}
          width={44}
          height={44}
          loading="lazy"
          onError={() => setIndex((current) => current + 1)}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl font-mono text-[0.7rem] font-bold text-white ring-1 ring-inset ring-white/15 ${className}`}
      style={{ background: color }}
    >
      {short}
    </span>
  );
}
