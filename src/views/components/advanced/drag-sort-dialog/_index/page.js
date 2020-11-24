/** 页面信息 */
const page = new (function() {
  this.title = '拖动排序对话框'
  this.name = 'components-drag-sort-dialog-index'
  this.path = '/components/drag-sort-dialog/index'
  this.icon = 'list'
  this.group = 2
  this.sort = 5
})()

export const route = {
  page,
  component: () => import('./index')
}

export default page
