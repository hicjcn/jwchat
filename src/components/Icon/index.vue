<template>
  <i :class="['iconfont', type ]"></i>
</template>

<script>
export default {
  name: 'JwChat-icon',
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import './fonts/iconfont.css';
.iconfont{
  cursor: pointer;
}
</style>