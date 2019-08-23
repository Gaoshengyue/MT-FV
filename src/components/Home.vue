<template>
  <div class="hello" style="height: calc(90vh);overflow-y:auto">
    <div v-if="show">
      <spinner :type="types" :size="size" class="center-spin"></spinner>
      <strong class="center-spin" style="font-size: 100%">我的猫开发中</strong>
    </div>
    <div v-else class="container-fluid">
      <div class="row" style="background-color: lightcoral;height: calc(20vh)">
        <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4" style="height: 100%;">
          <img :src="useravatar" alt="..." class="img-circle img_auto center-spin">
        </div>
        <div class="col-lg-8 col-sm-8 col-md-8 col-xs-8" style="height: 100%;">
          <div style="color: white;font-size: 100%;width: 100%;height: 100%;margin-top: 6vh">
            <div>
              <strong>{{username}}</strong>
            </div>
            <div>
              <div>
                <img :src="levelimg" class=" icon_auto" style="vertical-align:middle;"> <strong>{{level}}</strong>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="row">
    我的猫

      </div>

    </div>



  </div>
</template>

<script>
  import axios from 'axios'
  import {Spinner} from 'vux'

  export default {
    name: 'HelloWorld',
    components: {
      Spinner
    },
    data() {
      return {
        types: "bubbles",
        size: "30%",
        show: "",
        username: "请登录用户",
        level: "",
        useravatar: "",
        levelimg: "",
      }
    },
    mounted() {
      this.GetUserDetail()
    },
    methods: {
      GetUserDetail() {
        axios.get("http://172.31.66.21:8000/user_detail/").then(response => {
          this.username = response.data.data.username
          this.useravatar = "http://172.31.66.21:8000" + response.data.data.user_avatar
          this.level = response.data.data.level
          this.levelimg = "http://172.31.66.21:8000" + response.data.data.level_img

        })


      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img_auto {
    max-width: 100%;
    max-height: 80%;
    display: block;
    height: auto;
    margin: auto;
    /*margin-top: 100%;*/
    /*border-radius:15px;*/
  }

  .icon_auto {
    max-width: 3vh;
    max-height: 3vh;
    /*display: block;*/
    height: auto;
    /*margin:auto;*/
    /*margin-top: 4%;*/
    /*border-radius:15px;*/
  }

  .hello::-webkit-scrollbar{
    display: none;
  }


</style>
