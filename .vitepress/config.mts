import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Documents",
  description: "Project Documentation",
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/static/favicon.png" }]
  ],

  locales: {
    // 简体中文 (主要)
    // ----------------------------------------------------------------
    root: {
      label: "简体中文",
      lang: "zh_CN",
      themeConfig: {
        outlineTitle: "页面导航",
        lastUpdatedText: "最后更新于",

        nav: [],

        sidebar: {
          "/": [],

          "/pytypex/": [
            {
              text: "pytypex",
              items: [
                { text: "介绍", link: "/pytypex/" },
                { text: "静态类", link: "/pytypex/static" },
                { text: "单例类", link: "/pytypex/singleton" },
                { text: "多例类", link: "/pytypex/multiton" },
                { text: "原子计数器", link: "/pytypex/atomic" }
              ]
            }
          ]
        },

        editLink: {
          pattern: "https://github.com/numlinka/documents/edit/master/:path",
          text: "在 GitHub 上编辑此页面"
        },

        docFooter: {
          prev: "上一页",
          next: "下一页"
        },
      }
    },

    // English
    // ----------------------------------------------------------------
    en: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [],
      }
    },
  },

  themeConfig: {
    outline: [2, 3],
    logo: "/static/favicon.png",

    editLink: {
      pattern: "https://github.com/numlinka/documents/edit/master/:path",
      text: "Edit this page on GitHub"
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  }
})
