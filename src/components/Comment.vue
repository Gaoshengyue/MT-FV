<template>
  <div class="comment">
 <spinner :type="types" :size="size" class="center-spin"></spinner>
    <strong class="center-spin" style="font-size: 100%">猫态开发中</strong>

  </div>
</template>

<script>
  import { Spinner, Group, Cell } from 'vux'
export default {
  name: 'Comment',
   components: {
    Spinner,
  },
  data () {
    return {
 types: "lines",
      size:"30%"
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
