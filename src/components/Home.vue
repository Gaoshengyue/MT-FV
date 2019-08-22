<template>
  <div class="hello">
    <div v-if="show">
<spinner :type="types" :size="size" class="center-spin"></spinner>
    <strong class="center-spin" style="font-size: 100%">我的猫开发中</strong>
      </div>
    <div v-else class="">

    </div>
  </div>
</template>

<script>
 import { Spinner } from 'vux'
export default {
  name: 'HelloWorld',
  components:{
    Spinner
  },
  data () {
    return {
        types: "bubbles",
      size:"30%",
      show:"1"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
