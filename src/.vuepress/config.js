const { description } = require('../../package')
const default_options = {

    enable: true, // enables/disables everything - control per page using frontmatter
    image: true, // regular meta image used by search engines
    twitter: true, // twitter card
    og: true, // open graph: facebook, pinterest, google+
    schema: false, // schema.org for google

    author: {
        name: 'getwidget',
        twitter: '@getwidgetdev',
    },

    // ---------------------------------------------------------------------------

    site: {
        name: 'getwidget',
        twitter: '@getwidgetdev',
    },

    description_sources: [

        'frontmatter',
        'excerpt',

        // markdown paragraph regex
        //
        /^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
        //
        // this excludes blockquotes using `(?!^>)`
        ///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,

        // html paragraph regex
        /<p(?:.*?)>(.*?)<\/p>/i,

    ],

    // ---------------------------------------------------------------------------

    // order of what gets the highest priority:
    //
    // 1. frontmatter
    // 2. content markdown image such as `![alt text](http://url)`
    // 3. content regular html img

    image_sources: [

        'frontmatter',

        /!\[.*?\]\((.*?)\)/i,        // markdown image regex
        /<img.*?src=['"](.*?)['"]/i, // html image regex

    ],

};          // contains SEO meta configuration
module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'GetWidget',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,
    theme: 'vuepress-theme-book',
    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['link', { rel: 'icon', href: 'https://ik.imagekit.io/ionicfirebaseapp/favicon_QkjfdlGz1.png' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap' }],



    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: true,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        parseHeaders: ['h2', 'h3'],
        nav: [
            { text: 'Home', link: 'https://www.getwidget.dev/', target: 'blank' },
            { text: 'Blog', link: 'https://www.getwidget.dev/blog/', target: 'blank' },
            { text: 'Github', link: 'https://github.com/ionicfirebaseapp/getwidget', target: 'blank' },
            { text: 'Marketplace', link: 'https://www.ionicfirebaseapp.com/products', target: 'blank' },
        ],
        activeHeaderLinks: true,
        sidebar: [
            {
                title: 'Introduction',
                path: '/',
                collapsable: true,
                children: [
                    '/',
                ],

            },
            {
                title: 'Getting started',
                path: '/getting-started',
                initialOpenGroupIndex: -1,
                collapsable: true,
                children: [
                    '/getting-started'

                ],
            },
            {
                title: 'GF Button',
                path: '/gf-button',
                initialOpenGroupIndex: -1,
                collapsable: true,
                children: [
                    { title: 'GF Flutter Standard Button', path: '/gf-button/standard-button' },
                    { title: 'Pills Button', path: '/gf-button/pills-button' },
                    { title: 'Square Button', path: '/gf-button/square-button' },
                    { title: 'Icon Button', path: '/gf-button/icon-button' },
                    { title: 'Social Button', path: '/gf-button/social-button' }
                ]
            },

            // {
            //     title: 'GF Badge',
            //     path: '/gf-badge',
            //     initialOpenGroupIndex: -1,
            //     collapsable: true,

            // },
            {
                title: 'GF Badge',
                initialOpenGroupIndex: -1,
                collapsable: true,
                path: '/gf-badge',
                children: [
                    '/gf-badge',
                ],
            },



            {
                title: 'GF Avatar',
                path: '/gf-avatar',
                initialOpenGroupIndex: -1,
                collapsable: true,
                children: [
                    '/gf-avatar',
                ],
            },



            {
                title: 'GF Image',
                path: '/gf-image',
                collapsable: true,
                children: [
                    '/gf-image',
                ],
            },
            {
                title: 'GF Card',
                path: '/gf-card',
                collapsable: true,
                children: [
                    '/gf-card',
                ],
            },
            {
                title: 'GF Carousel',
                path: '/gf-carousel',
                collapsable: true,
                children: [
                    '/gf-carousel',
                ],
            },
            {
                title: 'GF Tile',
                path: '/gf-tile',
                collapsable: true,
                children: [
                    '/gf-tile',
                ],
            },
            {
                title: 'GF Tab',
                path: '/gf-tab',
                collapsable: true,
                children: [
                    '/gf-tab',
                ],
            },
            {
                title: 'GF Floating Widget',
                path: '/gf-floating-widget',
                collapsable: true,
                children: [
                    '/gf-floating-widget',
                ],
            },
            {
                title: 'GF Toast',
                path: '/gf-toast',
                collapsable: true,
                children: [
                    '/gf-toast',
                ],
            },
            {
                title: 'GF Toggle',
                path: '/gf-toggle',
                collapsable: true,
                children: [
                    '/gf-toggle',
                ],
            },
            {
                title: 'GF Typography',
                path: '/gf-typography',
                collapsable: true,
                children: [
                    '/gf-typography',
                ],
            },
            {
                title: 'GF Drawer',
                path: '/gf-drawer',
                collapsable: true,
                children: [
                    '/gf-drawer',
                ],
            },
            {
                title: 'GF Accordion',
                path: '/gf-accordion',
                collapsable: true,
                children: [
                    '/gf-accordion',
                ],
            },
            {
                title: 'GF Alert',
                path: '/gf-alert',
                collapsable: true,
                children: [
                    '/gf-alert',
                ],
            },
            {
                title: 'GF Appbar',
                path: '/gf-appbar',
                collapsable: true,
                children: [
                    '/gf-appbar',
                ],
            },
            {
                title: 'GF Searchbar',
                path: '/gf-searchbar',
                collapsable: true,
                children: [
                    '/gf-searchbar',
                ],
            },
            {
                title: 'GF Rating',
                path: '/gf-rating',
                collapsable: true,
                children: [
                    '/gf-rating',
                ],
            },
            {
                title: 'GF Loader',
                path: '/gf-loader',
                collapsable: true,
                children: [
                    '/gf-loader',
                ],
            },
            {
                title: 'GF Progress Bar',
                path: '/gf-progress-bar',
                collapsable: true,
                children: [
                    '/gf-progress-bar',
                ],
            },
            {
                title: 'GF Shimmer',
                path: '/gf-shimmer',
                collapsable: true,
                children: [
                    '/gf-shimmer',
                ],
            },
            {
                title: 'Changelog',
                path: '/changelog',
                collapsable: true,
                children: [
                    '/changelog',
                ],
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
        '@vuepress/plugin-medium-zoom',
        ['vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        'img-lazy',
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-165669152-1'
            }
        ],
        ['autometa', default_options]
    ],
}
