<template>
  <div class="item">
    <img v-if="cover" :src="cover" :style="coverSize" class="cover" @click="bindClick('cover')" />
    <div class="info">
      <p class="name" @click="bindClick('name')">{{name}}</p>
      <p class="dept" @click="bindClick('dept')">{{dept}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JwChat-item',
  props: {
    cover: String,
    name: {
      type: String,
      default: 'JwChat',
      required: true
    },
    dept: String,
    size: {
      String: String,
      default: '35px'
    }
  },
  computed: {
    coverSize () {
      let size = this.size
      if (size.match(/\d$/)) {
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
<style scoped>
.item {
  display: flex;
  align-items: center;
  position: relative;
}
.item .cover {
  border-radius: 50%;
  margin-right: 12px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.item .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item .info p {
  margin: 0;
  margin: 0;
  padding: 0;
  width: 175px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
  font-size: 13px;
  cursor: pointer;
}

.item .info p:hover {
  opacity: 0.8;
}
.item .info p:last-child {
  font-size: 12px;
}
</style>