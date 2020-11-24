export default [
  {
    name: 'title',
    desc: '标题，只有设置header属性为true时才有',
    type: 'string',
    opt: '-',
    def: '-'
  },
  {
    name: 'icon',
    desc: '头部左侧的图标，只有设置header属性为true时才有',
    type: 'string',
    opt: '-',
    def: '-'
  },
  {
    name: 'header',
    desc: '是否显示头部',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'footer',
    desc: '是否显示底部',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'footer-align',
    desc: '底部对齐方式',
    type: 'string',
    opt: 'left/center/right',
    def: 'right'
  },
  {
    name: 'height',
    desc: '高度，与css中的height属性相同，如：100%、100px，设置了固定高度后如果内容超出会有滚动条',
    type: 'string',
    opt: '-',
    def: 'false'
  },
  {
    name: 'border',
    desc: '是否显示顶部边框',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'border-color',
    desc: '顶部边框的颜色',
    type: 'string',
    opt: 'success/primary/info/warning/danger/具体色值，如：#000',
    def: 'success'
  },
  {
    name: 'title-bold',
    desc: '标题是否加粗',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'horizontal',
    desc: '是否显示水平滚动条',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'loading',
    desc: '是否显示loading动画',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'page',
    desc: '是否是页模式，如果为true，则盒子的高度会填充满父级',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'fullscreen',
    desc: '是否显示全屏按钮',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'collapse',
    desc: '是否显示折叠按钮',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'custom-collapse-event',
    desc: '自定义折叠事件，改参数会覆盖默认的折叠操作，当需要折叠部分内容时，可使用该参数',
    type: 'Function',
    opt: '-',
    def: '-'
  },
  {
    name: 'no-scrollbar',
    desc: '不显示滚动条',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'no-padding',
    desc: '没有内边距',
    type: 'boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'refresh',
    desc: '是否显示刷新按钮',
    type: 'boolean',
    opt: '-',
    def: 'false'
  }
]
