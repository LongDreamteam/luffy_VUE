<template>
  <div class="pg-header">
    <div class="lf-container">
      <img class="logo" src="../assets/img/logo.png" alt="">
      <div class="nav">
        <router-link to="/index">首页</router-link>
        <router-link to="/course">课程</router-link>
        <router-link to="/micro">LuffyX学位</router-link>
        <router-link to="/forum">深科技</router-link>
        <router-link to="www.oldboyedu.com/">老男孩</router-link>
      </div>
      <div class="login">
        <div v-if="this.$store.state.token">
            <a>{{this.$store.state.username}}</a>
            <span>|</span>
            <a @click="logout">注销</a>
        </div>
        <div v-else>
          <router-link to="/login">登录</router-link>
          <span>|</span>
          <router-link to="/register">注册</router-link>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
  export default {
    name: "headers",
    methods: {
      logout(){
      this.$store.commit('clearToken')
    }
    }
  }
</script>

<style scoped>
  .pg-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 4px 0 #c9c9c9;
    padding-bottom: 3px;

  }
  .lf-container{
    width: 980px;
    margin: 0 auto;
  }

  .logo {
    margin-top: 10px;
    float: left;
    width: 40px;
    height: 40px;
    vertical-align: middle;

  }

  .nav {
    float: left;
    line-height: 60px;
  }

  .nav a {
    display: inline-block;
    padding: 0 15px;
    color: #7f7f7f;
    text-decoration: none;
  }

  .nav a:hover {
    border-bottom: 3px solid darkseagreen;
  }

  .login {
    float: right;
    line-height: 60px;
  }

  .login a {
    display: inline-block;
    padding: 0 15px;
    color: #7f7f7f;
    text-decoration: none;
  }

  .login a:hover {
    border-bottom: 3px solid darkseagreen;
  }


</style>

