import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/tools/': [
        text: 'JavaScript 基础知识',
        collapsed: false,
        items: [
          { text: 'ceshi', link: '/tools/A1/seqkit' }
        ]
    ]
}
