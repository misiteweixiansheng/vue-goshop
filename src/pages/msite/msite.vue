<template>
 <section class="msite">
        <Header :title="address">
            <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
            </span>
          <span class="header_login" slot="right">
              <span class="header_login_text">登录|注册</span>
            </span>
        </Header>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorysArr.length>0">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" 
              :key="index">

                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key='index'>
                  <div class="food_container">
                    <img :src="`https://fuss10.elemecdn.com${category.image_url}`">
                  </div>
                  <span>{{category.title}}</span>
                </a>

              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <div v-else>
            <img src="./images/msite_back.svg" alt="">
          </div>
        </nav>
        <ShopList/>
      </section>
</template>
<script type="text/ecmascript-6">
  import chunk from "lodash/chunk" 
  import ShopList from "../../components/shopList/shopList"
  import Swiper from "swiper"
  import "swiper/css/swiper.min.css"
  import {mapState} from "vuex"
  export default {
    computed:{
       ...mapState(["address","foodCategotys"]),
       categorysArr(){
         const {foodCategotys}=this
         return chunk(foodCategotys,8)
       }

      }
    ,
    components:{
      ShopList,
    },
    async mounted(){
      await this.$store.dispatch("getAddress")
      await this.$store.dispatch("getCategorys")
      new Swiper ('.swiper-container', {
        loop:true,
         pagination: {
            el: '.swiper-pagination',
          }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
        @import "../../assets/stylus/mixins.styl"
        .msite  //首页
          width 100%
              .icon-sousuo
                font-size 25px
                color #fff
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          
       
</style>
