import { Anybody, Fira_Code } from 'next/font/google';

export const FiraCodeFont = Fira_Code({
  weight: ['400', '500', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const AnybodyFont = Anybody({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anybody',
});
