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
                { text: "介绍", link: "/pytypex/index" },
                { text: "常量", link: "/pytypex/constants" },
                { text: "静态类", link: "/pytypex/static" },
                { text: "单例类", link: "/pytypex/singleton" },
                { text: "多例类", link: "/pytypex/multiton" },
                { text: "原子计数器", link: "/pytypex/atomic" },
                { text: "目录构建器", link: "/pytypex/dirstruct" }
              ]
            }
          ],

          "/pylogop/": [
            {
              text: "pylogop",
              items: [
                { text: "介绍", link: "/pylogop/index" },
                { text: "常量", link: "/pylogop/constants" },
                { text: "异常", link: "/pylogop/exceptions" },
                { text: "数据类型", link: "/pylogop/typeins" },
                { text: "日志等级", link: "/pylogop/level" },
                { text: "抽象类型", link: "/pylogop/base" },
                { text: "日志记录器", link: "/pylogop/logging" },
                { text: "输出流", link: "/pylogop/stream" },
                { text: "实用工具", link: "/pylogop/utils" },
                { text: "易用设计", link: "/pylogop/ease" },
                { text: "个性化", link: "/pylogop/custom" }
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
