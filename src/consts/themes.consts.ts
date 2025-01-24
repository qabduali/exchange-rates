import { IFontStyle, ITheme } from 'types/theme.interface';

export const THEME: ITheme = {
  // COLORS
  bgGradient: 'linear-gradient(90deg, #D4E4EB 18%, #E0E9EE 81.5%)',
  lightGray: '#F4F4F4',
  gray: '#EFEFEF',
  gray2: '#D9D9D9',
  darkGray: '#A2A2A2',
  graphite: '#4E4E4E',
  black: '#252525',
  blue: '#0F6497',
  orange: '#CA8414',
  red: '#BA2626',
  white: '#FFFFFF',
  transparentWhite_30: 'rgba(255, 255, 255, 0.3)',
  transparentWhite_60: 'rgba(255, 255, 255, 0.6)',
  lightBlueGradient: 'linear-gradient(90deg, #d4e4eb 18%, #e0e9ee 81.5%)',
  // TYPOGRAPHY
  p1Regular: `
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5em;
    text-align: left;
  `,
  p1Bold: `
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5em;
    text-align: left;
  `,
  p2Bold: `
    font-size: 0.8125rem;
    font-weight: 800;
    line-height: 1em;
    text-align: left;
  `,
  h1: `
    font-size: 2.0625rem;
    font-weight: 500;
    line-height: 1.2em;
    text-align: left;
  `,
  h3: `
    font-size: '1.4375rem';
    font-weight: 600;
    line-height: '1.875rem';
    text-align: left;
  `,
  h4: `
    font-size: '1.25rem';
    font-weight: 600;
    line-height: 1.625rem';
    text-align: left;
  `,
};

export const TYPOGRAPHY: Record<string, IFontStyle> = {
  P1_400: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.5rem',
  },
  P1_600: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: '1.5rem',
  },
  P2_400: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    lineHeight: '1rem',
  },
  P2_700: {
    fontSize: '0.8125rem',
    fontWeight: 700,
    lineHeight: '0.8125rem',
  },
  H1: {
    fontSize: '2.0625rem',
    fontWeight: 400,
    lineHeight: '2.475rem',
  },
  H2: {
    fontSize: '1.4375rem',
    fontWeight: 400,
    lineHeight: '1.87rem',
  },
  H3: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: '1.625rem',
  },
  H4: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: '1.625rem',
  },
};
