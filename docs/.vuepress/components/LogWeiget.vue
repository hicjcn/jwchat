<template>
  <div class="wrapper">
    <template v-for="(i,k) in JsonData">
      <h2>{{i.title}}</h2>
      <ul v-for="item in i.list">
        <li>{{item}}</li>
      </ul>
    </template>
  </div>
</template>

<script>
// import config from "./config.js"
// console.log(config)
export default {
  components: {},
  props: {},
  data () {
    return {
      JsonData: [
        {          title: '0.2.42', list: [
            '新增12',
            '新增12',
            '新增12',
            '新增12',
          ]        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style  scoped>
.wrapper {
  padding: 0px;
  margin: 0px;
}
</style>