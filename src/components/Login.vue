<template>
<el-container>
  <el-header style='height: 400px'>
    <div class='first'><a hidefocus='true' class='f1' href="">发现音乐</a><a href="/#">我的音乐</a>
    <a href="/#">朋友</a><a href="/#">商场</a><a href="/#">音乐人</a><a href="/#">下载客户端</a><input value placeholder="音乐/视频/电台/用户">
  <button class='hah' type="info">创造者中心</button><span style='padding-right:400px;color:black'>登陆</span></div>
    <div class='second'><a class='f2' href="">推荐</a><a href="">排行榜</a>
    <a href="">歌单</a><a href="">主播电台</a><a href="">歌手</a>
    <a href="" class='f3'>新碟上架</a>
    </div>
    <div class='third'>
    <div class="pturn-content"><img class="swipe-item" src='http://p4.music.126.net/aXvj5BYRCoCWgdD40_CgXg==/109951165425092026.jpg' loading="lazy"></div>
</div>
  </el-header>
  <el-main>
    <div style='text-align:center'>
    <span style='font-size:20px'>热门推荐</span><a href="">华语</a>
    <a href="">流行</a>
    <a href="">摇滚</a>
    <a href="">民谣</a>
    <a href="">电子</a>
    <a href="">更多</a></div>
    <div class='simple'><div v-for='abc in hotrecom' :key='abc.id' ><img class='nga' :src="abc.coverImgUrl" alt="">
    <i class='el-icon-service'>{{ abc.playCount}}</i><i  class='el-icon-video-play'></i>
    <div style='width:135px'>{{ abc.name }}</div></div></div>
  </el-main>
</el-container>
</template>
<script>
export default {
  data () {
    return {
      newestalbumlist: [],
      pic: [],
      hotrecom: []
    }
  },
  created () {
    this.getnewestalbumlist()
    this.gethotrec()
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
      console.log(this.hotrecom)
    }
  }
}
</script>

<style lang='less' scoped>
.first {
  height:70px;
  background-color:white;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.f1 {
  padding-left: 400px;
}
.f2 {
  padding-left: 425px;
}
.f3 {
  padding-right:600px;
}
a {
  color:black;
  text-decoration: none;
  padding-left:15px
}
.second {
  height:38px;
  background-color: red;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.third {
  height:292px;
  background-color: pink;
}
input {
  border:0;
  border-bottom:1px solid #4a4a4a;
  padding:0;
  width:130px;
  transition:width .3s;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap
}
.hah {
  border-radius: 15px;
  background-color: rgba(27, 27, 27, 0.1);
  color: black
}
img {
  margin-top:-300px;
}
.pturn-content {
  width: 729px;
  height: 292px;
  padding-left: 400px;
  overflow: hidden;
}
.alal {
  padding-top:150px;
}
.el-icon-service {
  position:absolute;
  color:deepskyblue;
  margin-left:-130px
}
.el-icon-video-play {
  position:absolute;
  color:deepskyblue;
  margin-left:-30px
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
  padding-left:400px;
}
.el-header {
  padding:0
}
.el-main {
  padding:0
}
</style>
