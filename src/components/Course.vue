<template>
  <div>
    <h1>{{msg}}</h1>
    <hr>
    <div v-for="row in courseList">
      <div style="width: 350px;float: left">
        <div id="img">
          <img v-bind:src="row.course_img">
        </div>
        <h3>
          <router-link :to="{name:'coursedetail',params:{id:row.id}}">{{row.name}}</router-link>
        </h3>
        <p>{{row.course_img}}</p>
        <p>{{row.brief}}</p>
        <p>{{row.level}}</p>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "course",
    data() {
      return {
        msg: '课程列表',
        courseList: []
      }
    },
    mounted: function () {
      // 页面加载时，自执行函数
      this.initourse()
    },
    methods: {
      initourse: function () {
        var that = this;
        this.$axios.request({
          url: "http://127.0.0.1:8000/luffy/api/v1/course/",
          methods: "GET",
        }).then(function (ret) {
          console.log(ret.data);
          if (ret.data.code === 1000) {
            console.log(ret.data);
            that.courseList = ret.data.data
          }
        }).catch(function (ret) {
          // ajax请求失败之后，获取响应的内容
        })
      },
    }
  }
</script>

<style scoped>

</style>
