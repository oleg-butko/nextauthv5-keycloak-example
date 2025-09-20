import bundleAnalyzer from '@next/bundle-analyzer';
import nextra from 'nextra';
import { supportedLocales } from './app/_i18n/locales.js';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

//
// Nextra
//
const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  // https://nextra.site/docs/guide/search
  // TODO https://pagefind.app/docs/node-api/
  search: false, // no effect?
  //   search: {
  //     codeblocks: false,
  //   },
  // https://github.com/shuding/nextra/issues/3934#issuecomment-2610808433
  unstable_shouldAddLocaleToLinks: true,
  contentDirBasePath: '/',
});

//
// Next
//
export default withNextra(
  withBundleAnalyzer({
    images: {
      unoptimized: true,
    },
    output: 'standalone',
    // https://nextra.site/docs/guide/static-exports
    // output: 'export',
    // https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash
    trailingSlash: false,
    reactStrictMode: true,
    cleanDistDir: true,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    i18n: {
      locales: supportedLocales.locales,
      defaultLocale: supportedLocales.defaultLocale,
    },
    redirects: async () => [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        statusCode: 302,
      },
    ],
    webpack(config) {
      // rule.exclude doesn't work starting from Next.js 15
      const { test: _test, ...imageLoaderOptions } = config.module.rules.find(
        // @ts-expect-error -- fixme
        (rule) => rule.test?.test?.('.svg')
      );
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /svgr/,
            use: ['@svgr/webpack'],
          },
          imageLoaderOptions,
        ],
      });
      return config;
    },
    turbopack: {
      rules: {
        './app/_icons/*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@app/_icons'],
    },
    // productionBrowserSourceMaps: true,
  })
);
