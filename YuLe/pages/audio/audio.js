function parseLyric(lrc) {
	    var lyrics = lrc.split("\n");
	    var lrcObj = {};
	    for(var i=0;i<lyrics.length;i++){
	        var lyric = decodeURIComponent(lyrics[i]);
	        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
	        var timeRegExpArr = lyric.match(timeReg);
	        if(!timeRegExpArr)continue;
	        var clause = lyric.replace(timeReg,'');
	        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
	            var t = timeRegExpArr[k];
	            var min = Number(String(t.match(/\[\d*/i)).slice(1)), sec = Number(String(t.match(/\:\d*/i)).slice(1));
	            var time = min * 60 + sec;
	            lrcObj[time] = clause;
	        }
	    }
	    return lrcObj;
	}

var musicLrc = {};

Page({
  onLoad:function(){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 80
        })
      }
    })


    musicLrc = parseLyric(that.data.music.lrc)
    console.log(musicLrc)
    wx.request({
      url: 'http://www.lhsb.online/CloudMusic/audio.php', 
      dataType:'json',
      success: function(res) {
       that.setData({
         musicList:res.data
       })
      }
    })
  },


  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    percent:0,
    scrollHeight:0,
    music: {
        id:0,
    poster:'http://www.lhsb.online/CloudMusic/1.jpg',
        name:'96猫 - 嘘の火花',
        author:'96猫',
       src:'http://www.lhsb.online/CloudMusic/1.mp3',
        lrc:`[ti:嘘の火花]
[ar:96猫]
[al:嘘の火花]
[by:kamijou]
[00:00.50]「嘘の火花」（谎言的火花）
[00:02.50]
[00:04.50]TV动画《人渣的本愿》OP片头曲 / TVアニメ「クズの本懐」OPテーマ
[00:06.50]
[00:08.50]作词/作曲/编曲：谷口尚久
[00:10.50]演唱：96猫
[00:12.50]
[00:16.05]一番大切なモノを【想将最珍惜的事物】
[00:18.65]一番大切にしたい【放在第一顺位珍爱着】
[00:21.12]そんな単純なことが【如此单纯的事情】
[00:23.63]今は一番できない【现在却是最难做到的】
[00:25.59]
[00:25.84]「もしも運命があるのならば【“若是说命运这种东西存在的话】
[00:28.54]アナタは運命の人なんです」【你便是我的命定之人”】
[00:31.22]そんな言葉【这样的话语】
[00:32.54]“今”を壊しそうで言えない【会把「现在」破坏殆尽 我因此而说不出口】
[00:35.77]
[00:35.97]近くにいても遠く感じる【近在咫尺却感到相距甚远】
[00:38.58]行ったり来たりしてるこの想い【踌躇不前的这份思念】
[00:41.22]「諦める」「諦めない」【“放弃” “不放弃”】
[00:44.11]終わらない花占い【没有结尾的花瓣占卜】
[00:46.18]
[00:46.38]宝箱の鍵を閉めたまま【宝箱被枷锁束缚】
[00:48.86]キラキラした想い出抱きしめ【一线光明将其锁紧】
[00:51.33]ほのかに色づいたカケラをため息に隠す【将泛红的片段 隐约地藏匿于声声叹息】
[00:58.77]
[01:06.62]目が合ったなら逸らさないで【对上了目光就别逃避了】
[01:09.51]秘められたこの嘘を見抜いてよ【看穿这隐藏起来的谎言吧】
[01:11.95]限界がもう分からないの【连界限也不知道在哪了】
[01:14.55]だから今は何も言わないで【所以啊现在请什么也別说了】
[01:16.95]
[01:21.44]苦しいよ【好痛苦啊】
[01:23.98]怖いほどアナタが好き【喜欢你到令人害怕的程度】
[01:27.75]
[01:32.55]物足りないなんて言わない【不会说不满足之类的话】
[01:35.19]どんなワガママも言わない【也不会说任何任性的话】
[01:37.68]何かが変わるのがイヤで【不想要有任何的改变】
[01:40.18]逃げ出すことも出来ない【因此就连逃跑也做不到】
[01:42.16]
[01:42.55]つい下を向いてしまうのは【不经意低头的举动】
[01:44.86]嘘つきの無意味な反抗　悪あがき【是骗子无意义的反抗 挣扎】
[01:47.87]怖い　悲しい　心　虚しさで溢れた【好害怕 好悲伤 心 被空虚填满了】
[01:52.44]
[01:52.64]体の中に散った火花は【在体内四散的烟火】
[01:55.16]アナタが好きだというシグナル【是 “喜欢你” 的信号】
[01:57.73]「報われる」「報われない」【“有回报” “没有回报”】
[02:00.54]そんなのは関係ない【跟这无关】
[02:02.75]
[02:02.95]澄み切って満たされたあの空【无比透彻的那片天空】
[02:05.38]いつか触れることが出来るなら【若有天能碰触到的话】
[02:07.87]いつまでも彷徨う微熱をため息に溶かそう【始终都彷徨着的微热 仿佛会被叹息给融化掉似的】
[02:14.84]
[02:17.85]間違いですか？【这是错误吗？】
[02:20.24]だとしてもアナタが好き【即便如此还是喜欢着你】
[02:23.86]
[02:33.66]全て見られてるのは分かってて【我知道你见证了一切过程】
[02:36.22]見てて欲しがって隠れてる【想要你发现又把想法隐藏起来】
[02:38.97]そんな自分許してるよ自分にだけ【能原谅我这副德行的 也只有我自己了】
[02:43.69]
[02:44.88]世界中の不安を集めて【若将世界上的不安聚集】
[02:47.53]閉じ込めたなら何が起こるの？【关在一起的话会如何呢？】
[02:49.83]無限に広がっていく【无限地逐渐扩大】
[02:53.08]とめどないこの妄想【无止境的这份妄想】
[02:55.07]
[02:55.27]心の中押さえつけるほど【压抑着内心的想法】
[02:57.72]反比例していく現実は【现实朝着反方向前进】
[03:00.22]もうダメ耐えきれないよ【已经不行了 没办法忍耐了】
[03:03.25]息ができなくなるよ【要变得无法呼吸了】
[03:08.53]
[03:09.97]気づいてよ【发现吧】
[03:12.67]この想い「アナタが好き」【“喜欢你” 的这份思念】
[03:15.69]
[03:15.89]目が合ったなら逸らさないで【对上了目光就别逃避了】
[03:18.32]秘められたこの嘘を見抜いてよ【看穿这隐藏起来的谎言吧】
[03:20.88]限界がもう分からないの【连界限也不知道在哪了】
[03:23.47]だから今は何も言わないで【所以啊现在请什么也别说了】
[03:25.92]
[03:30.55]苦しいよ【好痛苦啊】
[03:33.11]怖いほどアナタが好き【喜欢你到令人害怕的程度】
[03:36.63]
[03:37.63]☆ 中文歌词翻译 by 魁笙 @nicovideo （http://www.nicovideo.jp/watch/sm30686141） ☆
[03:39.63]
[03:41.63]☆ 中日对照Lrc by 上条の不幸 @萌动动漫论坛 （mddmm.com） ☆
[03:43.63]`,
      },

    musicList:[],
    musicText:''

  },

  playMusic:function(event){
    var idx = event.target.dataset.idx;
    var that = this;
    console.log(this.data.musicList[idx])
    that.setData({
      music: this.data.musicList[idx] // 我们获取到了一个下标，然后通过这个下标去查找musicList中的对应位置的对象，然后再把这个对象设置到music这个数据内容中
    })
    
    setTimeout(function(){
       that.audioCtx.play();
    },500)
   

      
  },

  endedHandle:function(){
    var that = this;
    var pos = 0;
    if( that.data.music.id >= that.data.musicList.length ){
      pos = 0;
    }else{
      pos = that.data.music.id;
    }

    var playingMusic= that.data.musicList[pos];
    that.setData({
      music: playingMusic
    })

    setTimeout(function(){
      that.audioCtx.play();
    },500)

  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(300)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  pro:function(event){
    var that = this;
    
    var second = parseInt(event.detail.currentTime);
    
    var per = event.detail.currentTime / event.detail.duration;

    that.setData({
      percent:parseInt(per*100),
      musicText: musicLrc[second]
    })
  }
})