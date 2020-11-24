/** 页面信息 */
const page = new (function() {
  this.title = '图标选择器'
  this.name = 'components-icon-picker-index'
  this.path = '/components/icon-picker/index'
  this.icon = 'list'
  this.group = 1
  this.sort = 6
})()

export const route = {
  page,
  component: () => import('./index')
}

export default page
