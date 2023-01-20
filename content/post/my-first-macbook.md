---
title: My first MacBook is Air
date: 2022-10-18
description: 买了台 MacBook Air，其实我早在 8 月底就拿到了，但因为博客在半年前 💀 后还未复活就文章也就随着一拖再拖。
tags:
  - macOS
  - MacBook
cover: /images/macbook-air-desktop.webp
---

<script setup>
import { LottieAnimation } from 'lottie-web-vue'
import Hello from '../../src/assets/hello.json'
</script>

<LottieAnimation class="rounded-lg border h-[36vh]" :animationData="Hello" :loop="true" />

买了台 MacBook Air，其实我早在 8 月底就拿到了，但因为博客在半年前 💀 后还未复活就文章也就随着一拖再拖。

![使用默认壁纸的 MacBook Air 桌面](/images/macbook-air-desktop.webp)

Apple 一直有对中国大陆和香港、澳门等地区所发售的设备进行限制。在初始化 macOS 时就需要避免选择这些地区以躲开地区锁限制[^1]，当然也可以选择在初始化完成后再自行修改地区。

```sh
sudo defaults write /Library/Preferences/.GlobalPreferences.plist Country "US"
```

---

之前在使用和 MacBook Air（13.6″）差不多大小的 Lenovo Xiaoxin Pro（13.3″），可能因为不习惯的原因 macOS 默认分辨率（1470 x 956）眼睛看着有点吃力，不过工具是为人服务的，没必要把默认设置当成圣经来遵从。我就把它改成了更大一号，与 Windows 下默认 2K 分辨率近似的 1280 x 832。

---

之前听到的 MacBook Air 在冬天甚至有些冻手的传闻有点夸张，在高性能场景下稍微有点温手，不过再也不至于会烤大腿肉了。它的无风扇设计 + Apple Silicon arm 架构的低功耗让续航基本达到了一天一充，a charge a day, keep 数码吊瓶 away。

---

新换的模具以及 MagSafe 3 我都很喜欢，之前所使用的联想小新 Pro 13‘‘ 就曾因为 Type-C 充电口插得太牢而摔在地上磕出了几个坑，这回终于摆脱这个痛苦了。磁吸设计让我在晚上已经关灯的情况下也能够比较容易地充上电，而不是打着个手电或起身开灯顺带亮瞎我的眼。

---

之前就有看到几位朋友的博客里有写对 macOS 反人类的 Caps Lock 切换语言进行魔改的文章，也正因此在选购时我选择了美式键盘而非中文（拼音）键盘，将 Caps Lock 键上的文字改成「中/英」纯粹是 Apple 自作聪明的本地化，极其失败。

![美式英文妙控键盘](/images/magic-keyboard-us.webp)
![中文（拼音）妙控键盘](/images/magic-keyboard-ch.webp)

在使用时我并没有尝试像其他一样尝试着接受或是使用 Karabiner 之类的软件进行改键。我注意到在 fn 键上有一个 🌐 的图标，我想这才应该是切换语言功能的归属。

打开「系统设置 > 键盘」将「按下🌐键时」改为「更改输入法」，并打开同一页面「输入法 > 编辑」，并关闭「使用大写锁定键切换“ABC”输入法」。

现在使用中文输入法并打开 Caps Lock 时，将使用半角符号和 ABC。

---

遭人诟病的刘海对我来说还好，唯一的缺憾就是当应用菜单与状态菜单内容过多时，就会嫌弃刘海占了一部分空间。当然这也和我使用的并非默认分辨率有很大关系，所幸遇到应用菜单最多的也就 Chrome 而已。

![当打开 Chrome 时的菜单栏，数量巨大的应用菜单和刘海让菜单栏空间所剩无几](/images/chrome-menu-bar-on-macos.webp)

---

在使用 Windows 的时候没有使用专门的剪贴板增强软件，系统自带的 <kbd>Win + V</kbd> 剪贴板历史功能对我来说就足以。而 macOS 没有在系统级实现此功能，只好找个增强软件了。macOS 上的多种多样的启动器一直让我羡慕不已，也曾尝试过 Windows 上的类似产品 Powertoys Run，但没法使用第三方扩展，不大好用也就作罢。

这回用来解决剪贴板历史需求的也是个启动器——[Raycast](https://www.raycast.com/)。一开始使用其实使用的是开源的 [Maccy](https://github.com/p0deje/Maccy)，在等 MacBook 到的过程中就收集了一个大家推荐软件的列表，所以初始化完就是体验各种软件。体验到 Raycast 时发现了它自带剪贴板历史，基本满足我的需求也就没必要下载单独一个剪贴板增强软件了，软件喜减一。

我一直奉行「less is more」的原则，能用自带的软件就用自带的，软件数量能少就少。前几天我看到我爸手机上下了高德地图，就想把它卸载了，但遭到了阻止，和他解释了半天自带地图用的就是高德地图的数据。后来听他解释才知道他用的不只是单单的地图功能，原来高德也是个巨无霸应用。不过我还是个一个功能一个产品的坚定拥护者，只要保证软件间的互联通畅，不像微信、抖音一样搞封闭生态，也就不需要巨无霸软件了。

---

> 工欲善其事，必先利其器

Apple 生态下的应用图标受到 Apple 设计规范的约束，在生态中最为开放，支持<ruby>侧载<rp>(</rp><rt>sideload</rt><rp>)</rp></ruby>的 macOS 中的图标也不尽人意，缺乏规范约束后奇行种层出不穷。我使用了 Pictogram 以及大家在 [macOSicons](https://macosicons.com) 上分享的图标对其进行了改造，姑且算是工整了。

下面列出了一些我在使用 macOS 后才开始使用或 macOS 独占的软件：

- [Raycast](https://raycast.com/)
- [GPG Suite](https://gpgtools.org/)——我用它代替了在 Windows 上使用的 [gpg4win](https://www.gpg4win.org/)
- [Fig](https://fig.io/)——基本解决了手动配置 auto-complete 的麻烦
- [NetNewsWire](https://github.com/Ranchero-Software/NetNewsWire)——RSS 订阅器
- [AppCleaner](https://freemacsoft.net/appcleaner/)——清理直接卸载时不会移除的数据
- [Pictogram](https://pictogramapp.com/)——矫正异形应用图标
- [HiddenBar](https://github.com/dwarvesf/hidden)——隐藏动态菜单中的无用图标

其实看得出来后三个应用是在解决 Apple 没有做/做好的功能。不过它们都还挺轻量，还能接受，也不知道什么时候可以不再需要它们。

---

下次买电脑应该要好几年后了，这回就这样了。

[^1]: 如无法显示中华民国国旗 🇹🇼 等
