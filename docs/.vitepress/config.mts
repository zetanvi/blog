import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '米楼', // 博客的标题
  description: 'mellow的个人博客',
  // description: 'mellow的个人博客', // 博客的介绍
  base: '/blog/', // 如果想用 https://zetanvi.github.io/blog/ 访问，那么这句话必填
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  themeConfig: {
    logo: '/public/logo.svg', // 页面上显示的logo
    nav: [
      // 页面右上角的导航
      { text: '技术', link: '/articles/work' },

      { text: '生活', link: '/articles/life/index' },
      {
        text: '博客文档',
        items: [
          // 可以配置成下拉
          { text: 'test1', link: '/javaScript-core/构造函数、原型、原型链' },
          { text: 'Vue 三方组件库', link: '/libs/VForm3低代码初体验' },
          { text: '其他', link: '/other/nvm管理node' },
        ],
      },
    ],
    // sidebar: {
    //   // 侧边栏，可以分组
    //   '/articles/vue/': [
    //     {
    //       text: '基础',
    //       items: [],
    //     },
    //     {
    //       text: '代码段',
    //       items: [
    //         {
    //           text: '上传素材到COS',
    //           link: '/articles/vue/上传素材到COS',
    //         },
    //         {
    //           text: '文件下载',
    //           link: '/articles/vue/文件下载',
    //         },
    //       ],
    //     },
    //   ],
    //   '/articles/uniapp/': [
    //     {
    //       text: '基础',
    //       items: [],
    //     },
    //     {
    //       text: '代码段',
    //       items: [
    //         {
    //           text: '一键登录',
    //           link: '/articles/uniapp/一键登录',
    //         },
    //       ],
    //     },
    //   ],
    //   '/articles/javaScript-core/': [
    //     {
    //       text: '基础',
    //       items: [
    //         {
    //           text: '1. 构造函数、原型、原型链',
    //           link: '/articles/javaScript-core/构造函数、原型、原型链',
    //         },
    //         {
    //           text: '2. 执行上下文和执行上下文栈',
    //           link: '/articles/javaScript-core/执行上下文和执行上下文栈',
    //         },
    //         {
    //           text: '3. this的指向',
    //           link: '/articles/javaScript-core/this的指向',
    //         },
    //       ],
    //     },
    //     {
    //       text: '进阶',
    //       items: [
    //         {
    //           text: 'xx',
    //           link: '/xx',
    //         },
    //       ],
    //     },
    //   ],
    //   '/articles/libs/': [
    //     {
    //       items: [
    //         {
    //           text: '1. VForm3低代码初体验',
    //           link: '/articles/libs/VForm3低代码初体验',
    //         },
    //       ],
    //     },
    //   ],
    // },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zetanvi' }], // 可以连接到 github
  },
})
