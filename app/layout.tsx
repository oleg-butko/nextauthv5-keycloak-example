// -- nextra
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';

import './global.css';
import 'nextra-theme-docs/style.css';

// -- end of nextra

import React from 'react';
import Link from 'next/link';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

import '@mantine/core/styles.layer.css';
import '@mantine/core/styles.css';

// -- nextra
const banner = <Banner storageKey="some-key">Info message from nextra 🎉</Banner>;
const navbar = <Navbar logo={<b>Home</b>} />;
const footer = (
  <Footer>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} <Link href="https://github.com/oleg-butko">oleg-butko</Link>
    </p>
  </Footer>
);
// -- end of nextra
export const metadata = {
  title: 'nextauthv5-keycloak-example',
  description: 'Next.js, Mantine, NextAuth.js, Keycloak',
};

export default async function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" dir="ltr" {...mantineHtmlProps}>
      <Head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <body>
        <MantineProvider theme={theme}>
          <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            sidebar={{ autoCollapse: true, defaultOpen: true }}
            editLink="Edit this page"
            docsRepositoryBase="https://github.com/oleg-butko/nextauthv5-keycloak-example/tree/master"
            footer={footer}
          >
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
