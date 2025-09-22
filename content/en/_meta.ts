export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      sidebar: false,
      timestamp: false,
      typesetting: 'article',
      toc: false
    }
  },
  docs: {
    type: 'page',
    title: 'Documentation'
  },
  examples: {
    type: 'page',
    title: 'Examples',
    theme: {
      layout: 'full'
    }
  },
  blog: {
    type: 'page',
    title: 'Blog',
    theme: {
      sidebar: false,
      typesetting: 'article'
    }
  },
  about: {
    type: 'menu',
    title: 'More',
    items: {
      contributors: {
        href: 'https://github.com/vercel/swr/graphs/contributors'
      },
      team: '',
      acknowledgement: '',
      'a-page': '',
      changelog: ''
    }
  }
}
