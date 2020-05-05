<template>
  <i :class="_class"></i>
</template>

<script>
export default {
  name: 'JwChat-icon',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    _class () {
      return {
        [this.$style.iconfont]: true,
        [this.$style[this.type]]: true
      }
    }
  }
}
</script>

<style module>
@font-face {
  font-family: "iconfont";
  src: url("./fonts/iconfont.eot"); /* IE9 */
  src: url("./fonts/iconfont.eot") format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,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")
      format("woff2"),
    url("./fonts/iconfont.woff") format("woff"),
    url("./fonts/iconfont.ttf") format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("./fonts/iconfont.svg") format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-empty:before {
  content: "\e699";
}

.icon-empty1:before {
  content: "\e604";
}

.icon-gengduo:before {
  content: "\e60a";
}

.icon-all:before {
  content: "\e6ef";
}

.icon-QRcode1:before {
  content: "\e75e";
}

.icon-comments:before {
  content: "\e7b2";
}

.icon-comment-single:before {
  content: "\e601";
}

.icon-email:before {
  content: "\e602";
}

.icon-ditu:before {
  content: "\e635";
}

.icon-lishi:before {
  content: "\e64e";
}

.icon-zhangdan:before {
  content: "\e65a";
}

.icon-xiangce:before {
  content: "\e65b";
}

.icon-hongbao:before {
  content: "\e623";
}

.icon-shipin:before {
  content: "\e64f";
}

.icon-dizhi:before {
  content: "\e658";
}

.icon-wenjian:before {
  content: "\e73e";
}

.icon-xiaolian:before {
  content: "\edb8";
}
</style>