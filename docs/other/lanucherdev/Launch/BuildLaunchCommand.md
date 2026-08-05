---
title: 构建 Minecraft 启动指令
createTime: 2026/08/04 23:00:00
permalink: /other/lanucherdev/Launch/BuildLaunchCommand
---

::: info
本教程不提供完整源码，仅提供思路与关键片段
详细原因: [点击此处](/other/lanucherdev/introduction/#致ai)
:::

通过上一章节可以了解清单文件的大致结构和键值作用，本章注重讲如何拼接启动参数

## 拼接参数
拼接参数分为这几步：
1. 拼接 JVM 虚拟机需要的参数
2. 拼接游戏定义的参数
3. 拼接 Classpath
4. 替换占位符

### 流程图
> 我写的可能会有些晦涩难懂？
  
首先是拼接 JVM 虚拟机需要的参数  
```mermaid
graph TD
    A[创建一个 List 变量 jvm_args] --> B[遍历 'jvm' 中的每个元素]
    B --> C{当前元素是否为 String 类型?}
    C --> |是| D[去除其中的空格并添加到 jvm_args 末尾]
    D --> E[继续下一个元素]
    C --> |否| E
    E --> F{遍历是否完成?}
    F --> |否| B
    F --> |是| G[结束]
```
其次是拼接游戏定义的参数
```mermaid
graph TD
    A[遍历 'game' 的每个元素] --> B{当前元素是否为 String?}
    B --> |是| C[去除其中的空格并添加到 jvm_args 末尾]
    C --> D[继续下一个元素]
    B --> |否| D
    D --> E{是否遍历完成?}
    E --> |否| A
    E --> |是| F[结束]
```
然后是拼接 Classpath
```mermaid
graph TD
    A[创建一个 List 变量 class_paths] --> B[遍历 'libraries' 中的每个元素]
    B --> C[将 'name' 值转换为路径]
    C --> D{路径是否已经在 class_paths?}
    D --> |否| E[添加到 class_paths 末尾]
    E --> F[继续下一个元素]
    D --> |是| F
    F --> G{遍历是否完成?}
    G --> |否| B
    G --> |是| H[结束]
```
>现在需要将 List 拼接成一个 String
  
首先是将 jvm_args 拼接成成一个 String
```mermaid
graph TD
    A[创建一个 String 变量 jvm_arg] --> B[遍历 jvm_args 中的每个元素]
    B --> C[在 jvm_arg 末尾添加一个空格]
    C --> D[取出元素并添加至 jvm_arg 末尾]
    D --> E[继续下一个元素]
    E --> F{遍历是否完成?}
    F --> |否| B
    F --> |是| G[结束]
```
其次是将 class_paths 拼接成成一个 String
```mermaid
graph TD
    A[创建一个 String 变量 class_path] --> B[遍历 class_paths 中的每个元素]
    B --> C[在 class_path 末尾添加一个分隔符]
    C --> D[取出元素并添加至 class_path 末尾]
    D --> E[继续下一个元素]
    E --> F{遍历是否完成?}
    F --> |否| B
    F --> |是| G[结束]
```
> Classpath 的分隔符取决于操作系统  
> Windows 操作系统为 `;`  
> 其他操作系统为 `:`

### Python 代码
> 流程图太过晦涩难懂？
