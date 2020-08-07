<template>
  <div class="hello" style="height: calc(90vh);overflow-y:auto">

    <div v-if="show">
      <spinner :type="types" :size="size" class="center-spin"></spinner>
      <strong class="center-spin" style="font-size: 100%">我的猫开发中</strong>
    </div>
    <div v-else class="container-fluid">
      <div class="row" style="background-color: lightcoral;height: calc(20vh)">
        <div class="col-lg-4 col-sm-4 col-md-4 col-xs-4" style="height: 100%;">
          <img :src="useravatar" alt="..." class="img-circle img_auto center-spin img-border" style="margin-left: 3%">
        </div>
        <div class="col-lg-5 col-sm-5 col-md-5 col-xs-5" style="height: 100%;">
          <div style="color: white;font-size: 100%;width: 100%;height: 100%;margin-top: 6vh">
            <div>
              <strong>{{username}}</strong>
            </div>
              <div>
                <img :src="levelimg" class=" icon_auto" style="vertical-align:middle;"> <strong>{{level}}</strong>
              </div>
          </div>
        </div>
  <div class="col-lg-3 col-sm-3 col-md-3 col-xs-3" style="height: 100%;">
        <div class="vux-circle-demo">
    <div style='width:10vh;height:10vh;'>

      <x-circle
        :percent="percent"
        :stroke-width="6"
        :trail-width="6"
        :stroke-color="['#5cb85c','#36D1DC']"
        trail-color="#ececec">
        <span style="color:#36D1DC">{{ percent }}%</span>
      </x-circle>
      <div>
              <div style="font-size: 1vh;color: white">
                <img :src="next_img" class=" icon_auto" style="vertical-align:middle;"> <strong>{{next}}</strong>
              </div>
            </div>
    </div>
  </div>

      </div>
      </div>


      <div class="row">
      <!--<divider>{{ title_msg }}</divider>-->
	   <card :header="{title:life}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>1130</span>
          <br/>
          {{ cat_shit_day }}
        </div>
        <div class="vux-1px-r">
          <span>1</span>
          <br/>
          {{ have_cat }}
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          {{ pay_eq }}
        </div>
        <div>
          <span>88</span>
          <br/>
          {{ share}}
        </div>
      </div>
    </card>

      </div>
      <div class="row">
            <divider>{{list_title}}</divider>
       <div v-if="list">
        <!--<group :title="$t('Switch the type')">-->
          <!--<radio title="type" v-model="type" :options="['1', '2', '3', '4', '方式']"></radio>-->
        <!--</group>-->
          <!--:footer="footer"-->
        <panel :header="cat_list" :list="list" :type="type" @on-img-error="onImgError"></panel>
  </div>

        <div v-else>
<!--添加-->
        </div>

      </div>

      <div class="row" style="padding: 15px">
        <divider>{{img_list}}</divider>
 <button-tab v-model="select_data">
        <button-tab-item @on-item-click="consoleIndex()">喵态</button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">装备</button-tab-item>
      </button-tab>
        <br>
         <button-tab v-model="select_data">
        <button-tab-item>{{ article_cate}}</button-tab-item>
        <button-tab-item>{{ goods_cate }}</button-tab-item>
      </button-tab>
      </div>

    </div>



  </div>
</template>

<script>
  import axios from 'axios'
  import {Spinner,XCircle,Card,Divider,Panel, Group, Radio, XHeader ,TransferDom ,ButtonTab, ButtonTabItem} from 'vux'

  export default {
    name: 'HelloWorld',
     directives: {
    TransferDom
  },
    components: {
      Spinner,
      XCircle,
      Card,
      Divider,
      Panel,
       Group, Radio,ButtonTab, ButtonTabItem
    },
    data() {
      return {
        types: "bubbles",
        size: "30%",
        show: "",
        username: "请登录用户",
        level: "",
        useravatar: "../static/cathand.png",
        levelimg: "",
         percent: 0,
        next:"",
        next_img:"",
        title_msg:"我的猫",
        life:"生涯",
        cat_shit_day:"铲屎天数",
        have_cat:"拥有的猫",
        pay_eq:"购买装备",
        share:"分享文章",
        list_title:"我的猫",
        cat_list:"猫咪们",
        img_list:"喵生",
      type: '1',
         list: [{
        src: '/media/avatar/timg.jpg',
        // fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '可乐',
        // desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        // url: '/component/cell'
      },
        //    {
        // src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        // title: '标题二',
        // desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        // // url: {
        // //   path: '/component/radio',
        // //   replace: false
        // // },
        // meta: {
        //   source: '来源信息',
        //   date: '时间',
        //   other: '其他信息'
        // }
      // }
      ],

        article_cate:"最新喵态",
        goods_cate:"最新装备",
        select_data:0

      }
    },
    mounted() {
      this.GetUserDetail()
    },
    methods: {
      GetUserDetail() {
          this.$store.dispatch('business/getUserDetail').then((res)=>{
                  this.username = res.data.username
          this.useravatar =  res.data.user_avatar
          this.level = res.data.level
          this.levelimg =  res.data.level_img
          this.next=res.data.next
          this.next_img=res.data.next_img
          this.percent=parseInt((res.data.experience/res.data.next_experience)*100)
          })



      },
        onImgError (item, $event) {
      console.log(item, $event)
    },
       consoleIndex () {
      console.log('click demo01', this.select_data)
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
  .img-border{
    border:solid 4px white;
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
  .vux-circle-demo {
  padding-top: 20px;
  text-align: center;
}
.vux-circle-demo > div {
  margin: 0 auto;
}

@import '~vux/src/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}

</style>
