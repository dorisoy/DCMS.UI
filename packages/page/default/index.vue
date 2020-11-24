<template>
  <nm-container>
    <nm-box page>
      <div class="nm-default">
        
      </div>
    </nm-box>
  </nm-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('app/config', { title: s => s.system.title })
  }
}
</script>
<style lang="scss">
.nm-default {
  margin: 100px auto;
  width: 600px;
  height: 400px;
  color: #979797;
  text-align: center;
}
</style>
