export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ADAS官网 - 上海数喆数据科技有限公司官网 - Athena Data Analytics and Services',
    htmlAttrs: {
      lang: 'zh'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0' },
      { name: 'renderer', content: 'webkit' },
      { name: 'force-rendering', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { name: 'keyword', content: 'ADAS,数喆,数喆数据,谭继军,上海数喆数据科技有限公司,Athena Data Analytics and Services' },
      { hid: 'description', name: 'description', content: 'ADAS是小微企业线下数据收集和线上数据集成专家，致力于打造基于“商圈”的中国小微企业大数据库， 为小微金融服务。如果说信息不对称是小微金融领域内的大山，那么ADAS的“数据愚公精神”及其切片化、 专业化、规模化的小微金融信息服务是跨越这座大山的最佳选择。ADAS由大数据、数理经济、小微金融领域内的著名学者甘犁教授、田国强教授、艾春荣教授和谭继军教授领衔， 通过其强大的线下数据采集技术体系、线上海量数据集成技术体系和资深专业的数据库建设研究团队，首创拉网 式线下调查、互联网数据集成、政务数据合作的数据O2O模式，打造中国小微企业大数据库，覆盖全国千万级别 的小微企业和个体工商户。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
