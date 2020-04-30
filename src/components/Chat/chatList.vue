<template>
  <div class="body">
    <div :style="pageConfig.width|setWidth">
      <div class="web__main" ref="main">
        <div
          class="web__main-item"
          v-for="(item,index) in list"
          :key="index"
          :class="{'web__main-item--mine':item.mine}"
        >
          <div class="web__main-user">
            <img :src="item.img" />
            <cite>
              {{item.name}}
              <i>{{item.date}}</i>
            </cite>
          </div>
          <div class="web__main-text">
            <div class="web__main-arrow"></div>
            <span v-html="handleDetail(item.text.text)" ref="content"></span>
            <ul class="web__main-list" v-if="item.text.list">
              <li
                @click="handleItemMsg(citem)"
                v-for="(citem,cindex) in item.text.list"
                :key="cindex"
              >{{citem.text}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="show"
      width="40%"
      append-to-body
      :before-close="handleClose"
      class="web__dialog"
    >
      <img :src="imgSrc" v-if="imgSrc" style="width:100%;object-fit: cover;" />
      <video
        :src="videoSrc"
        v-if="videoSrc"
        style="width:100%;object-fit: cover;"
        controls="controls"
      ></video>
      <audio
        :src="audioSrc"
        v-if="audioSrc"
        style="width:100%;object-fit: cover;"
        controls="controls"
      ></audio>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'JwChat_list',
  filters: {
    setWidth (value) {
      let width = value
      if (`${value}`.match(/^\d+$/)) {
        width = value + 'px'
      }
      return width
    }
  },
  props: {
    pageConfig: {
      type: Object,
      default: () => ({
        width: "100vw"
      })
    },
    list: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      load: false,
      show: false,
      imgSrc: '',
      videoSrc: '',
      audioSrc: ''
    }
  },
  watch: {
    load (newval) {
      if (newval) {
        this.$emit('load', true)
        this.$nextTick(() => {
          this.load = false
        })
      }
    }
  },
  methods: {
    //处理排版
    handleDetail (html = '') {
      // console.log(html)
      let result = html;
      setTimeout(() => {
        const list = this.$refs.content;
        list.forEach(ele => {
          for (let i = 0; i < ele.children.length; i++) {
            const child = ele.children[i];
            if (child.getAttribute('data-flag') != 0) {
              child.setAttribute('data-flag', 0)
              child.onclick = () => {
                this.handleEvent(child.dataset)
              };
              if (child.tagName === 'IMG') {
                child.className = 'web__msg--img'
                child.src = child.getAttribute('data-src')
              } else if (child.tagName === 'VIDEO') {
                child.className = 'web__msg--video'
                child.src = child.getAttribute('data-src')
              } else if (child.tagName === 'AUDIO') {
                child.className = 'web__msg--audio'
                child.controls = 'controls';
                child.src = child.getAttribute('data-src')
              } else if (child.tagName === 'FILE') {
                child.className = 'web__msg--file'
                child.innerHTML = `<h2>File</h2><span>${child.getAttribute('data-name')}</span>`
              } else if (child.tagName === 'MAP') {
                child.className = 'web__msg--file web__msg--map'
                child.innerHTML = `<h2>Map</h2><span>${child.getAttribute('data-longitude')} , ${child.getAttribute('data-latitude')}<br />${child.getAttribute('data-address')}</span>`
              }
            }
          }
        });
        this.load = true
      }, 0)
      return result;
    },
    //处理事件
    handleEvent (params) {
      const callback = () => {
        if (params.type === 'IMG') {
          this.imgSrc = params.src;
          this.show = true;
        } else if (params.type === 'VIDEO') {
          this.videoSrc = params.src;
          this.show = true;
        } else if (params.type === 'AUDIO') {
          this.audioSrc = params.src;
          this.show = true;
        } else if (params.type === 'FILE') {
          window.open(params.src)
        }
      }
      if (typeof this.beforeOpen === 'function') {
        this.beforeOpen(params, callback)
      } else {
        callback();
      }
    },
    handleClose (done) {
      this.imgSrc = undefined;
      this.videoSrc = undefined;
      this.audioSrc = undefined;
      done();
    },
  },
}
</script>
<style>
.web__msg--img,
.web__msg--video,
.web__msg--file {
  position: relative;
  max-width: 250px;
  min-width: 200px;
  width: 100%;
  margin: 10px 0;
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  display: block;
}
</style>
<style  scoped>
.web__main-item {
  position: relative;
  font-size: 0;
  margin-bottom: 10px;
  padding-left: 60px;
  min-height: 68px;
  text-align: left;
}

.web__main-user,
.web__main-text {
  display: inline-block;
  /* @css { * }display: inline;
    @css { * }zoom: 1; */
  vertical-align: top;
  font-size: 14px;
}

.web__main-user {
  position: absolute;
  left: 3px;
}

.web__main-user img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.web__main-user cite {
  position: absolute;
  left: 60px;
  top: -2px;
  width: 500px;
  line-height: 24px;
  font-size: 12px;
  white-space: nowrap;
  color: #999;
  text-align: left;
  font-style: normal;
}

.web__main-user cite i {
  padding-left: 15px;
  font-style: normal;
}

.web__main-text {
  position: relative;
  line-height: 22px;
  margin-top: 25px;
  padding: 8px 15px;
  background-color: #f3f3f3;
  border-radius: 3px;
  border: 1px solid #f0f0f0;
  color: #000;
  word-break: break-all;
}

.web__main-arrow {
  top: 6px;
  left: -8px;
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 8px;
  border-left-width: 0;
  border-right-color: #ebeef5;
}

.web__main-arrow::after {
  content: " ";
  top: -7px;
  left: 1px;
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 7px;
  border-left-width: 0;
  border-right-color: #ebeef5;
}

.web__main-item--mine .web__main-text .web__main-arrow {
  left: auto;
  right: -5px;
  border-color: transparent;
  border-style: solid;
  border-width: 8px;
  border-right-width: 0;
  border-left-color: #409eff;
}

.web__main-item--mine .web__main-text .web__main-arrow::after {
  left: auto;
  right: -2px;
  border-color: transparent;
  border-style: solid;
  border-width: 7px;
  border-right-width: 0;
  border-left-color: #409eff;
}

.web__main-list {
  margin: 10px 0;
}

.web__main-list li {
  height: 30px;
  color: #409eff;
  line-height: 30px;
}

.web__main-item--mine {
  text-align: right;
  padding-left: 0;
  padding-right: 60px;
}

.web__main-item--mine .web__main-user {
  left: auto;
  right: 3px;
}

.web__main-item--mine .web__main-user cite {
  left: auto;
  right: 60px;
  text-align: right;
}

.web__main-item--mine .web__main-user cite i {
  padding-left: 0;
  padding-right: 15px;
}

.web__main-item--mine .web__main-text {
  margin-left: 0;
  text-align: left;
  background-color: #409eff;
  color: #fff;
}
.web__main-text img {
  max-width: 200px;
}
</style>