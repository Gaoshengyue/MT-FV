<template>
  <div class="hello" style="height: calc(90vh)">
    <div v-if="show">
<spinner :type="types" :size="size" class="center-spin"></spinner>
    <strong class="center-spin" style="font-size: 100%">我的猫开发中</strong>
      </div>
    <div v-else class=" container-fluid;" >
      <div class="row" style="background-color: lightcoral;">
        <div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">

        </div>
        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-3">

        </div>
        <div class="col-lg-7 col-sm-7 col-md-7 col-xs-7">

        </div>
      </div>

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
