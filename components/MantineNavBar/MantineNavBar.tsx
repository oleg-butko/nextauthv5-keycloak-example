'use client';

import React from 'react';
import { Group, Title } from '@mantine/core';

import '@mantine/core/styles.css';

import { Navbar } from 'nextra-theme-docs';
import { UserMenu } from '../auth/UserMenu';
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
          <UserMenu />
        </>
      </Navbar>
    </>
  );
};
