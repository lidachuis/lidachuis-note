---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 大锤的Blog
  text: 碎片化记录“摸鱼”过程
  tagline: 读书没有用，不如趁早打工🐶
  image:
    src: /logo.png  ##TODO
    alt: 锤下故事
  actions:
    - text: 茂茂物语
      link: https://notes.fe-mm.com
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
    - text: 测试页
      link: /test
      theme: alt
features:
  - icon: 🤖
    title: 编程语言
    details: 学习一些常用的编程语言<small>（Shell、R、Python...）</small><br />如有异议按你的理解为主，不接受反驳
    link: https://notes.fe-mm.com//javascript/types
    linkText: 前端常用知识
  - icon: 🧰
    title: 生信工具
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: https://notes.fe-mm.com/analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 🧬
    title: 生物回顾
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: https://notes.fe-mm.com/workflow/utils/library
    linkText: 常用工具库
  - icon: 📘
    title: 学习笔记
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: https://notes.fe-mm.com/efficiency/online-tools
    linkText: 提效工具
  - icon: 🐞
    title: 杂七杂八
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: https://notes.fe-mm.com/pit/npm
    linkText: 踩坑记录
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: https://notes.fe-mm.com/mao
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
