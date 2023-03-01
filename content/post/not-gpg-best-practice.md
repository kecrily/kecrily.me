---
title: 不是 GPG 最佳实践
date: 2023-01-02 23:19:00+08
description: |
  因为 GitHub 没能识别出我新添加的子密钥，让我在开源活动中痛失姓名，别人无法确认我是不是我。于是乎只能被迫也顺便按最新想法和其他人分享的最佳实践重新鼓捣了一遍 PGP 密钥。
tags:
  - Git
  - GunPG
  - OpenPGP
---

前一段时间发现自己的 GPG 实践安全性不够，主密钥被我拿来用作 Git 签名了。发现后我就立马变更了主密钥的用途为仅认证，并新增了一个专门用于签名的子密钥。

但在 GitHub 上更新 PGP 公钥后，它一直识别不出我新创建的子密钥，而其他 Git 托管平台都能正常识别，不出意外应该是平台的问题。发了个工单向 GitHub 报告，十几天了没能解决，他们有尝试提供一些方案，但很遗憾一一尝试后都不行。~~也有转交给开发者，但暂时石沉大海~~。GitHub 在工单关闭后的二十三天后给出了解决方案，确实可以解决我的问题，但我已经改用了新的密钥。

<details>
GitHub (GitHub Support)
Feb 24, 2023, 10:20 PM UTC

Hey Percy,

I just wanted to touch bases with some follow-up information regarding your previous inquiry in `1905199`, as I've now encountered this specific problem a few more times.

About the error output:

```sh
BAD subkeys:
1
AC1F08ADDE171338 error: openpgp: invalid data: subkey signature invalid: openpgp: invalid data: signing subkey is missing cross-signature
```

This can typically be addressed by visiting [here](https://www.gnupg.org/faq/subkey-cross-certify.html) and following the instructions.

You can also sign a test commit locally and check for this specific problem:

```sh
$ git verify-commit 2cd603b73ae49588e3add24a2df57e71597dd2e1
gpg: Signature made Wed Feb  8 15:40:38 2023 PST
gpg:                using RSA key 7B408B746F5D76F35ECA013D3EFA9A554F4A6789
gpg: WARNING: signing subkey 3EFA9A554F4A6789 is not cross-certified
gpg: please see https://gnupg.org/faq/subkey-cross-certify.html for more information
gpg: Can't check signature: General error
```

Once the key has been cross-certified and exported/uploaded again, our system should recognize it.

I'm truly sorry that I wasn't able to better address your issue the first time around, but I hope this information may prove helpful to you in the future. 🙇🏻‍♂️

Best regards,

Allan H

GitHub Support
</details>

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

把公钥往 [keys.openpgp.org](https://keys.openpgp.org/) 上传一份，本地也不用备份。

```ini
~/.gnupg/dirmngr.conf
keyserver hkp://keys.openpgp.org
```

好了，如果再没有增删改过子密钥就只要恢复密钥备份然后再从 keyserver 拉取最新版本的公钥就好了。

我的 PGP 密钥：[`6492 E006 8606 4BD8 561B ADBD A254 7DFF 0237 D6EC`](https://keys.openpgp.org/vks/v1/by-fingerprint/6492E00686064BD8561BADBDA2547DFF0237D6EC)
