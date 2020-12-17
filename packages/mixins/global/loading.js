export default {
  methods: {
    _openLoading(msg) {
      window.$loading = this.$loading({
        // *这里设置他的class名称,这里最重要
        customClass: 'create-isLoading',  
        //lock的修改符--默认是false
        lock: true,
        //显示在加载图标下方的加载文案
        text: msg || '正在努力加载...',
        //遮罩层颜色
        background: 'rgba(0, 0, 0, 0.6)',
        //自定义加载图标类名
        spinner: 'el-icon-loading'
        //loadin覆盖的dom元素节点
        //target: document.querySelector('#table')
      })
    },
    _closeLoading() {
      window.$loading.close()
    }
  }
}
