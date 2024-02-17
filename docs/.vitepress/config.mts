import { defineConfig } from 'vitepress'
const base = '/ITEP-Food-Ordering-Application/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  base,
  title: "ITEP Food Ordering Application",
  description: "A simple microservice's application that contain 3 microservices [Restaurant, Delivery and Customer]",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://code.sumer5020.com/ITEP-Food-Ordering-Application/' }
    ],

    sidebar: [],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sumer5020/ITEP-Food-Ordering-Application',
        ariaLabel: 'GitHub Repository'
      },
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><title>GitHub Project</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M17.5 19H22m0 0l-2.5-2.5M22 19l-2.5 2.5M12 2L9.5 4.5L12 7"/><path d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2"/><path d="M6.756 5.5A7.497 7.497 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5"/></g></svg>'},
        link: 'https://github.com/users/sumer5020/projects/11/views/1',
        ariaLabel: 'GitHub Project',
      }
    ]
  }
})
