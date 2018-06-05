<template>
  <div>
    <h1>{{msg}}</h1>
    <hr>
    <div v-for="row in course_list">
      <div style="width: 350px;float: left">
        <div id="img">
          <img v-bind:src="row.course_img">
        </div>
        <h3>
          <router-link :to="{name:'micro_course_detail',params:{id:row.id}}">{{row.name}}</router-link>
        </h3>
        <hr>
        <div>
          <h3>课程概述</h3>
          <p>{{row.brief}}</p>
        </div>
        <hr>
        <div>
         <h3>常见问题</h3>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "micro_course",
    data() {
      return {
        msg: "学位课程列表",
        course_list: []
      }
    },
    mounted: function () {
      this.initourse()
    },
    methods: {
      initourse: function () {
        var that = this;
        this.$axios.request({
          url: "http://127.0.0.1:8000/luffy/api/v2/micro/",
          methods: "GET",
        }).then(function (ret) {
          if (ret.data.code === 1000) {
            that.course_list = ret.data.data
          }
        }).catch(function (ret) {
          console.log("请求失败")
        })
      },
    }
  }
</script>

<style scoped>
</style>
