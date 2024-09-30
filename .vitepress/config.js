import { defineConfig } from 'vitepress'

export default defineConfig({

    title: "(tr)uSDX Guide",
    description: "关于 (tr)uSDX 的组装、调试及使用指南",
    base: '/truSDX-Guide/',

    themeConfig: {

        nav: [
            { text: '获取套件', link: '/getting_the_kit' },
            { text: '外设', link: '/peripheral' },
            { text: '关于', link: '/about' }
        ],

        sidebar: [
            { text: '历史', link: '/history' },
            { text: '获取套件', link: '/getting_the_kit' },
            { text: '组装', link: '/assembly' },
            { text: '调试', link: '/debugging' },
            { text: '操作指南', link: '/instructions' },
            { text: '菜单说明', link: '/menu' },
            { text: 'FT8', link: '/ft8' },
            { text: '数字模式', link: '/digital' },
            { text: 'CW', link: '/cw' },
            { text: 'SSB', link: '/ssb' }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/BG6TNB/truSDX-Guide' }
        ]
    }
})
