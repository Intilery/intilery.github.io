module.exports = {
  title: 'Documentation for Developers',
  tagline: 'Making marketeers the best they can be',
  url: 'https://docs.intilery.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'intilery', // Usually your GitHub org/user name.
  projectName: 'developer-docs', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
  	prism: {
      additionalLanguages: ['swift'],
    },
  	googleAnalytics: {
  		trackingID: 'G-9T47KP3LPV',
  	},
  	algolia: {
    	  apiKey: "c5e1cd13947d1b0e5910f70a6fdab529",
	      indexName: "intilery",
    	},
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
          label: 'Start Your Integration',
          position: 'left',
        },
        {
          to: 'docs/schema/contents',
          activeBasePath: 'docs/schema/contents',
          label: 'Schema',
          position: 'left',
        },
        {
          to: 'docs/tag/tag1',
          label: 'Websites',
          position: 'left',
        },
        {
          to: 'docs/app/main',
          label: 'Mobile Apps',
          position: 'left',
        },
        {
          to: 'docs/apis/api',
          label: 'APIs for Servers',
          position: 'left',
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
              label: 'Start Your Integration',
              to: 'docs/guides/contents',
            },
            {
              label: 'Standard Data',
              to: 'docs/schema/contents',
            },
            {
              label: 'Website Integration',
              to: 'docs/tag/tag1',
            },
            {
              label: 'Mobile App Integration',
              to: 'docs/app/main',
            },
            {
              label: 'Server API Integration',
              to: 'docs/apis/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/intilery',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/intilery-com/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/intilery/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/intilery/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'User Guides',
              href: 'http://support.intilery.com/',
            },
            {
              label: 'Roadmap',
              to: 'docs/roadmap/roadmap',
            },
            {
              label: 'Blog',
              href: 'https://www.intilery.com/category/blog/',
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
          sidebarPath: require.resolve('./sidebars.js')
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
