<template>
  <div class="empty">
    <JwChat-icon type="icon-empty" :style="sizeStyle" />
  </div>
</template>

<script>
export default {
  name: 'JwChat-empty',
  props: {
    size: {
      default: '5rem',
    }
  },
  computed: {
    sizeStyle () {
      let size = this.size
      if (`${size}`.match(/\d$/)) {
        size += 'px'
      }
      return {
        fontSize: size,
      }
    }
  },
}
</script>
<style scoped>
.empty {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}
</style>