'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { css } from '#pcss/css';
import { i18n } from '~/locales/i18n-config';

interface LocaleSwitcherProps {
  readonly title: string;
}
const LocaleSwitcher = ({ title }: LocaleSwitcherProps): React.JSX.Element => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string): string => {
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className={css({ fontFamily: 'anybody' })}>
      <p>{title}</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocaleSwitcher;
