
<template>
  <div id="app">
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from "./components/Foot"
  import Home from "./components/Home"
  import { ButtonTab, ButtonTabItem } from 'vux'
export default {
  name: 'App',
  components:{
    Home,
    Foot,
  }
}
</script>

<style>
#app {

}
</style>
