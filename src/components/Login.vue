<template>
  <div class="login">
    <div class="login-row">
      <label>用户名: </label><input type="text" placeholder="请输入用户名" v-model="username"/>
    </div>

    <div class="login-row">
      <label>密码: </label><input type="password" placeholder="请输入密码" v-model="password"/>
    </div>
    <p><span class="error" v-text="error"></span></p>
    <div class="login-row">
      <button class="btn" @click="doLogin">登陆</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: '',
        error: '',
      }
    },
    methods: {
      doLogin() {
        var that = this;
        this.$axios.request({
          url: this.$store.state.apiList.auth,
          method: 'POST',
          data: {
            username: this.username,
            password: this.password,
            error: this.error,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(function (arg) {
          if (arg.data.code === 1000) {
            that.$store.commit('saveToken', {token: arg.data.token, username: that.username})
            var url = that.$route.query.backUrl
            if (url) {
              that.$router.push({path: url})
            } else {
              that.$router.push({path: '/index'})
            }
          } else {
            that.error = arg.data.error
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    padding: 60px;
    width: 340px;
    margin: 0 auto;
    min-height: 300px;
  }

  .login .login-row {
    padding: 20px 0;
  }

  .login label {
    width: 70px;
    text-align: right;
    display: inline-block;
    margin-right: 10px;
  }

  .login input[type='text'], input[type='password'] {
    width: 250px;
    height: 28px;
  }

  .login .btn {
    float: right;
    display: inline-block;
    border: 1px solid #dddd;
    padding: 5px 15px;
    background: blue;
    color: white;
    font-size: 14px;
  }

  .login .error {
    float: right;
    display: inline-block;
    padding: 5px;
  }
</style>
