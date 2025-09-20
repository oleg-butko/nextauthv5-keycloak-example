import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { getDirection, getT } from '@app/_i18n';
// import { supportedLocales, supportedLocalesNames } from '@app/_i18n/locales';
import { supportedLocalesNames } from '@app/_i18n/locales';
import { Footer, LastUpdated, Layout } from 'nextra-theme-docs';
// theme config options now should be passed as props https://the-guild.dev/blog/nextra-4
// for Layout Navbar Footer Search and Banner
// import { Banner, Head, Search } from 'nextra/components';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { generateStaticParamsFor } from 'nextra/pages';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { MantineNavBar } from '@/components';
import { theme } from '../../theme';

import '@mantine/core/styles.layer.css';
import '@mantine/core/styles.css';
import 'nextra-theme-docs/style.css';
import './global.css';

export const generateStaticParams = generateStaticParamsFor('lang');
// export async function generateStaticParams() {
//   return supportedLocales.locales.map((lng) => ({ lng }));
// }

const banner = <Banner storageKey="some-key">Info message from nextra 🎉</Banner>;
const footer = (
  <Footer>
    <p className="mt-6 text-xs">
      © {new Date().getFullYear()} <Link href="https://github.com/oleg-butko">Oleg Butko</Link>
    </p>
  </Footer>
);

export async function generateMetadata() {
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  const { t } = await getT('default');
  return {
    title: t('title'),
    content: 'Metadata content',
    description: t('description'),
    keywords: ['Next.js', 'React', 'JavaScript'],
  };
}

type LayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>;

const RootLayout: FC<LayoutProps> = async ({ children, params }) => {
  const { lang } = await params;
  const direction = getDirection(lang);
  //   console.log('RootLayout lang:', lang);
  // also app/[lang]/[[...mdxPath]]\page.tsx
  if (lang === '_next' || lang === 'public') {
    // TODO fix
    console.warn(`return null, RootLayout lang: ${lang}`); // eslint-disable-line
    return null;
  }
  const { t } = await getT('default');
  // TODO lang === '_next':
  // TypeError: {(intermediate value)(intermediate value)(intermediate value)}[lang] is not a function
  const pageMap = await getPageMap(`/${lang}`);

  return (
    <html lang={lang} dir={direction} {...mantineHtmlProps}>
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
            navbar={<MantineNavBar key="navbar" title={t('logo.title')} />}
            pageMap={pageMap}
            // search={<Search placeholder={t('searchPlaceholder')} />}
            // TODO add script to build pagemap from https://pagefind.app/docs/node-api/
            search={<></>}
            i18n={supportedLocalesNames}
            themeSwitch={{ dark: t('dark'), light: t('light'), system: t('system') }}
            lastUpdated={<LastUpdated>{t('lastUpdated')}</LastUpdated>}
            sidebar={{ autoCollapse: true, defaultOpen: true }}
            docsRepositoryBase="https://github.com/oleg-butko/nextauthv5-keycloak-example/tree/master"
            editLink={t('editThisPage')}
            feedback={{ content: t('giveUsFeedback') }}
            toc={{ backToTop: t('backToTop'), title: t('onThisPage') }}
            footer={footer}
          >
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  );
};
export default RootLayout;
