module.exports = {
  title: 'Intilery Developer Documentation',
  tagline: 'Customers Engaged',
  url: 'https://intilery.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'intilery', // Usually your GitHub org/user name.
  projectName: 'developer-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //       'We are looking to revamp our docs, please <a href="https://github.com/Intilery/intilery.github.io/issues" target="_blank">raise an issue</a> for more help',
    //   backgroundColor: '#213247', // Defaults to `#fff`.
    //   textColor: '#fea621', // Defaults to `#000`.
    // },
    navbar: {
      title: 'intilery',
      logo: {
        alt: 'intilery',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/guides/contents',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/apis/api1',
          label: 'APIs',
          position: 'left',
        },
        {
          to: 'docs/tag/tag1',
          label: 'Tag',
          position: 'left',
        },
        {
          to: 'docs/schema/contents',
          activeBasePath: 'docs/schema/contents',
          label: 'Schema',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/Intilery/intilery.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Guide',
              to: 'docs/apis/api1',
            },
            {
              label: 'JavaScript Tag',
              to: 'docs/tag/tag1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Intilery/intilery.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intilery.com Ltd.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Intilery/intilery.github.io/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Intilery/intilery.github.io/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
