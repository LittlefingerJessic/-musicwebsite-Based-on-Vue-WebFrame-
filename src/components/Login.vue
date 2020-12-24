<template>
<el-container>
  <el-header>
    <div class='opad'>
    <div class='fp'>
     <el-menu
  class="el-menu-demo"
  mode="horizontal"
  text-color="#BEBEBE"
  background-color="black"
  active-text-color="yellow">
  <el-menu-item @click='rfq' index="1"><i class='el-icon-loading'></i>真我音乐</el-menu-item>
  <el-menu-item index="2">发现音乐</el-menu-item>
  <el-menu-item @click='wmd' index="3" >我的音乐</el-menu-item>
  <el-menu-item index="40">朋友</el-menu-item>
  <el-menu-item index="5">商场</el-menu-item>
  <el-menu-item index="6">音乐人</el-menu-item>
  <el-menu-item index="7">下载客户端</el-menu-item>
  <el-menu-item index="8">
  <el-input
    placeholder="音乐/视频/电台/用户"
    prefix-icon="el-icon-search" size='mini'>
  </el-input>
</el-menu-item>
  <el-menu-item index="9">创造者中心</el-menu-item>
  <el-menu-item class='pinfo gssb'  index="10">登陆</el-menu-item>
  <el-menu-item index="10"><div class='nsa'><img class='tpa' :src="headerph" alt=""></div></el-menu-item>
</el-menu></div></div>
  </el-header><el-main><router-view></router-view></el-main>
  <div class='dyjb'>
    <div class='dyj'>
<div>服务条款</div>
<div>隐私政策</div>
<div>儿童隐私政策</div>
<div>版权投诉指引</div>
<div>意见反馈</div></div></div>
<div style='height:50px'></div>
<div class='hdla'>
  <div class='waniz'><div class='plabd'><div  style='font-size:20px;margin-top:10px' class='glyphicon glyphicon-step-backward'></div><i style='font-size:35px;margin-top:5px' class='glyphicon glyphicon-play-circle'></i>
  <div style='font-size:20px;margin-top:10px' class='glyphicon glyphicon-step-forward'></div><span><img style='width:34px;height:34px;margin-top:5px' src="https://p2.music.126.net/R-Lposdlry8nicn3XFYN4w==/2942293117811679.jpg?param=34y34" alt=""></span>
  <span>咬住下唇<span style='padding-left:8px'>胡柠檬</span><div class='prom'></div></span><div class='pzsh'><div class='zszq'><div class='core'></div></div></div>
  <span style='margin-top:15px;padding-left:455px'>00:00/03:52</span><span style='margin-top:15px' class='el-icon-folder-add'></span><span style='margin-top:15px' class='glyphicon glyphicon-share'></span>
  <span style='margin-top:15px' class='glyphicon glyphicon-volume-up'></span><span style='margin-top:15px' class='glyphicon glyphicon-retweet'></span>
  <span style='margin-top:15px' class='el-icon-notebook-2'>369</span></div></div></div>
</el-container>
</template>
<script>
export default {
  data () {
    return {
      fastest: [],
      nr: [],
      crea: [],
      cookie: '',
      headerph: ''
    }
  },
  created () {
    this.getrank()
  },
  methods: {
    async getrank () {
      const { data: res } = await this.$http.get('/playlist/detail?id=19723756')
      const { data: td } = await this.$http.get('/playlist/detail?id=3779629')
      const { data: tb } = await this.$http.get('/playlist/detail?id=2884035')
      this.cookie = window.sessionStorage.getItem('cookie')
      if (this.token) document.getElementsByClassName('pinfo')[0].className = 'gssb'
      const { data: resd } = await this.$http.get('/user/account', {
        params: { cookie: this.cookie }
      })
      this.headerph = resd.profile.avatarUrl
      if (res.code !== 200) return
      this.fastest = res.playlist.tracks
      this.nr = td.playlist.tracks
      this.crea = tb.playlist.tracks
    },
    rfq () {
      this.$router.push('/findmusic')
    },
    wmd () {
      this.$router.push('/ceshi')
    }
  }
}
</script>

<style lang='less' scoped>
.plabd {
  display: flex;
  justify-content: space-between;
  color:#BBBABA
}
.opad {
  position: absolute;
  width:100%;
  height:60px;
  background-color: black;
}
.fp {
  position:absolute;
  left: 50%;
  transform:translate(-50%);
  width:1050px;
}
.el-menu.el-menu--horizontal {
  border-bottom:none
}
a {
  color:black;
  text-decoration: none;
  padding-left:15px
}
img {
  margin-top:-300px;
}
.swipe-item {
  width:729px;
  height:auto;
  margin-top:0px
}
.el-header {
  padding:0
}
.el-main {
  padding:0;
  height:100%
}
.waniz{
  position: fixed;
  bottom:0;
  height:45px;
  width:1000px;
  left:50%;
  transform: translate(-50%);
}
.prom {
  width:500px;
  height:10px;
  background-color:rgba(34,34,34,0.8);
  border-radius:5px
}
.hdla {
  position:fixed;
  width:100%;
  bottom:0;
  height:45px;
  background-color: rgba(34,34,34,0.9);
}
.zszq {
  width:20px;
  height:20px;
  border-radius: 10px;
  background-color: white;
}
.core {
  width:10px;
  height:10px;
  border-radius: 5px;
  background-color: red;
  position: absolute;
  margin-left:5px;
  margin-top:5px;
}
.pzsh {
  margin-left:-525px;
  margin-top:14px
}
.dyj {
  display:flex;
  justify-content: space-between;
  width:386px;
}
.dyjb {
  position: absolute;
  left:50%;
  transform: translate(-50%);
  bottom:-800px
}
.tpa {
  margin-top:0px;
  width:100%;
  border-radius:15px
}
.nsa {
  background-color:black;
  width:30px;
  height:30px;
}
.gssb {
  display: none
}
</style>
