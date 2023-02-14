---
title: Git 下的文件名大小写变更
date: 2023-02-06 15:30:00+08
description: |
  在不区分文件名大小写的文件系统中该如何才能让 Git 正常察觉到变更呢？网上掺杂着真假难辨的解决方案，修改 Git 配置还是使用自带的 git mv 命令？git-detect-case-change 就是兼具方便和正确的最优解。
tags:
  - Git
  - macOS
---

在 macOS 上想修改 Git 仓库中文件的大小写，却发现在执行 `git add .` 时一切虚无，什么也没发生。

这是因为 macOS 使用的 APFS 和 Windows 使用的 NTFS 都是不区分为文件名大小写的文件系统，也就是不能同时存在文件 A 和文件 a，因为它们被认为是同一个文件。

Git 就是根据这一点来处理文件名大小写的，所以如果你在 macOS 上将文件 A 重命名为 a，Git 不会发现它们发生了改变。

那该怎么解决这一需求呢？应该不止我一个人会把大小写搞错吧。那网上应该有许多教程才是。

## 手动配置 `core.ignoreCase`

在检索解决方案时，发现了许多教程无论是中文还是英文都提到一种解决方案，即覆盖默认情况下的自动行为，手动配置 `core.ignoreCase` 值，然而这种做法是彻头彻尾错误的。

```sh
git config core.ignoreCase false
```

这会导致文件 a 的历史记录丢失文件 A 时期的记录，同时原文件仍会存在于仓库中。

```sh
> git ls-files
A
a
```

而且修改文件时会产生两条除文件名外完全相同的记录。

```sh
> git status
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   A
        modified:   a
```

## 使用 `git mv` 迁移

Git 其实是有提供用于迁移文件的命令的。

```sh
git mv A a
```

这个命令会保留所有历史记录，重命名文件也会有相应的记录。但要迁移的文件很多那不得活活累死？

## 清除缓存重新添加

再翻翻发现了又一解决方案，它通过清除缓存中的文件，并重新添加来更新文件夹结构。缓存里没东西了，自然就从当前文件夹中同步过去了，自然就解决了大小写问题。

```sh
git rm -r --cached .
git add --all .
```

它会批量处理所有重命名，但产生的记录会是删除旧名称的文件并创建新名称的文件，查看更改前后的差异就没有那么方便。

## `git-detect-case-change`

但我想要像 `git mv` 一样完美地保留所有历史记录又不想一个个手动迁移该怎么办？

果不其然不会只有我有这种需求。Hiroki Osame 写了脚本来自动检测并处理大小写变更，那么我们直接拿来用就好了。

```sh
pnpm i -g git-detect-case-change
git detect-case-change
```

```sh
A -> a
```
