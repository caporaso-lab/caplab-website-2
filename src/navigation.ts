import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Jobs',
      href: getPermalink('/jobs'),
    },
    {
      text: 'Publications',
      href: getPermalink('/publications'),
    },
    {
      text: 'Contract Work',
      href: getPermalink('/contract-work'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Support',
      links: [{ text: 'Forum', href: '#' }],
    },
    {
      title: 'Miscellaneous',
      links: [{ text: 'FAQ', href: '/faq' }],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/qiime2' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/qiime2' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/qiime2.org' },
  ],
  footNote: `
    Original template by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · Maintained by the Caporaso Lab · All rights reserved.
  `,
};
