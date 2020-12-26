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
  <el-menu-item @click='gsn' index="2">发现音乐</el-menu-item>
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
  <div class='waniz'><div class='plabd'><div  style='font-size:20px;margin-top:10px' class='glyphicon glyphicon-step-backward'></div><i style='font-size:35px;margin-top:5px' @click='playmusic' class='doub glyphicon glyphicon-play-circle'></i>
  <div style='font-size:20px;margin-top:10px' class='glyphicon glyphicon-step-forward'></div><span><img style='width:34px;height:34px;margin-top:5px' :src="info[0].al.picUrl" alt=""></span>
  <span>{{ info[0].name}}<span style='padding-left:8px'>{{info[0].ar[0].name}}</span><div class='prom'><div class='promc'></div></div></span><div class='pzsh'><div @click='adt' class='zszq'><div class='core'></div></div></div>
  <span class='wuliao' style='margin-top:15px;padding-left:480px'>00:00/{{stime}}</span><span style='margin-top:15px' class='el-icon-folder-add'></span><span style='margin-top:15px' class='glyphicon glyphicon-share'></span>
  <span style='margin-top:15px' class='glyphicon glyphicon-volume-up'></span><span style='margin-top:15px' class='glyphicon glyphicon-retweet'></span>
  <span style='margin-top:15px' class='el-icon-notebook-2'>369</span></div></div></div>
  <audio class='bgin' :src="mp3"></audio>
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
      headerph: '',
      mp3: '',
      info: [],
      stime: '',
      onoff: true,
      dt: ''
    }
  },
  created () {
    this.getgs()
  },
  methods: {
    async adt () {
      var volad = document.getElementsByClassName('bgin')[0]
      var fczs = document.getElementsByClassName('wuliao')[0]
      var spot = document.getElementsByClassName('zszq')[0]
      var bar = document.getElementsByClassName('prom')[0]
      var spot1 = document.getElementsByClassName('pzsh')[0]
      var cha = bar.offsetWidth - spot.offsetWidth
      var index = 0
      var dawds = document.getElementsByClassName('promc')[0]
      var mouseX, yidong, spotpos
      var evt = new Event('change')// 本身的事件
      var cpj = Math.round(window.sessionStorage.getItem('time') / 1000)
      init()
      function init () {
        spot.addEventListener('mousedown', mouseDownclickHandler)
        document.addEventListener('mousemove', mouseMoveclickHandler)
        document.addEventListener('mouseup', mouseUpclickHandler)
        document.addEventListener('change', changeHandler)
      }
      function mouseDownclickHandler (e) {
        index = 1
        // cax = spot.offsetLeft  按钮到控制器的距离
        mouseX = e.clientX // 到左边绝对距离
      }
      function mouseMoveclickHandler (e) {
        if (index === 1) {
          yidong = e.clientX - mouseX// 鼠标移动距离
          spotpos = yidong
          if (spotpos < 0) {
            spotpos = 0
          }
          if (spotpos > cha) {
            spotpos = cha
          }
          dawds.style.cssText = 'width:' + (spotpos + 5) + 'px;height:100%;background-color: red;border-radius:5px'
          var t = Math.round((spotpos / 480) * cpj)
          volad.currentTime = t
          spot1.style.cssText = 'margin-left:' + (spotpos - 525) + 'px;margin-top:14px;'
          fczs.style.cssText = 'margin-top:15px;padding-left:' + (480 - spotpos) + 'px'
          evt.elem = this// 当前指向 对象
          document.dispatchEvent(evt)// 朝谁发送 抛发
        }
      }
      function mouseUpclickHandler (e) {
        index = 0
        evt.elem = this// 当前指向 对象
        document.dispatchEvent(evt)// 朝谁发送 抛发
      }
      function changeHandler (e) {
        // console.log(e)
      }
    },
    async playmusic () {
      var pl = document.getElementsByClassName('bgin')[0]
      var db = document.getElementsByClassName('doub')[0]
      var fczs = document.getElementsByClassName('wuliao')[0]
      const { data: res } = await this.$http.get('/song/detail', { params: { ids: window.sessionStorage.getItem('id') } })
      var a = res.songs[0].dt
      var bc = '0' + parseInt(Math.round(a / 1000) / 60).toString()
      var ac = parseInt(Math.round(a / 1000) % 60).toString()
      var kk = bc + ':' + ac
      var gettime = parseInt(fczs.innerHTML.split('/')[1].split(':')[0]) * 60 + parseInt(fczs.innerHTML.split('/')[1].split(':')[1])
      pl.addEventListener('timeupdate', function () {
        var timd = Math.round(Math.floor(this.currentTime * 100) / 100)
        var xxd = Math.round((timd / gettime) * 480)
        if (timd < 10) { fczs.innerHTML = '00:0' + timd + '/' + kk }
        if (timd > 9) { if (timd < 60) { fczs.innerHTML = '00:' + timd + '/' + kk } }
        if (timd > 59) {
          if ((timd % 60) < 10) { fczs.innerHTML = '0' + Math.round(timd / 60) + ':0' + Math.round(timd % 60) + '/' + kk }
          if ((timd % 60) > 9) { fczs.innerHTML = '0' + Math.floor(timd / 60) + ':' + Math.round(timd % 60) + '/' + kk }
        }
        if ((gettime - timd) < 1) { db.className = 'doub glyphicon glyphicon-play-circle' }
        var cxd = xxd - 525
        document.getElementsByClassName('pzsh')[0].style.cssText = 'margin-left:' + cxd + 'px;margin-top:14px;'
        document.getElementsByClassName('promc')[0].style.cssText = 'width:' + (xxd + 5) + 'px;height:100%;background-color: red;border-radius:5px'
        fczs.style.cssText = 'margin-top:15px;padding-left:' + (480 - xxd) + 'px'
      })
      if (this.onoff === true) {
        pl.play()
        db.className = 'doub glyphicon glyphicon-pause'
      } else {
        pl.pause()
        db.className = 'doub glyphicon glyphicon-play-circle'
      }
      this.onoff = !this.onoff
    },
    async getgs () {
      this.mp3 = window.sessionStorage.getItem('url')
      const { data: res } = await this.$http.get('/song/detail', { params: { ids: window.sessionStorage.getItem('id') } })
      this.info = res.songs
      var a = this.info[0].dt
      window.sessionStorage.setItem('time', a)
      var bc = '0' + parseInt(Math.round(a / 1000) / 60).toString()
      var ac = parseInt(Math.round(a / 1000) % 60).toString()
      this.stime = bc + ':' + ac
    },
    rfq () {
      this.$router.push('/find')
    },
    gsn () {
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
.promc {
  width:5px;
  height:100%;
  background-color: red;
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
