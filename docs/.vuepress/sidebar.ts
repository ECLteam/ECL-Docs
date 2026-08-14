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
    "/other/lanucherdev/": [
      { text: "介绍", link: "/other/lanucherdev/introduction/", icon: "material-symbols:description" },
      {
        text: "启动器开发",
        icon: "material-symbols:menu-book",
        collapsed: false,
        items: [
          { text: "Minecraft 版本清单", link: "/other/lanucherdev/Launch/ManifestLearn", icon: "material-symbols:description" },
          { text: "构建 Minecraft 启动指令", link: "/other/lanucherdev/Launch/BuildLaunchCommand", icon: "material-symbols:description" },
        ],
      }
    ],
    "/dev/": [
      { text: "项目构建", link: "/dev/", icon: "material-symbols:build-outline" },
    ],

}

export default sidebar