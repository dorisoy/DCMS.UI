/** 页面信息 */
const page = new (function() {
  this.title = '列表页对话框'
  this.name = 'components-list-dialog-index'
  this.path = '/components/list-dialog/index'
  this.icon = 'card'
  this.group = 2
  this.sort = 3
})()

export const route = {
  page,
  component: () => import('./index')
}

export default page
