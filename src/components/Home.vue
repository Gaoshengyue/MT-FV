<template>
  <div class="hello" style="height: calc(90vh)">
    <div v-if="show">
<spinner :type="types" :size="size" class="center-spin"></spinner>
    <strong class="center-spin" style="font-size: 100%">我的猫开发中</strong>
      </div>
    <div v-else class=" container-fluid" >
      <div class="row" style="background-color: lightcoral;height: calc(20vh)">
        <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4" style="height: 100%;">
          <img src="../assets/head/起司.jpg" alt="..." class="img-circle" width="100%"  height="70%" style="margin-top: 15%;text-align: center">
        </div>
        <div class="col-lg-3 col-sm-3 col-md-3 col-xs-3" style="height: 100%;">
        <div style="margin-top: 40%;color: white">
          <strong >{{username}}</strong>
        </div>
        </div>
        <div class="col-lg-5 col-sm-5 col-md-5 col-xs-5">

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
      show:"1",
      username:"symoon"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
