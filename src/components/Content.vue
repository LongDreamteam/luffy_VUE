<template>
  <div>
    <h1>{{msg}}</h1>
    <div v-for="row in forum_list">
        <p>{{row.id}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contents",
    data() {
      return {
        msg: '文章详细表',
        forum_list: []
      }
    },
    mounted(){
      var id = this.$route.params.id;
      console.log(id)
      this.initContent(id)
    },
    methods:{
      initContent(nid) {
        var that = this;
        this.$axios.request({
          url:'http://127.0.0.1:8000/luffy/api/v1/article/'+ nid + '',
          methods:"GET",
        }).then(function (arg) {
            if (arg.data.code === 1000){
              that.forum_list = arg.data.data;
              console.log(forum_list)
            }else{
              alert("获取失败")
          }
          }
        )
      },
    }
  }
</script>

<style scoped>
</style>
