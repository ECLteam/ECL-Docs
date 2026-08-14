---
title: 开发文档
permalink: /dev/
createTime: 2026/08/12 21:30:00
---

::: warning 提示
本页面为开发者文档，主要面向 EuoraCraft Launcher 的开发者和贡献者。如果您是普通用户，那么请您关闭此页面或者返回[主页](../README.md)，此页面不影响您使用 EuoraCraft Launcher 的功能。
:::


## 项目介绍

欢迎来到 ==EuoraCraft Launcher== 的开发者文档！本项目是一个开源的 Minecraft 启动器，旨在为玩家提供更好的游戏体验和更多的自定义选项。无论您是想贡献代码、修复 bug，还是添加新功能，这里都是您开始的地方。

项目主要是基于 `PyTauri` 和 `vue3` 开发的跨平台桌面应用程序，支持 Windows、Linux 和 macOS。我们欢迎所有对 Minecraft 启动器开发感兴趣的开发者加入我们的社区，共同打造一个更好的游戏体验。

如果您对启动器原理感兴趣的话，您可以浏览[启动器原理](../other/lanucherdev/README.md) 页面，了解启动器的启动原理。


### 启动器仓库

以下为 EuoraCraft Launcher 相关的主要仓库：!!“欢迎各位贡献者前来贡献！”!!

<RepoCard repo="ECLteam/EuoraCraft-Launcher" />
<RepoCard repo="ECLteam/EuoraCraftLauncher-UI" />
<RepoCard repo="ECLteam/ECLauncherCore" />
<RepoCard repo="ECLteam/Florolding" />

### 技术栈
本项目基于以下技术栈：

::: collapse
- 依赖列表 （点击展开）
    | 分类 | 技术 | 说明 |
    | ---- | ---- | ---- |
    | 后端语言 | Python >= 3.11 | 主逻辑开发语言 |
    | 后端框架 | PyTauri 0.8 | 基于 Tauri 的 Python 桌面应用框架 |
    | 前端语言 | TypeScript ~5.7 | 前端开发语言 |
    | 前端框架 | Vue 3.5 | 响应式 UI 框架 |
    | 前端构建 | Vite 7 | 构建工具 |
    | UI 组件库 | Naive UI 2.41 | 桌面级 Vue 组件库 |
    | 样式方案 | Tailwind CSS 4 + PostCSS | 原子化 CSS 框架 |
    | 状态管理 | Pinia 4 | Vue 状态管理 |
    | 路由 | Vue Router 4 | 前端路由 |
    | 国际化 | vue-i18n 10 | 多语言支持 |
    | 图标 | Tabler Icons (Iconify) | 图标库 |
    | 动画 | GSAP 3.12 | 高性能动画引擎 |
    | 3D 皮肤预览 | skinview3d 3.4 | Minecraft 皮肤模型渲染 |
    | Markdown 渲染 | marked + dompurify | 安全渲染 Markdown 内容 |
    | 工具库 | VueUse 13 | 组合式 API 工具集 |
    | HTTP 客户端 | httpx[HTTP2] 0.28 | 异步 HTTP 请求 |
    | 微软认证 | MSAL 1.20 | Microsoft 身份验证库 |
    | 数据验证 | Pydantic 2 | 数据模型与校验 |
    | Minecraft 协议 | mcstatus 12 | 服务器状态查询 |
    | NBT 解析 | nbtlib 2 | Minecraft NBT 格式解析 |
    | 图片处理 | Pillow 10 | 图像处理库 |
    | 系统信息 | psutil 7 | 系统进程与硬件信息 |
    | 打包工具 | PyInstaller | 打包为 Windows 可执行文件 |
    | 代码规范 | Ruff + ESLint + Prettier | 代码检查与格式化 |
    | 测试框架 | pytest + vitest | 单元测试 |
:::

## 导航
[1. 环境搭建](./lanucherdev/envsetup.md)  
