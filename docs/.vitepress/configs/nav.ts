import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav/' },
  { text: '茂茂主页', link: 'https://fe-mm.com' },
  {
    text: '茂茂物语',
    link: 'https://notes.fe-mm.com',
  },
  { text: 'mmPlayer', link: 'https://netease-music.fe-mm.com' },
  {
    text: '油猴脚本',
    link: 'https://github.com/maomao1996/tampermonkey-scripts',
  },
  {text: '测试',
  items: [
    {
      text: '软件推荐与配置',
      items:[
        {text: 'seqkit', link: '/tools/A1/seqkit'},
        { text: '生信工具1', link: '/tools/A1/Nolebase' },
        { text: '生信工具2', link: '/tools/A1/Nolebase集成' }
      ]
    }
  ],
  activeMatch: '^/tools'
  }
]
