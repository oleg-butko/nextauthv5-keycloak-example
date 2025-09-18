'use client';

// import { usePathname } from 'next/navigation';
import { useT } from '@app/_i18n/client';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { useTheme } from 'nextra-theme-docs';
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { HeaderControl } from './HeaderControl';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { t } = useT('default');
  //   const pathname = usePathname();
  //   console.log('ColorSchemeControl pathname', pathname);
  //   const lang = pathname.split('/')[1] || 'en';
  //   console.log('ColorSchemeControl lang', lang);
  const { setColorScheme } = useMantineColorScheme();
  //   const { setTheme, theme } = useTheme();
  const { setTheme } = useTheme();
  //   getDictionary(lang).then((v) => {
  //     if (v) {
  //       console.log('dictionary', v);
  //     }
  //   });
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  const handleColorSchemeChange = () => {
    const newColorScheme = computedColorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    setTheme(newColorScheme);
  };
  // t('dark') light/system
  return (
    <HeaderControl
      onClick={handleColorSchemeChange}
      tooltip={`${computedColorScheme === 'dark' ? t('light') : t('dark')}`}
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </HeaderControl>
  );
}
