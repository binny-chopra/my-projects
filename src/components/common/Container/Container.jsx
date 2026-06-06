import { cx } from '../../../utils/helpers';

/** Centres content and applies the shared max width + horizontal padding. */
export function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cx('mx-auto w-full max-w-[1180px] px-5 sm:px-7', className)} {...rest}>
      {children}
    </Tag>
  );
}
