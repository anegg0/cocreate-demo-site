// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zksync API documentation sample',
  tagline: 'Probably the shortest API documentation in the world',
  url: 'https://silly-belekoy-b83b1a.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anegg0', // Usually your GitHub org/user name.
  projectName: 'api-demo-site', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'api-def.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#002868ff',
        },
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [
            [require('docusaurus-remark-plugin-codetabs'), {
            }],
          ],
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zksync API documentation',
        logo: {
          alt: 'Zksync API documentation Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'zksync-api-reference',
            position: 'left',
            label: 'API Reference',
          },
          { to: '/api', label: 'API Definition', position: 'left' },
          {
            type: 'doc',
            docId: 'zksync-api-docs-improvement-strategy',
            position: 'left',
            label: 'API Docs Improvement Strategy',
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
                label: 'Zksync Improvement Strategy',
                to: '/api', label: 'API Definition', position: 'left' },
              {
                label: 'Zksync Improvement Strategy',
                to: '/docs/zksync-api-docs-improvement-strategy',
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
