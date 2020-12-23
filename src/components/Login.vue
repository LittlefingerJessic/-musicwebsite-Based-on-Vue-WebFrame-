<template>
<el-container>
  <el-header style='height: 400px'>
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
  <el-menu-item index="3" >我的音乐</el-menu-item>
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
  <el-menu-item index="10">登陆</el-menu-item>
</el-menu></div></div>
<div class='tdgh'>
<div class='zdsz'>
   <el-menu
  class="el-menu-demo"
  mode="horizontal"
  text-color="#BEBEBE"
  background-color="red"
  active-text-color="white">
  <el-menu-item index="11">推荐</el-menu-item>
  <el-menu-item index="12" >排行榜</el-menu-item>
  <el-menu-item index="13">歌单</el-menu-item>
  <el-menu-item index="14">主播电台</el-menu-item>
  <el-menu-item index="15">歌手</el-menu-item>
  <el-menu-item index="16">新碟上架</el-menu-item>
</el-menu></div></div>
    <div class='third'>
      <div class='thdad'>
    <div class="pturn-content"><img class="swipe-item" src='http://p4.music.126.net/aXvj5BYRCoCWgdD40_CgXg==/109951165425092026.jpg' loading="lazy"></div>
</div></div>
  </el-header>
  <el-main>
    <div style='text-align:center;padding-top:20px'>
      <img c src="../assets/123.png" alt="" >
    <span style='font-size:25px'>热门推荐</span><a href="">华语</a>
    <a href="">流行</a>
    <a href="">摇滚</a>
    <a href="">民谣</a>
    <a href="">电子</a>
    <a href="">更多</a></div>
    <div class='qwer'><br><br><br><br><br>
    <div class='simple'><div v-for='abc in hotrecom' :key='abc.id' ><img class='nga' :src="abc.coverImgUrl" alt="">
    <i class='el-icon-service'>{{ abc.playCount}}</i><i  class='el-icon-video-play'></i>
    <div style='width:135px;margin-top:-90px'>{{ abc.name }}</div></div></div></div>
    <br><br><br><br><br><br><br><br><br><br>
     <div style='text-align:center;padding-top:20px'>
      <img style='margin-top:-10px' src="../assets/123.png" alt="" >
    <span style='font-size:25px'>新碟上架</span><span style='padding-left:550px'>更多</span></div>
    <div class='pop'><div class='gpo'><div v-for='single in newal' :key='single.picId'><div style='padding-right:20px;padding-top:110px'>{{ single.name }}<img style='height:134px;width:auto' :src='single.picUrl' alt=""></div></div></div></div>
   <div style='text-align:center;padding-top:250px'>
     <span style='font-size:25px'>榜单</span><span style='padding-left:590px'>更多</span></div>
     <div class='plty'><div class='ryxx'>
 <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="white"
  text-color="#BEBEBE"
  active-text-color="#fff">
 <el-menu-item index="160"><el-table
    :data="fastest"
    border stripe>
    <el-table-column
      prop="name"
      label="飙升榜"
      width="260">
    </el-table-column>
  </el-table></el-menu-item>
  <el-menu-item index="161"> <el-table stripe
    :data="nr"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="新歌榜"
      width="260">
    </el-table-column>
  </el-table></el-menu-item>
  <el-menu-item index="162"><el-table stripe
    :data="crea"
    border
    style="width: 100%" class='tbg'>
    <el-table-column
      prop="name"
      label="原创榜"
      width="260">
    </el-table-column>
  </el-table></el-menu-item>
  </el-menu></div></div>
  <div style='text-align:center;margin-top:590px'>查看更多榜单</div>
  <div class='dyjb'>
    <div class='dyj'>
<div>服务条款</div>
<div>隐私政策</div>
<div>儿童隐私政策</div>
<div>版权投诉指引</div>
<div>意见反馈</div></div></div><br><br>
  </el-main><div class='hdla'>
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
      newestalbumlist: [],
      pic: [],
      hotrecom: [],
      newal: [],
      fastest: [],
      nr: [],
      crea: []
    }
  },
  created () {
    this.getnewestalbumlist()
    this.gethotrec()
    this.getnew()
    this.getrank()
    this.getnr()
    this.getcrea()
  },
  methods: {
    async getnewestalbumlist () {
      const { data: res } = await this.$http.get('/album/newest')
      if (res.code !== 200) return this.$message.error('获取最新专辑失败')
      this.newestalbumlist = res.albums
      var b = res.albums.length
      var i = 0
      setInterval(function () { this.pic = res.albums[i].picUrl; document.getElementsByClassName('swipe-item')[0].src = this.pic; i = i + 1; if (i === b) { i = 0 } }, 5000)
    },
    async gethotrec () {
      const { data: res } = await this.$http.get('/top/playlist?limit=5&order=hot')
      if (res.code !== 200) return
      this.hotrecom = res.playlists
    },
    async getnew () {
      const { data: res } = await this.$http.get('/album/newest')
      if (res.code !== 200) return
      this.newal = res.albums
    },
    async getrank () {
      const { data: res } = await this.$http.get('/playlist/detail?id=19723756')
      const { data: td } = await this.$http.get('/playlist/detail?id=3779629')
      const { data: tb } = await this.$http.get('/playlist/detail?id=2884035')
      if (res.code !== 200) return
      this.fastest = res.playlist.tracks
      this.nr = td.playlist.tracks
      this.crea = tb.playlist.tracks
      console.log(this.fastest)
    },
    rfq () {
      this.$router.push('/login')
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
.qwer {
  position:absolute;
  left: 50%;
  transform:translate(-50%);
  width:800px;
}
.thdad {
  position:absolute;
  left: 50%;
  transform:translate(-50%);
  width:729px;
}
.zdsz {
  position:absolute;
  left: 50%;
  transform:translate(-50%);
  width:500px;
  height:30px
}
.tdgh {
  position: absolute;
  width:100%;
  height:60px;
  background-color: red;
  margin-top:50px
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
.plty {
  position:absolute;
  left: 50%;
  transform:translate(-50%);
  width:903px;
}
.ryxx {
  height:565px;
  width:903px;
  overflow: hidden;
}
.el-menu.el-menu--horizontal {
  border-bottom:none
}
.pop {
  position:absolute;
  left: 50%;
  transform:translate(-50%);
  width:100%;
}
.gpo {
  display:flex;
  justify-content: space-between;
  width:600px;
  height:100px;
  margin-top:100px
}
a {
  color:black;
  text-decoration: none;
  padding-left:15px
}
.rdl {
  width:100%;
  height:2px;
  background-color: red ;
}
.third {
  height:292px;
  background-color: pink;
  margin-top:110px;
}
img {
  margin-top:-300px;
}
.pturn-content {
  height:292px;
  overflow: hidden;
}
.swipe-item {
  width:729px;
  height:auto;
  margin-top:0px
}
.alal {
  padding-top:150px;
}
.el-icon-service {
  position:absolute;
  color:deepskyblue;
  margin-left:-130px;
  margin-top:-90px
}
.el-icon-video-play {
  position:absolute;
  color:deepskyblue;
  margin-left:-30px;
  margin-top:-90px
}
.nga {
  height:137px;
  width:135px;
}
.simple {
  width:800px;
  display:flex;
  justify-content: space-between;
  padding-top:125px;
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
  width:386px
}
.dyjb {
  position: absolute;
  left:50%;
  transform: translate(-50%);
  bottom:-750px
}
</style>
