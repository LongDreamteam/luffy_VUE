<template>
  <div>
    <h1>课程详细页面</h1>
    <hr>
    <div>
      <p>{{detail.id}}</p>
      <p>{{detail.name}}</p>
      <p>{{detail.level}}</p>
      <img src="" alt="">
      <!--<p>{{detail.course_img}}</p>-->
      <hr>
      <h3>课程概述</h3>
      <p>{{detail.brief}}</p>
      <hr>
      <h3>课程章节</h3>
      <div>
        <ul v-for="item in detail. course">
          <li>{{item.name}}</li>
        </ul>
      </div>
      <hr>
      <h3>推荐课程</h3>

      <div>
        <ul v-for="item in detail. recommend_courses">
          <a @click="changeDetail(item.id)">{{item.name}}</a>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "'micro_course_detail",
    data() {
      return {
        detail:{
          id:null,
          name:null,
          brief:null,
          level:null,
         course_img:null,
          course:[],
          recommend_courses:[],
        }
      }
    },
    mounted(){
      var id = this.$route.params.id;
      this.initDetail(id)
    },
    methods:{
      initDetail(nid){
        var that = this;
        this.$axios.request({
          url:'http://127.0.0.1:8000/luffy/api/v1/course/'+ nid +'',
          method:'GET'
        }).then(function (arg) {
          if(arg.data.code === 1000){
            that.detail = arg.data.data;
          }else{
            alert("获取数据失败")
          }
        })
      },
      changeDetail(id){
        this.initDetail(id);
        this.$router.push({name:'coursedetail',params:{id:id}})
      }
    }
  }
</script>

<style scoped>

</style>
