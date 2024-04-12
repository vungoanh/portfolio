import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'vn'] as const;

export const pathnames = {
  '/': '/#home',
  '/#about': {
    en: '/#about',
    vn: '/#sobre'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;