import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'TrafficAnalyzer',
  description: 'TrafficAnalyzer 使用手册。安装配置、功能模块和解密工作台。',
  base: process.env.MANUAL_BASE || '/',
  themeConfig: {
    siteTitle: 'TrafficAnalyzer 使用手册',
    nav: [
      { text: '使用手册', link: '/01-getting-started' },
      { text: '下载', link: 'https://github.com/RynezzZ/TrafficAnalyzer/releases' },
    ],
    sidebar: [
      { text: '第一章 开始使用', link: '/01-getting-started' },
      { text: '第二章 认识界面与菜单', link: '/02-interface-and-menus' },
      {
        text: '第三部分 功能模块',
        link: '/modules/',
        collapsed: false,
        items: [
          { text: '3.1 HTTP 流量分析', link: '/modules/http-traffic' },
          { text: '3.2 网络层分析', link: '/modules/network-analysis' },
          { text: '3.3 可视化编排', link: '/modules/flow-editor' },
          { text: '3.4 HTTP 重放', link: '/modules/http-replay' },
          { text: '3.5 威胁检测', link: '/modules/threat-detection' },
          { text: '3.6 CyberChef', link: '/modules/cyberchef' },
          { text: '3.7 流程库', link: '/modules/workflow-library' },
          { text: '3.8 反序列化分析', link: '/modules/java-deserialization' },
          { text: '3.9 Java 反编译', link: '/modules/java-decompiler' },
          { text: '3.10 正则工具', link: '/modules/regex-tool' },
          { text: '3.11 WebShell Fuzz', link: '/modules/webshell-fuzz' },
          { text: '3.12 自定义脚本', link: '/modules/custom-scripts' },
          { text: '3.13 外部服务', link: '/modules/external-services' },
        ],
      },
      { text: '第四章 解密工作台', link: '/04-decryption-workbench' },
    ],
    outline: { level: [2, 3], label: '本页目录' },
    sidebarMenuLabel: '章节',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索手册', buttonAriaLabel: '搜索手册' },
          modal: {
            noResultsText: '未找到相关内容',
            resetButtonTitle: '清空搜索',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },
})
