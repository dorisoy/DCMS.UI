<template>
  <div>
    collapse:{{collapse}}
    <br>
    <button @click="collapseSet(true)">关闭左侧</button>
    <button @click="collapseSet(false)">打开左侧</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  //name: 'MapState',
  computed: {
    ...mapState('app/skins/pretty/sidebar', ['collapse']),
  },
  methods: {
    //将store.mutations映射到methods
    ...mapMutations('app/skins/pretty/sidebar', ['collapseSet']),
  },
}
</script>