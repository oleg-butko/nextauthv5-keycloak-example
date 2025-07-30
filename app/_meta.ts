export default {
  index: {
    display: 'hidden',
  },
  docs: {
    type: 'page',
    title: 'Documentation',
  },
  about: {
    // display: 'hidden',
    type: 'page',
    title: 'About',
    theme: {
      layout: 'full',
      pagination: false,
      timestamp: false,
      toc: false,
      sidebar: false,
    },
  },
  links: {
    title: 'More',
    type: 'menu',
    items: {
      title1: {
        title: 'Link 1',
        href: 'https://example.com',
      },
      title2: {
        title: 'Link 2',
        href: 'https://example.com',
      },
    },
  },
};
