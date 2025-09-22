'use client';

import { forwardRef, useState } from 'react';
import { useT } from '@app/_i18n/client';
import { IconLogin2, IconLogout, IconUser } from '@tabler/icons-react';
import { LocaleSwitch } from 'nextra-theme-docs';
import { Box, Group, Menu, UnstyledButton } from '@mantine/core'; // Avatar, Text,

import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import classes from './UserMenu.module.css';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <IconUser />
      </Group>
    </UnstyledButton>
  )
);

export function UserMenu() {
  const { t } = useT('general');
  const [opened, setOpened] = useState(false);
  return (
    <Menu
      zIndex={10} // NOTE workaround for LocaleSwitch, it's menu is not visible otherwise
      offset={0}
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
    >
      <Menu.Target>
        <UserButton />
      </Menu.Target>

      {/* menu items */}

      <Menu.Dropdown>
        <Menu.Label>{t('account')}</Menu.Label>
        <Menu.Item leftSection={<IconLogin2 size={14} />}>{t('sign-in')}</Menu.Item>
        <Menu.Item leftSection={<IconLogin2 size={14} />}>{t('sign-up')}</Menu.Item>
        <Menu.Item disabled leftSection={<IconLogout size={14} />}>
          {t('sign-out')}
        </Menu.Item>
        <Menu.Divider />

        <Menu.Label>{t('settings')}</Menu.Label>
        <Group gap={3} m={5} align="left" display="flex" style={{ flexDirection: 'column' }}>
          <Box mih={40}>
            <LocaleSwitch className={classes.localeSwitch} />
          </Box>
          <ColorSchemeControl />
        </Group>
      </Menu.Dropdown>
    </Menu>
  );
}
