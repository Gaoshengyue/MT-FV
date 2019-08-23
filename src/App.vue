
<template>
  <div id="app">
    <router-view/>
    <Foot style="position: fixed;bottom: 0;"></Foot>
  </div>
</template>

<script>
  import Foot from "./components/Foot"
  import Home from "./components/Home"
  import { ButtonTab, ButtonTabItem } from 'vux'
   import { Spinner } from 'vux'
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
