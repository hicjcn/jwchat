<template>
  <div class="wrapper">
    <div class="notice" style="resolve">
      <JwChat-empty class="empty" v-if="!info.notice" size="8rem" />
      <P style="padding-left:0.2rem">{{info.tip}}</P>
      <p style="font-size:0.8rem;margin-top:0.5rem;padding:0 .2rem">{{info.notice}}</p>
    </div>
    <div class="userList">
      <div>{{info.listTip}} ({{dataList.length}})</div>
      <ul>
        <li><el-input :placeholder="info.filterTip" v-model="filter" clearable size="mini"/></li>
        <li v-for="(item,k) in dataList" :key="k">
          <JwChat-item size="25" :config="item" @click="bindClick" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JwChat-rightbox',
  props: {
    config: Object
  },
  data(){
    return {
      filter:''
    }
  },
  computed: {
    info () {
      const { tip = '群公告:', notice = '', listTip = '组成员', filterTip = '搜索好友' } = this.config
      return {
        tip,
        notice,
        listTip,
        filterTip
      }
    },
    dataList(){
      const { list=[] } = this.config
      const filter = this.filter
			if(!filter) return list

			const filterArr = []
			const reg = new RegExp(filter,'g')
			list.forEach(i=>{
				const {name} = i
				if(reg.test(name)) filterArr.push(i)
			})

      return filterArr
    }
  },
  methods: {
    bindClick (type) {
      this.$emit('click', type)
    }
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  padding: 0px;
  height: 100%;
  max-width: 100%;
  width: 0;
  min-width: 220px;
  margin: 0 auto;
  .notice {
    height: 30%;
    text-align: left;
    position: relative;
    .empty {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .userList {
    height: 70%;
    text-align: left;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    li {
      list-style: none;
      height: 2rem;
      line-height: 2rem;
      padding: 0.2rem;
    }
  }
}
</style>