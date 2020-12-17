import store from './store'
import routes from './routes'
import login from './views/login/index'
import dcmsMap from 'dcms-ui-map'
export default {
  module: {
    name: 'dcms-module-admin',
    code: 'admin',
    version: '1.0.2',
    description: '权限管理'
  },
  routes,
  store,
  components: [
    {
      name: 'nm-login-auto',
      component: login
    }
  ],
  callback({ Vue }) {
    dcmsMap.init(Vue, { ak: 'q96f4kWdHsVg1Y8tlclqYvrlpdnhlz5l' })
  }
}
