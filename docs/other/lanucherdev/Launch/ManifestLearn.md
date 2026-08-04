---
title: 版本清单
createTime: 2026/08/04 23:00:00
permalink: /other/lanucherdev/Launch/ManifestLearn
---
# 了解 Minecraft 版本清单文件

>### 本教程不提供完整源码，仅提供思路与关键片段
>详细原因: [README](/other/lanucherdev/launcher-development/#致AI)

## 清单文件结构
较新的版本清单文件结构大致如下(仅列出关键部分)
```json5
{
  "arguments": {
    "game": [
      "--username",
      "${auth_player_name}",
      "--version",
      "${version_name}",
      "--gameDir",
      "${game_directory}",
      "--assetsDir",
      "${assets_root}",
      "--assetIndex",
      "${assets_index_name}",
      "--uuid",
      "${auth_uuid}",
      "--accessToken",
      "${auth_access_token}",
      "--clientId",
      "${clientid}",
      "--xuid",
      "${auth_xuid}",
      "--versionType",
      "${version_type}"
      // ...
    ],
    "jvm": [
      "--sun-misc-unsafe-memory-access=allow",
      "--enable-native-access=ALL-UNNAMED",
      "-Djava.library.path=${natives_directory}/java",
      "-Djna.tmpdir=${natives_directory}/jna",
      "-Dorg.lwjgl.system.SharedLibraryExtractPath=${natives_directory}/lwjgl",
      "-Dio.netty.native.workdir=${natives_directory}/netty",
      "-Dminecraft.launcher.brand=${launcher_name}",
      "-Dminecraft.launcher.version=${launcher_version}",
      "-cp",
      "${classpath}"
      // ...
    ]
  },
  "assetIndex": {
    "id": "32",
    "sha1": "49da57a9512de46382d2fe4b68af047fea7a16f9",
    "size": 586366,
    "totalSize": 477011740,
    "url": "https://piston-meta.mojang.com/v1/packages/49da57a9512de46382d2fe4b68af047fea7a16f9/32.json"
  },
  "downloads": {
    "client": {
      "sha1": "2dc72797acbc1b63fc16a11c4ac393605f453754",
      "size": 39193383,
      "url": "https://piston-data.mojang.com/v1/objects/2dc72797acbc1b63fc16a11c4ac393605f453754/client.jar"
    }
  },
  "id": "26.2",
  "javaVersion": {
    "component": "java-runtime-epsilon",
    "majorVersion": 25
  },
  "libraries": [
    {
      "downloads": {
        "artifact": {
          "path": "at/yawk/lz4/lz4-java/1.10.1/lz4-java-1.10.1.jar",
          "sha1": "f541d7f910fe3d76f38f799c507c48cc81b12ecb",
          "size": 910232,
          "url": "https://libraries.minecraft.net/at/yawk/lz4/lz4-java/1.10.1/lz4-java-1.10.1.jar"
        }
      },
      "name": "at.yawk.lz4:lz4-java:1.10.1"
    }
    // ...
  ],
  "mainClass": "net.minecraft.client.main.Main",
  "releaseTime": "2026-06-16T12:03:33+00:00",
  "time": "2026-06-16T12:03:33+00:00",
  "type": "release"
}
```
以上就是我们需要重点关注的部分  
~~别说什么 JSON 不能写注释，我这是 JSON5~~

### 理解清单 JSON 键值
>只需要使用以下键值，未列出来表示不使用
- `"arguments"` - 游戏启动所需的 JVM 参数相关
  - `"game"` - 游戏定义的参数
  - `"jvm"` - JVM 虚拟机需要的参数
- `"assetIndex"` - 游戏资源引索相关
  - `"id"` - 资源引索值
  - `"sha1"` - 文件 SHA-1 HASH 值
- `"downloads"` - 游戏本体 JAR 文件相关
  - `"client"` - 游戏客户端
    - `"sha1"` - 游戏客户端本体 JAR 文件 SHA-1 HASH 值
- `"id"` - 版本名称(大多数启动器都会修改它)
- `"javaVersion"` - 游戏需求的 JAVA 版本相关
  - `"majorVersion"` - 游戏需求的 JAVA 版本(可以高一点，小于该版本的可能无法启动)
- `"libraries"` - 游戏依赖的 Maven 库
  - `[{"name"}]` - Maven 库名(这包含了库存储的位置)
  
注意，Maven 库的 `"sha1"` 键值位置不固定，它可能出现在如下位置：
```json
{
  "libraries": [
    {
      "downloads": {
        "artifact": {
          "sha1": "f541d7f910fe3d76f38f799c507c48cc81b12ecb"
        }
      }
    }
  ]
}
```

```json
{
  "libraries": [
    {
      "sha1": "ada2141c0cc52ee8f5c48cd5fa4ce0e794f22236"
    }
  ]
}
```

另外，Maven 库的 `"url"` 键值通常不直接使用，但可用于辅助判断该从哪里下载它