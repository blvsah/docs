import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const organizationName = 'blvsah';
const projectName = 'docs';

const config: Config = {
  title: 'Dokumentationen BLV SAH',
  tagline: 'Dokumentationen',
  favicon: 'img/favicon.ico',

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: organizationName,
  projectName: projectName,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          path: 'docs',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexBlog: false,
        indexPages: false,
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: ['tournamentSoftware', 'tournamentOrganisation'],
        language: ['de'],
      },
    ],
  ],

  themeConfig:
    {
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Dokumentationen BLV SAH',
        logo: {
          alt: 'Dokumentationen BLV SAH image Dark',
          src: 'img/blsaLogoForDarkBg.svg',
        },
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Turniersoftware',
                to: 'tournamentSoftware/intro',
              },
              {
                label: 'Turnierausrichtung',
                to: 'tournamentOrganisation/intro',
              },
              {
                label: 'Turnierausschreibung',
                to: 'tournamentInvitation/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'BLSA',
                href: 'https://www.blsa.de/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Badminton-LV Sachsen-Anhalt`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    } satisfies Preset.ThemeConfig,

  // Disable mdx1
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    mdx1Compat: {
      comments: false,
      admonitions: false,
      headingIds: false,
    }
  }
};

export default config;
