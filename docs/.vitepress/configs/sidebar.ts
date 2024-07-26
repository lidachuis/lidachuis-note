import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/tools/': [
        {
            text: '测试',
            items: [
                { text: '生信工具', link: '/tools/A1/seqkit' },
                { text: '生信工具1', link: '/tools/A1/Nolebase' },
                { text: '生信工具2', link: '/tools/A1/Nolebase集成' },
            ]
        }
    ]
}
