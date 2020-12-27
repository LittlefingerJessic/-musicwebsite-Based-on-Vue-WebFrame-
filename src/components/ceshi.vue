<template lang="">
    <div class='login_container'>
        <div class='login_box'>
                <el-form class='loginform' :model='loginForm' :rules='rules' ref='loginformRef' >
                    <!--用户名-->
                <el-form-item prop='phone'>
        <el-input prefix-icon="el-icon-user-solid" v-model='loginForm.phone' >
        </el-input>
            </el-form-item>
            <!--密码-->
            <el-form-item prop='password'>
        <el-input prefix-icon="el-icon-s-goods" v-model='loginForm.password' type='password' >
        </el-input>
        <el-checkbox v-model="checked">记住密码</el-checkbox><span style='padding-left:260px'>忘记密码？</span>
            </el-form-item>
            <el-form-item class='btns'>
                <el-button type="primary" @click='login'>登陆</el-button>
                <el-button type="info" @click='resetLoginForm' >重置</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      // 这是登陆表单的数据绑定对象
      loginForm: {
        phone: '19970199416',
        password: '@10081.com'
      },
      cookie: '',
      checked: true,
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '长度 11 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getkqk()
  },
  methods: {
    resetLoginForm () {
      // console.log(this)
      this.$refs.loginformRef.resetFields()
    },
    getkqk () {
      this.cookie = window.sessionStorage.getItem('cookie')
      if (this.cookie) this.$router.push('/myplaylist')
    },
    login () {
      this.$refs.loginformRef.validate(async valid => {
        if (!valid) return
        const times = Date.parse(new Date())
        const { data: res } = await this.$http.post('login/cellphone?' + 'time=' + times, this.loginForm)
        if (res.code !== 200) return this.$message.error('登陆失败')
        this.$message.success('登陆成功')
        console.log(res.cookie)
        window.sessionStorage.setItem('cookie', res.cookie)
        window.sessionStorage.setItem('uid', res.account.id)
        window.sessionStorage.setItem('touxiang', res.profile.avatarUrl)
        this.$router.push('/findmusic')
        // 1.将登陆成功之后的token，保存到客户端的sessionStorage中
        // 1.1项目中除了登陆之外的其他api接口，必须在登陆之后才能访问
        // 1.2 token只应在当前网站打开期间生效，所以将 token保存在sessionStorage中
        // 2. 通过编程式导航跳转到后台主页，路由地址是/home
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #eee;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.loginform {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
