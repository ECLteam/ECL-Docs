/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '快速开始', link: '/guide/introduction/', activeMatch: '^/guide/' },
  { text: '开发', link: '/dev/', activeMatch: '^/dev/' },
  { text: '其他', items: [
    { text: '启动器开发', link: '/other/lanucherdev/introduction/', activeMatch: '^/other/' }
  ] },
])
