<template>
  <div class="item">
    <el-badge :value="config.readNum" :hidden="config.readNum<1">
      <img
        v-if="config.img"
        :src="config.img"
        :style="coverSize"
        class="cover"
        @click="bindClick({ key:'cover', value: config })"
      />
    </el-badge>
    <div class="info">
      <p class="name" @click="bindClick({ key:'name', value: config })">{{config.name}}</p>
      <p class="dept" @click="bindClick({ key:'dept', value: config })">{{config.dept}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JwChat-item',
  props: {
    config: {
      type: Object,
      default: () => ({
        img: '',
        name: 'JwChat',
        dept: '',
      }),
      required: true
    },
    size: {
      default: 35
    }
  },
  computed: {

    coverSize () {
      let size = this.size
      if (`${size}`.match(/\d$/)) {
        size += 'px'
      }
      return {
        width: size,
        height: size,
      }
    }
  },
  methods: {
    bindClick (type) {
      const target = type
      this.$emit('click', target)
    }
  },
}
</script>
<style lang='scss' scoped>
.item {
  display: flex;
  align-items: center;
  position: relative;
  .cover {
    border-radius: 50%;
    margin-right: 12px;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin: 0;
      margin: 0;
      padding: 0;
      /* width: 175px; */
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: left;
      white-space: nowrap;
      font-size: 13px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &:last-child {
        font-size: 12px;
      }
    }
  }
}


</style>