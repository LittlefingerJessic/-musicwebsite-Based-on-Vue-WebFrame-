<template>
<div class='first'><div class='sad'>
<el-container>
  <el-aside >
    <el-menu
      class="el-menu-vertical-demo">
      <el-menu-item index="4156" style='padding-top:50px;font-weight:bold'>
        <span slot="title">我的电台(20)</span>
      </el-menu-item>
      <el-submenu index="100" style='padding-top:50px;font-weight:bold'>
        <template slot="title">
          <span>创建的歌单(12)</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="100-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="150" style='font-weight:bold'>
        <template  slot='title'>
          <span>创建的歌单(12)</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="150-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu></el-aside>
  <el-main><div><img class='third' src="https://p1.music.126.net/xoJZ7lvXrYQ-EkBZxvA5DA==/109951165440925894.jpg?param=200y200" alt="">
  <span style='font-size:20px;padding-left:20px'>我喜欢的音乐</span><span class='forth'><img src="http://p1.music.126.net/fxsvhevZ1e3X1MjbWKEojw==/7806532558307528.jpg?param=35y35" alt=""><span style='padding-left:10px'>一想到你呀</span><span style='padding-left:10px'>2015-07-28 创建</span></span>
  </div><br><br>
  <span style='font-size:20px'>歌曲列表</span><span style='padding-left:20px'>391首歌</span><span style='padding-left:480px'>播放： 3644次</span>
   <el-table
    :data="gedansongs"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="歌曲标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="dt"
      label="时长"
      :formatter="formatter"
      width="180">
    </el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手">
    </el-table-column>
    <el-table-column
      prop="al.name"
      label="专辑">
    </el-table-column>
  </el-table>
  </el-main>
</el-container></div></div>
</template>

<script>
export default {
  data () {
    return {
      cookie: '',
      gedansongs: [
      ]
    }
  },
  created () {
    this.getged()
  },
  methods: {
    async getged () {
      this.cookie = window.sessionStorage.getItem('cookie')
      const { data: res } = await this.$http.get('playlist/detail?id=93231010', {
        params: {
          cookie: this.cookie
        }
      })
      var a = res.playlist.trackIds
      var b = []
      for (var i = 0; i < a.length; i++) {
        b.push(a[i].id)
      }
      var c = b.toString()
      const { data: nsam } = await this.$http.get('/song/detail', {
        params: {
          ids: c,
          cookie: this.cookie
        }
      })
      this.gedansongs = nsam.songs
    },
    formatter (row, column) {
      var bc = '0' + parseInt(Math.round(row[column.property] / 1000) / 60).toString()
      var ac = parseInt(Math.round(row[column.property] / 1000) % 60).toString()
      return bc + ':' + ac
    }
  }
}
</script>

<style lang='less' scoped>
.sad {
    width:980px;
    height:100%
}
.first {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
.third {
    border:2px solid #CFD0CF
}
.forth {
    position:absolute;
    margin-top:120px;
    margin-left:-120px
}
</style>
