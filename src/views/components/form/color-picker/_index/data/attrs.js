export default [
  {
    name: 'value / v-model',
    desc: '绑定值',
    type: 'String',
    opt: '-',
    def: '-'
  },
  {
    name: 'clearable',
    desc: '可清空的',
    type: 'Boolean',
    opt: '-',
    def: 'true'
  },
  {
    name: 'size',
    desc: '尺寸，默认或者为空时，按照皮肤的字号设置',
    type: 'String',
    opt: 'medium / small / mini',
    def: '-'
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'Boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'show-alpha',
    desc: '是否支持透明度选择',
    type: 'Boolean',
    opt: '-',
    def: 'false'
  },
  {
    name: 'color-format',
    desc: '写入 v-model 的颜色的格式',
    type: 'Number',
    opt: 'hsl / hsv / hex / rgb',
    def: 'hex（show-alpha 为 false）/ rgb（show-alpha 为 true）'
  },
  {
    name: 'popperClass',
    desc: 'ColorPicker 下拉框的类名',
    type: 'String',
    opt: '-',
    def: '-'
  },
  {
    name: 'predefine',
    desc: '预定义颜色',
    type: 'Array',
    opt: '-',
    def: '-'
  }
]
