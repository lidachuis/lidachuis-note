import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/tools/': [
        {
            text: '测试',
            items: [
                { text: '生信工具', link: '/tools/A1/seqkit' }
            ]
        }
    ]
}
