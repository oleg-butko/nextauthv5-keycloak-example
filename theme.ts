'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  /* test */
  /*
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Courier, monospace',
  headings: { fontFamily: 'Georgia, serif' },
  spacing: {
    xs: 2,
    xl: 20,
  },
  */
  /* test */
  colors: {
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '36' },
    },
  },
});
