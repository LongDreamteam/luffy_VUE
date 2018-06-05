<template>
  <div>
    <h1>{{msg}}</h1>
    <div v-for="row in forum_list">
      <div style="width: 350px;float: left">
        <img src="" alt="">
        <router-link :to="{name:'contents',params:{id:row.id}}">{{row.title}}</router-link>
        <div id="img">
          <img v-bind:src="row.course_img">
        </div>
        <p>**************************************</p>
        <!--<p>{{row.comment_num}}</p>-->
        <p>{{row.brief}}}</p>
        <p>---------------------------------------</p>
        <p>时间:{{row.date}}</p>
        <p>点赞数：{{row.agree_num}}</p>
        <p>观看数：{{row.view_num}}</p>
        <p>收藏数：{{row.collect_num}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "forums",
    data() {
      return {
        msg: '深科技',
        forum_list: [],
      }
    },
    mounted: function () {
      this.initourse()
    },
    methods: {
      initourse: function () {
        var that = this;
        this.$axios.request({
          url: "http://127.0.0.1:8000/luffy/api/v2/article/",
          methods: "GET",
        }).then(function (ret) {
          if (ret.data.code === 1000) {
            that.forum_list = ret.data.data
          }
        }).catch(function () {
          console.log("请求失败")
        })
      }
    }
  }
</script>

<style scoped>
</style>
