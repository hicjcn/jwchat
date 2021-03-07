<!--
 * @Author: your name
 * @Date: 2021-03-04 17:23:51
 * @LastEditTime: 2021-03-06 23:00:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JChat\src\components\ChatInterface\windowBar.vue
-->
<template>
  <div class="windowBar" :style="winBarStyle" @mouseup="moveEnd">
    <!-- <div class="toolBarBox">
      <img src="image/three.jpeg" alt="">
    </div> -->
    <div class="winBarBox" ref="windowBar">
     <div>
        <div
          v-for="item in winList" :key="item.id" :ref="`winItem${item.id}`"
          :class="{'winItem':true,'winActive': activeItem == item.id}" :style="winItemStyle" 
          @click.stop="bindClick(item)"  @mousedown.stop="moveStart($event,item)"
          @mousemove="moveObj.id == item.id?bindMove($event):''" >
          <JwChat-item :config="item"/>
          <div class="itemOperation">
            <!-- <el-button size="mini">置顶</el-button> -->
            <el-button size="mini" type="danger" @click.stop="bindOperation({name: '删除', id:1, type: 'reomve', target: item})">删除</el-button>
          </div>
        </div>
        <template v-if="!winList.length">
          <JwChat-empty size="8rem" />
          <el-divider  style="padding: 0 5px;">
            <span style="font-size: 0.2rem;">暂无会话</span>
          </el-divider>
        </template>
     </div>
    </div>
  </div>
</template>

<script>
import Scroll from '@/utils/scroll'
export default {
  props:{
    config:{
      typeof: Object,
      default:()=>({
        list: [],
        active: null,
        width: '150px',
        listHeight: '60px'
      })
    }
  },
  data () {
    return {
      activeItem: 0,
      moveObj: {},
      scroll: null,
      complete: null,
      operationTimer: null
    }
  },
  computed: {
    winList(){
      const { list = [] } = this.config
      const winList = list 
      return winList
    },
    winItemStyle() {
      const { listHeight: height = '60px' } = this.config 
      return {
        height
      }
    },
    winBarStyle() {
      const { width ='150px' } = this.config 
      return {
        width
      }
    }
  },
  watch: {
    'config.active': {
      handler(newVal) {
        if(newVal){
          this.activeItem = newVal
        }
      },
      deep:true,
      immediate:true
    },
    'config.list': {
      handler(newVal) {
        if(newVal){
          this.scrollRefresh()
        }
      },
      deep:true,
      immediate:true
    }
  },
  mounted () {
    const dom = this.$refs.windowBar
    this.scroll = new Scroll(dom, {
      click: true,
      scrollbars: true,
      mouseWheel: true,
      preventDefault: false,
      interactiveScrollbars: true,
      hijackInternalLinks: true,
      mouseWheelSpeed: 1
    })
  },
  methods: {
    bindClick(play){
      const {id} = play
      this.activeItem = id
      this.$emit('click',{type: 'winBar', data: play})
    },
    bindOperation(play) {
      this.doneMove(true)
      this.$emit('click',{type: 'winBtn', data: play})
    },
    moveStart(event, play) {
      this.doneMove(true)
      const { id } = play
      const { x, y } = event
      this.moveObj = {
        x, y, id,
        move: true,
        showOperation: false
      }
    },
    moveEnd(){
      this.doneMove()
    },
    bindMove($event){
      const { move = false, id, x: beforeX, showOperation } = this.moveObj
      if(move){
        const { x } = $event
        let movePosition = x - beforeX
        this.$refs[`winItem${id}`][0].style.transform = `translateX(${movePosition}px)`
        if (!showOperation && (movePosition < -20 || movePosition > 100)) {
          this.moveObj.showOperation = true
          this.moveObj.moveLeft = movePosition > 0 ? false : true
        }
        if(showOperation){
          this.doneMove()
        } 
      }
    },
    doneMove(immediate=false) {
      const {  id, moveLeft } = this.moveObj
      this.moveObj.move =false
      if(!id) return
      const doneCallback = ()=>{
        let result = 0
        if(moveLeft) result = -70
        if(immediate) result = 0
        const dom =  this.$refs[`winItem${id}`]
        if(!dom.length) return
        dom[0].style.transform = `translateX(${result}px)`
      }
      clearTimeout( this.operationTimer)
      if(immediate) return doneCallback()
      this.operationTimer = setTimeout(doneCallback, 1000)
    },
    scrollRefresh () {
      if(!this.scroll) return
      const that = this
      that.complete = setInterval(function () {
        // 判断文档和所有子资源(图片、音视频等)已完成加载
        if (document.readyState === 'complete') {
          window.clearInterval(that.complete)
          that.scroll.refresh()
        }
      }, 50)
    },
  }
}
</script>

<style lang='scss' scoped>
.windowBar {
  background: #fff;
  height: 100%;
  min-width: 150px;
  overflow: hidden;
  display: flex;
  border-right: 1px solid #dcdfe6;
  .toolBarBox{
    $barSize: 60px;
    width: $barSize;
    border-right: 1px solid #dcdfe6;
    img{
      width: 50px;
    }
  }
  .winBarBox{
    padding:0 5px;
    margin-top: 15px;
    width: calc(100% - 10px);
    height: calc(100% - 20px);
  }
  .winItem {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: transform 0.6s;
    background: #fff;
    user-select: none;
    &:hover{
      background: #f9f9f9;
      .itemOperation{
        background: #f9f9f9;
      }
    }
    &.winActive{
      background: #f0f0f0;
      .itemOperation{
        background: #f0f0f0;
      }
    }
    .itemOperation{
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 5px;
      right: 0;
      transform: translateX(100%);
      right: 0;
      /deep/ .el-button{
        margin: 0;
      }
    }
  }
  /deep/ .el-divider__text{
    padding: 0 5px;
  }
}
</style>
