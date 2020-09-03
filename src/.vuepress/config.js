const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'GetWidget documentation',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['link', {rel: 'icon', href: './favicon.png'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {text: 'Home', link: 'https://www.getwidget.dev/', target: 'blank'},
            {text: 'Blog', link: 'https://www.getwidget.dev/blog/', target: 'blank'},
            {text: 'Github', link: 'https://github.com/ionicfirebaseapp/getwidget', target: 'blank'},
            {text: 'Marketplace', link: 'https://www.ionicfirebaseapp.com/products', target: 'blank'},
        ],
        activeHeaderLinks: false,
        sidebar: [
            {
                title: 'Introduction',
                path: '/',
                collapsable: false
            },
            {
                title: 'Getting started',
                path: '/getting-started',
                initialOpenGroupIndex: -1,
                collapsable: false
            },
            {
                title: 'GF Button',
                path: '/gf-button',
                initialOpenGroupIndex: -1,
                collapsable: true,
                children: [
                    {title: 'GF Flutter Standard Button', path: '/gf-button/standard-button'},
                    {title: 'Pills Button', path: '/gf-button/pills-button'},
                    {title: 'Square Button', path: '/gf-button/square-button'},
                    {title: 'Icon Button', path: '/gf-button/icon-button'},
                    {title: 'Social Button', path: '/gf-button/social-button'}
                ]
            },
            {
                title: 'GF Badge',
                path: '/gf-badge',
                // sidebarDepth: 2,
                collapsable: true
            },
            {
                title: 'GF Avatar',
                path: '/gf-avatar',
                collapsable: true
            },
            {
                title: 'GF Image',
                path: '/gf-image',
                collapsable: true
            },
            {
                title: 'GF Card',
                path: '/gf-card',
                collapsable: true
            },
            {
                title: 'GF Carousel',
                path: '/gf-carousel',
                collapsable: true
            },
            {
                title: 'GF Tile',
                path: '/gf-tile',
                collapsable: true
            },
            {
                title: 'GF Tab',
                path: '/gf-tab',
                collapsable: true
            },
            {
                title: 'GF Floating Widget',
                path: '/gf-floating-widget',
                collapsable: true
            },
            {
                title: 'GF Toast',
                path: '/gf-toast',
                collapsable: true
            },
            {
                title: 'GF Toggle',
                path: '/gf-toggle',
                collapsable: true
            },
            {
                title: 'GF Typography',
                path: '/gf-typography',
                collapsable: true
            },
            {
                title: 'GF Drawer',
                path: '/gf-drawer',
                collapsable: true
            },
            {
                title: 'GF Accordion',
                path: '/gf-accordion',
                collapsable: true
            },
            {
                title: 'GF Alert',
                path: '/gf-alert/',
                collapsable: true
            },
            {
                title: 'GF Appbar',
                path: '/gf-appbar',
                collapsable: true
            },
            {
                title: 'GF Searchbar',
                path: '/gf-searchbar',
                collapsable: true
            },
            {
                title: 'GF Rating',
                path: '/gf-rating',
                collapsable: true
            },
            {
                title: 'GF Loader',
                path: '/gf-loader',
                collapsable: true
            },
            {
                title: 'GF Progress Bar',
                path: '/gf-progress-bar',
                collapsable: true
            },
            {
                title: 'GF Shimmer',
                path: '/gf-shimmer',
                collapsable: true
            },
            {
                title: 'Changelog',
                path: '/changelog',
                collapsable: true
            },
            {
                title: 'Flutter Market',
                path: 'https://www.ionicfirebaseapp.com/products',
                target: 'blank',
                collapsable: false
            },
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom'
    ],
}
