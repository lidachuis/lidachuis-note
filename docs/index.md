---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 大锤的Blog
  text: 碎片化记录“摸鱼”过程
  tagline: 读书没有用，不如趁早打工🐶
  image:
    src: /logo.png  ##TODO:change logo
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
    title: 生物信息软件
    details: 整理一些生物信息软件，了解安装or使用方法<small>（常用工具/简单技巧等）</small><br />软件使用过程中有遇到的err情况，也会记录下来。
    link: https://notes.fe-mm.com/analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 🧬
    title: 生物回顾
    details: 生物信息学常常伴随这生物知识，记录生物学内容<small>（名词解释、概念等）</small><br />主要用来弥补自己生物学上面的欠缺。
    link: https://notes.fe-mm.com/workflow/utils/library
    linkText: 常用工具库
  - icon: 📘
    title: 学习笔记
    details: 工欲善其事，必先利其器<br />记录学习过程，方便后期回顾。
    link: https://notes.fe-mm.com/efficiency/online-tools
    linkText: 提效工具
  - icon: 🐞
    title: 杂七杂八
    details: 纯纯的个人杂货铺<br />简简单单的一些随记。
    link: https://notes.fe-mm.com/pit/npm
    linkText: 踩坑记录
  - icon: 💯
    title: 先要做，再做好。
    details: '<small class="bottom-small">我最大的梦想就是躺着不动</small>'
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
