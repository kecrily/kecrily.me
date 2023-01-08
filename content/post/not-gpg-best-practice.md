---
title: 不是 GPG 最佳实践
date: 2023-01-02
description: 因为 GitHub 没能识别出我的新子密钥，于是乎就按最新想法重新鼓捣了一遍 GPG 密钥。
tags:
  - GPG
---

前一段时间发现自己的 GPG 实践安全性不够，主密钥被我拿来用作 Git 签名了。发现后我就立马变更了主密钥的用途为仅认证，并新增了一个专门用于签名的子密钥。

但更新 GitHub GPG 公钥后，它一直识别不出我新创建的子密钥，而其他 Git 托管平台都能正常识别，不出意外应该是平台的问题。发了个工单向 GitHub 报告，十几天了没能解决，他们有尝试提供一些方案，但很遗憾一一尝试后都不行。也有转交给开发者，但暂时石沉大海。

等待期间我的 commit 都变成 `unverified` 了，这让我在参与开源项目时很不方便，我没法证明我是我自己。

---

索性就从新生成了密钥。下面大致列了一下步骤，不会很详细。

因为需要自选算法，所以哪怕不是专家也得使用 `--expert` 专家模式。

```sh
gpg --expert --full-gen-key
```

生成好密钥后就需要添加子密钥，有三个子密钥，分别对应着三个用途 **S**ign、**A**uthentication、**E**ncrypt。

```sh
gpg --expert --edit-key <uid>
```

现在备份私钥时默认主密钥和子密钥一起，所以一次就好。

```sh
gpg --armour --export-secret-keys <uid>
```

把公钥往 [Keys OpenPGP](https://keys.openpgp.org/) 上传一份，本地也不用备份。

```sh
~/.gnupg/dirmngr.conf
keyserver hkp://keys.openpgp.org
```

好了，如果再没有增删改过子密钥就只要恢复密钥备份然后再从 keyserver 拉取最新版本的公钥就好了。
