'use client';

// import { usePathname } from 'next/navigation';
import { useT } from '@app/_i18n/client';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { useTheme } from 'nextra-theme-docs';
import { Group, Text, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { HeaderControl } from './HeaderControl';
import classes from './ColorSchemeControl.module.css';

export function ColorSchemeControl() {
  const { t: t1 } = useT('default');
  const { t: t2 } = useT('general');
  //   const pathname = usePathname();
  //   console.log('ColorSchemeControl pathname', pathname);
  //   const lang = pathname.split('/')[1] || 'en';
  //   console.log('ColorSchemeControl lang', lang);
  const { setColorScheme } = useMantineColorScheme();
  //   const { setTheme, theme } = useTheme();
  const { setTheme } = useTheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  const handleColorSchemeChange = () => {
    const newColorScheme = computedColorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(newColorScheme);
    setTheme(newColorScheme);
  };
  return (
    <Group gap={2}>
      <HeaderControl
        onClick={handleColorSchemeChange}
        tooltip={`${computedColorScheme === 'dark' ? t1('light') : t1('dark')}/`}
        aria-label="Toggle theme"
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </HeaderControl>
      <Text ml={3} size="sm">
        {t2('toggle-theme')}
      </Text>
    </Group>
  );
}
