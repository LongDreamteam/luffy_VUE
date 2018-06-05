<template>
  <div>
    <h1>{{msg}}</h1>
    <p>{{contentlist.title}}</p>
    <hr>
    <p>
      &nbsp&nbsp评论数数：<span>{{contentlist.comment_num}}</span>&nbsp&nbsp&nbsp&nbsp
      &nbsp&nbsp阅读数：<span>{{contentlist.view_num}}</span>&nbsp&nbsp&nbsp&nbsp
      &nbsp&nbsp点赞：<span>{{contentlist.agree_num}}</span>&nbsp&nbsp&nbsp&nbsp
      &nbsp&nbsp收藏：<span>{{contentlist.collect_num}}</span>&nbsp&nbsp&nbsp&nbsp
      &nbsp&nbsp时间：<span>{{contentlist.date}}</span>&nbsp&nbsp&nbsp&nbsp
    </p>
    <img src=contentlist.head_img alt="">
    <p>{{contentlist.content}}</p>
    <p></p>

    <div style="width: 600px">
        &nbsp&nbsp&nbsp&nbsp<button class="dainzan" >点赞|{{contentlist.agree_num}}</button>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        &nbsp&nbsp&nbsp&nbsp<button class="shoucang" >收藏|{{contentlist.collect_num}}</button>
    </div>
    <hr>
    <div>
      <input type="text"><span><button>提交</button></span>
    </div>
    <hr>
    <p>评论</p>
  </div>
</template>

<script>
  export default {
    name: "contents",
    data() {
      return {
        msg: '文章详细',
        contentlist: {
          id: null,
          title:null,
          head_img:null,
          brief:null,
          date:null,

          comment_num:null,
          agree_num:null,
          view_num:null,
          collect_num:null,

          content:null,
          source:null,
        }
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
          url:'http://127.0.0.1:8000/luffy/api/v1/article/'+ nid +'/',
          methods:"GET",
        }).then(function (ret) {
            if (ret.data.code === 1000){
              that.contentlist = ret.data.data
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
