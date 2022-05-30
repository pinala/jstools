import { addonCategoryNames, categoryNames, coreCategoryNames, metadata } from '@vueuse/metadata'

const items = [
  { text: 'Get Started', link: '/guide/index' },
  { text: 'Best Practice', link: '/guide/best-practice' },
  { text: 'Configurations', link: '/guide/config' },
]

// const CoreCategories = coreCategoryNames.map(c => ({
//   text: c,
//   activeMatch: '___', // never active
//   link: `/functions#category=${c}`,
// }))
// const AddonCategories = [
//   ...addonCategoryNames
//     .map(c => ({
//       text: c.slice(1),
//       activeMatch: '___', // never active
//       link: `/functions#category=${encodeURIComponent(c)}`,
//     })),
// ]

const Links = [
  { text: 'Add-ons', link: '/add-ons' },
  { text: 'Ecosystem', link: '/ecosystem' },
  // { text: 'Export Size', link: '/export-size' },
  // { text: 'Recent Updated', link: '/recent-updated' },
]
const DefaultSideBar = [
  { text: 'aaa', items: items },
  // { text: 'Core Functions', items: CoreCategories },
  // { text: 'Add-ons', items: AddonCategories },
  { text: 'Links', items: Links },
]
const config = {
  title: 'Pinala Utils',
  description: 'Javascript tools',
  lang: 'en-US',
  themeConfig: {
    // logo: '/logo.png',
    repo: 'https://github.com/pinala',
    docsDir: 'src',

    editLinks: true,
    editLinkText: 'Edit this page',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: 'a99ef8de1b2b27949975ce96642149c6',
    //   indexName: 'vueuse',
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pinala' },
    ],
    // nav: [
    //   {
    //     text: 'Guide',
    //     items: [
    //       { text: 'Guide', items: Guide },
    //       // { text: 'Links', items: Links },
    //     ],
    //   },
    // ],
    sidebar: {
      '/guide/': DefaultSideBar,
      // '/add-ons': DefaultSideBar,
    },
  }
}
export default config