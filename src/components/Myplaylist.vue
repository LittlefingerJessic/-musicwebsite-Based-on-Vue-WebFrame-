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
          <span>我的歌单({{playge.length}})</span>
        </template>
        <el-menu-item-group v-for='item in playge' :key='item.id'>
          <el-menu-item @click='dashi' :index="item.id+''">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu></el-aside>
  <el-main><div><img class='third' src="https://p1.music.126.net/xoJZ7lvXrYQ-EkBZxvA5DA==/109951165440925894.jpg?param=200y200" alt="">
  <span class='gbcz' style='font-size:20px;padding-left:20px'>我喜欢的音乐</span><span class='forth'><img src="http://p1.music.126.net/fxsvhevZ1e3X1MjbWKEojw==/7806532558307528.jpg?param=35y35" alt=""><span style='padding-left:10px'>一想到你呀</span><span style='padding-left:10px'>2015-07-28 创建</span></span>
  </div><br><br>
  <span style='font-size:20px'>歌曲列表</span><span style='padding-left:20px'>391首歌</span><span style='padding-left:480px'>播放： 3644次</span>
   <el-table
    :data="gedansongs"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="歌曲标题">
    </el-table-column>
    <el-table-column
      prop="dt"
      label="时长"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="ar[0].name"
      label="歌手">
    </el-table-column>
    <el-table-column
      prop="al.name"
      label="专辑">
    </el-table-column>
     <el-table-column >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index,scope.row.id)"><i style='font-size:30px' class='el-icon-video-play'></i></el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style='font-size:20px'>评论<span style='padding-left:400px;font-size:10px'>共{{total}}条评论</span></div>
  <img style='width:50px;height:50px' :src='headph' alt=""><el-input style='width:900px;padding-left:50px;height:60px' placeholder="请输入评论"></el-input><el-button type='primary' style='float:right'>评论</el-button>
  <div>热门评论</div><div style='padding-bottom:20px' v-for='site1 in hotcomments' :key='site1.commentId'>
<img style='width:50px;height:50px' :src='site1.user.avatarUrl' alt=""><span style='padding-left:20px'>{{site1.user.nickname}}:{{site1.content}}</span><div style='float:right'>{{site1.likedCount}}点赞<span>回复</span></div></div>
<div>最新评论</div><div style='padding-bottom:20px' v-for='site in comments' :key='site.commentId'>
<img style='width:50px;height:50px' :src='site.user.avatarUrl' alt=""><span style='padding-left:20px'>{{site.user.nickname}}:{{site.content}}</span><div style='float:right'>{{site.likedCount}}点赞<span>回复</span></div></div>
   <div class="block" style='padding-bottom:40px'>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="(queryInfo.offset/5)+1"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  </el-main>
</el-container></div></div>
</template>
<script>
export default {
  inject: ['reload'],
  data () {
    return {
      cookie: '',
      gedansongs: [],
      geid: [],
      mp3: '',
      playge: [],
      headph: '',
      nickname: '',
      comments: [],
      hotcomments: [],
      total: '',
      queryInfo: {
        id: 5377394548,
        limit: 5,
        offset: 0
      }
    }
  },
  created () {
    this.getged()
  },
  methods: {
    handleSizeChange (newSize) {
      console.log(newSize)
      this.queryInfo.limit = newSize
      this.getged()
    },
    handleCurrentChange (newPage) {
      console.log(newPage)
      this.queryInfo.offset = (newPage - 1) * 5
      this.getged()
    },
    async dashi (key) {
      document.getElementsByClassName('gbcz')[0].innerHTML = key.$el.innerText
      this.cookie = window.sessionStorage.getItem('cookie')
      const { data: res } = await this.$http.get('playlist/detail', {
        params: {
          id: key.index,
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
    async handleEdit (index, row) {
      window.sessionStorage.setItem('url', '')
      window.sessionStorage.setItem('id', row)
      const { data: res } = await this.$http.get('/song/url', {
        params: { id: row }
      })
      const { data: red } = await this.$http.get('/song/detail', {
        params: { ids: row }
      })
      window.sessionStorage.setItem('time', red.songs[0].dt)
      this.mp3 = res.data[0].url
      window.sessionStorage.setItem('url', this.mp3)
      this.reload()
    },
    async getged () {
      this.cookie = window.sessionStorage.getItem('cookie')
      this.headph = window.sessionStorage.getItem('touxiang')
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
      window.sessionStorage.setItem('index', b)
      var c = b.toString()
      const { data: nsam } = await this.$http.get('/song/detail', {
        params: {
          ids: c,
          cookie: this.cookie
        }
      })
      this.gedansongs = nsam.songs
      const { data: nba } = await this.$http.get('/user/playlist', {
        params: {
          uid: 3940321498,
          cookie: this.cookie
        }
      })
      this.playge = nba.playlist
      const { data: fsl } = await this.$http.get('/user/detail', {
        params: {
          uid: window.sessionStorage.getItem('uid'),
          cookie: this.cookie
        }
      })
      this.nickname = fsl.profile.nickname
      const { data: dasl } = await this.$http.get('/comment/playlist', { params: this.queryInfo })
      this.comments = dasl.comments
      this.hotcomments = dasl.hotComments
      this.total = dasl.total
    },
    formatter (row, column) {
      var bc = '0' + parseInt(Math.round(row[column.property] / 1000) / 60).toString()
      var ac = parseInt(Math.round(row[column.property] / 1000) % 60)
      if (ac < 10) return bc + ':0' + ac.toString()
      return bc + ':' + ac.toString()
    }
  }
}
</script>

<style lang='less' scoped>
.sad {
    width:1380px;
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
