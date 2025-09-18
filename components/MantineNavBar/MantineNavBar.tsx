'use client';

import React from 'react';
import { Group, Title } from '@mantine/core';

import '@mantine/core/styles.css';

import { LocaleSwitch, Navbar } from 'nextra-theme-docs';
import userImage from '@/public/flaticon/user.png';
import { UserButton } from '../auth/UserButton';
import { ColorSchemeControl } from '../ColorSchemeControl/ColorSchemeControl';
import { Logo } from '../Logo/Logo';
import { MantineNextraThemeObserver } from '../MantineNextraThemeObserver/MantineNextraThemeObserver';

/**
 * You can customize the Nextra NavBar component.
 * Don't forget to use the MantineProvider and MantineNextraThemeObserver components.
 *
 * @since 1.0.0
 *
 */

export const MantineNavBar = ({ title }: { title: string }) => {
  return (
    <>
      <MantineNextraThemeObserver />
      <Navbar
        logo={
          <Group align="center" gap={4} h="100%" wrap="nowrap">
            <Logo />
            <Title lineClamp={1} h="100%" textWrap="stable">
              {title}
            </Title>
          </Group>
        }
      >
        <>
          <ColorSchemeControl />
          <LocaleSwitch lite />
          <UserButton image={userImage.src} name="user name" email="user@somesite.com" />
        </>
      </Navbar>
    </>
  );
};
