
module.exports = ctx => ({
  base: '/jwchatdoc/', // 项目根路径
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'JwChat',
      description: 'languages is all',
    },
  },
  head: [
    ['meta', { name: 'keywords', content: 'vue,im,IM,聊天组件,vue组件' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'descriptione', content: '基于vue开发的仿QQ聊天组件' }],
  ],
  themeConfig: {
    // 导航栏 Logo
    logo: null,
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        // editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/component/': getComponentSidebar(),
          '/guide/': getGuideSidebar('指南'),
          // '/updateTip/': getGuideSidebar('指南'),
        },
      }
    }
  },
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ],
   plugins: [
     ['@vuepress/back-to-top', true],
     ['@vuepress/pwa', {
       serviceWorker: true,
       updatePopup: true
     }],
     ['@vuepress/medium-zoom', true],
     ['@vuepress/google-analytics', {
       ga: 'UA-128189152-1'
     }],
     ['container', {
       type: 'vue',
       before: '<pre class="vue-container"><code>',
       after: '</code></pre>'
     }],
     ['container', {
       type: 'upgrade',
       before: info => `<UpgradePath title="${info}">`,
       after: '</UpgradePath>'
     }],
     ['flowchart']
   ],
   configureWebpack: {
    resolve: {
      alias: {
        '@dome': './public/image'
      }
    }
  }
})

function getComponentSidebar () {
  return [
    // '',
    'chat',
    'chatIndex',
    'rightbox',
    'talk',
    'user',
    'empty',
  ]
}

function getGuideSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'install',
        'start',
      ]
    }
  ]
}


