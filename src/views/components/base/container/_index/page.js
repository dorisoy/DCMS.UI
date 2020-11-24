/** 页面信息 */
const page = new (function() {
  this.title = '容器'
  this.name = 'components-container-index'
  this.path = '/components/container/index'
  this.icon = 'list'
  this.group = 0
  this.sort = 0
})()

export const route = {
  page,
  component: () => import('./index')
}

export default page
