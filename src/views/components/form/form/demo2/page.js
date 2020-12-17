/** 页面信息 */
const page = new (function() {
  this.title = 'sidebar 菜单栏'
  this.name = 'components-form-demo2'
  this.path = '/components/form/demo2'
  this.icon = 'develop'
})()

export const route = {
  page,
  component: () => import('./index')
}

export default page
