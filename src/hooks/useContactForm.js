import { useCallback, useEffect, useRef, useState } from 'react';
import { personal } from '../data/personal';
import { FORMSUBMIT_ENDPOINT, STATUS_DISMISS_MS } from '../constants';

const ENDPOINT = `${FORMSUBMIT_ENDPOINT}${personal.email}`;

const INITIAL_VALUES = { name: '', email: '', subject: '', message: '' };
const IDLE = { state: 'idle', message: '' };

/**
 * Manage the contact form: field state, validation, and submission to FormSubmit.
 * The success message auto-dismisses after a few seconds (and clears as soon as
 * the user edits the form again).
 */
export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [status, setStatus] = useState(IDLE);
  const dismissTimer = useRef(null);

  // Clear any pending dismiss timer on unmount.
  useEffect(() => () => clearTimeout(dismissTimer.current), []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    // Hide any lingering status message once the user starts typing again.
    setStatus((current) => (current.state === 'idle' ? current : IDLE));
  }, []);

  const submit = useCallback(
    async (event) => {
      event.preventDefault();
      clearTimeout(dismissTimer.current);

      const name = values.name.trim();
      const email = values.email.trim();
      const message = values.message.trim();

      if (!name || !email || !message) {
        setStatus({ state: 'error', message: 'Please fill in your name, email and message.' });
        return;
      }

      setStatus({ state: 'submitting', message: '' });

      try {
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `${values.subject.trim() || 'New message from portfolio'} — via portfolio`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const data = await response.json().catch(() => ({}));
        const succeeded = response.ok && (data.success === 'true' || data.success === true);

        setStatus({
          state: 'success',
          message: succeeded
            ? '✓ Thanks! Your message is on its way.'
            : 'Message received by the form service — the address may need a one-time confirmation.',
        });
        setValues(INITIAL_VALUES);

        // Auto-dismiss the success message after a short delay.
        dismissTimer.current = setTimeout(() => setStatus(IDLE), STATUS_DISMISS_MS);
      } catch {
        setStatus({
          state: 'error',
          message: `Couldn't send right now. Please email ${personal.email} directly.`,
        });
      }
    },
    [values],
  );

  return { values, status, handleChange, submit };
}
