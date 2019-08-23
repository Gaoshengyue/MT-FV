<template>
  <div class="foot">

    <tabbar>
      <tabbar-item selected  link="/">
        <img slot="icon" src="../assets/home/share.png">
        <img slot="icon-active" src="../assets/home/blueshare.png">
        <span slot="label">猫态</span>
      </tabbar-item>
      <tabbar-item show-dot link="/ration">
        <img slot="icon" src="../assets/home/ration.png">
        <img slot="icon-active" src="../assets/home/blueration.png">
        <span slot="label">口粮</span>
      </tabbar-item>

      <tabbar-item show-dot link="/equipment">
        <img slot="icon" src="../assets/home/equip.png">
        <img slot="icon-active" src="../assets/home/blueequip.png">
        <span slot="label">装备</span>
      </tabbar-item>
      <tabbar-item link="/friend">
        <img slot="icon" src="../assets/home/friend.png">
        <img slot="icon-active" src="../assets/home/bluefriend.png">
        <span slot="label">伙伴</span>
      </tabbar-item>
      <tabbar-item  badge="2" link="/home">
        <!--<span class="remixicon-home-heart-fill"></span>-->
        <img slot="icon" src="../assets/home/cat.png" >
        <img slot="icon-active" src="../assets/home/bluecat.png">

        <span slot="label">我的猫</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>

import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  name: 'Foot',
    components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .foot{
/*margin-top: calc(80%);*/
    height: calc(10%);
    width: calc(100%);
    background: white;

  }


</style>
