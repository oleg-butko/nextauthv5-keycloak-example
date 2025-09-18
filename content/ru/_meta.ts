import meta from '../en/_meta'

export default {
  // index: meta.index,
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
    ...meta.docs,
    title: 'Документация'
  },
  examples: {
    ...meta.examples,
    title: 'Примеры'
  },
  blog: {
    ...meta.blog,
    title: 'Блог'
  }
}
