import type { ThemeSidebarMulti } from 'vuepress-theme-plume'

const sidebar: ThemeSidebarMulti = {
    "/guide/": [
      {
        text: "开始",
        icon: "material-symbols:menu-book",
        collapsed: false,
        items: [
          { text: "介绍", link: "/guide/1.开始/introduction.html", icon: "material-symbols:description" },
        ],
      },
      {
        text: "其他",
        icon: "material-symbols:more-vert",
        collapsed: false,
        items: [
          { text: "用户协议", link: "/guide/4.其他/user-agreement.html", icon: "material-symbols:settings" },
        ],
      }
    ],

}

export default sidebar