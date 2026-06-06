import { Container } from '../../common/Container/Container';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Reveal } from '../../common/Reveal/Reveal';
import { Button } from '../../common/Button/Button';
import { Mail, LinkedIn, GitHub, Send } from '../../common/Icon/icons';
import { personal, socials } from '../../../data/personal';
import { useContactForm } from '../../../hooks/useContactForm';
import { cx } from '../../../utils/helpers';

const contactLinks = [
  { key: 'email', label: 'Email', value: personal.email, url: `mailto:${personal.email}`, Icon: Mail, external: false },
  { key: 'linkedin', label: socials.linkedin.label, value: socials.linkedin.handle, url: socials.linkedin.url, Icon: LinkedIn, external: true },
  { key: 'github', label: socials.github.label, value: socials.github.handle, url: socials.github.url, Icon: GitHub, external: true },
];

const labelClass = 'mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.06em] text-faint';
const fieldClass =
  'w-full resize-y rounded-lg border border-line bg-bg2 px-[15px] py-[13px] text-[0.96rem] text-text transition placeholder:text-faint focus:border-accent focus:outline-none focus:[box-shadow:0_0_0_3px_color-mix(in_srgb,var(--accent)_18%,transparent)]';

export function Contact() {
  const { values, status, handleChange, submit } = useContactForm();
  const submitting = status.state === 'submitting';

  return (
    <section id="contact" className="py-[clamp(70px,11vw,140px)]">
      <Container>
        <SectionHeading eyebrow="06 / Contact" title="Let's build something." highlight="build" />

        <div className="mt-12 grid items-start gap-[clamp(30px,5vw,60px)] menu:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="mb-[26px] max-w-[36ch] text-[1.05rem] text-dim">
              If you work on data-heavy web apps or frontend platforms, I'd be happy to connect. Drop a message and it
              lands straight in my inbox.
            </p>
            <div className="grid gap-3">
              {contactLinks.map(({ key, label, value, url, Icon, external }) => (
                <a
                  key={key}
                  href={url}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3.5 rounded-lg border border-line bg-surface px-[18px] py-4 transition-all duration-200 hover:translate-x-1 hover:border-accent"
                >
                  <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-lg border border-line bg-surface2 [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:text-accent">
                    <Icon />
                  </span>
                  <span>
                    <b className="block font-mono text-[0.78rem] uppercase tracking-[0.04em] text-faint">{label}</b>
                    <span className="text-[0.95rem] text-text">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal
            as="form"
            delay={0.1}
            onSubmit={submit}
            noValidate
            className="rounded-2xl border border-line bg-surface p-[clamp(24px,4vw,38px)] shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="mb-[18px]">
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={values.name}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>
              <div className="mb-[18px]">
                <label htmlFor="email" className={labelClass}>
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mb-[18px]">
              <label htmlFor="subject" className={labelClass}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Frontend role / project / hello"
                value={values.subject}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>

            <div className="mb-[18px]">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me a little about what you're working on…"
                value={values.message}
                onChange={handleChange}
                required
                className={fieldClass}
              />
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={submitting}
              className="mt-1 w-full justify-center py-[15px] text-[0.85rem] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {submitting ? 'Sending…' : 'Send message'}
              {!submitting && <Send />}
            </Button>

            {status.message && (
              <p
                className={cx(
                  'mt-3.5 min-h-[1.2em] text-center font-mono text-[0.82rem]',
                  status.state === 'success' && 'text-up',
                  status.state === 'error' && 'text-accent2',
                )}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <p className="mt-3.5 text-center font-mono text-[0.72rem] text-faint">
              Messages are delivered straight to {personal.email}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
