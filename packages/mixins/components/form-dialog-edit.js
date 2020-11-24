import dialog from './dialog'
export default {
  mixins: [dialog],
  data() {
    return {
      // 存储表单数据
      model_: {},
      form: {
        icon: 'edit',
        model: {
          id: ''
        },
        customResetFunction: this.onReset,
        loading: false
      },
      on: {
        success: this.onSuccess,
        open: this.onOpen
      }
    }
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    /** 是否总是刷新数据，即使相同id */
    allRefresh: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    async edit() {
      this.form.loading = true
      if (this.editAction) {
        this.form.model = await this.editAction()
      } else {
        this.form.model = await this.api.edit(this.id)
      }
      this.model_ = this.$_.merge({}, this.form.model)
      this.form.loading = false

      // 刷新数据后的回调方法
      if (this.afterRefresh) {
        this.afterRefresh()
      }
    },
    onReset() {
      this.form.model = this.$_.merge({}, this.model_)
    },
    onSuccess(data) {
      this.$emit('success', this.form.model, data)
    },
    onOpen() {
      if (!this.id) {
        this._warning('请选择要编辑的数据~')
        this.$refs.form.reset()
        return
      }

      if (this.allRefresh || this.id !== this.form.model.id) {
        this.edit()
      }
    }
  }
}
