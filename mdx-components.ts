import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';
import { Pre, withIcons } from 'nextra/components';
import { GitHubIcon } from 'nextra/icons';
import type { UseMDXComponents } from 'nextra/mdx-components';

//
// https://the-guild.dev/blog/nextra-4 -> Customizing Icons
//
const docsComponents = getDocsMDXComponents({
  pre: withIcons(Pre, { js: GitHubIcon }),
});

// NOTE type error with fresh next.js, was ok with next@15.3.1
// @ts-ignore
export const useMDXComponents: UseMDXComponents<typeof docsComponents> = <T>(components?: T) => ({
  ...docsComponents,
  ...components,
});

// export const useMDXComponents = (components?: any): any => ({
