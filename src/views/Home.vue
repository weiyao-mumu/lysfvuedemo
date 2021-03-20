<template>
    <div class="home">
      <!-- 首页banner图 -->
        <div class="home-img">
            <!-- <img src="../assets/banner_pic1.png" alt=""> -->
            <div class="txt">
              <h1>洛阳志愿者</h1>
              <p>一起来 更精彩 送人玫瑰 手有余香</p>
            </div>
        </div>
<!-- 中部分类列表 -->
      <div class="classification">
        <div class="classification-left">
            <div class="classification-list">
              <i class="icon icon6 icon-xiangcun iconfont"></i>
                乡村振兴
            </div>
            <div class="classification-list">
              <i class=" icon icon2 icon-chengshi iconfont"></i>
                城镇保护
            </div>
            <div class="classification-list">
              <i class=" icon icon5 icon-anquan iconfont"></i>
                平安联防
            </div>
            <div class="classification-list">
              <i class=" icon icon3 icon-tiyukebu iconfont"></i>
                  文化体育
            </div>
            <div class="classification-list">
              <i class=" icon icon5 icon-jiaotong iconfont"></i>
                文明交通
            </div>
            <div class="classification-list">
              <i class=" icon icon4 icon-lvyou iconfont"></i>
                文明旅游
            </div>
        </div>
        <div class="classification-middle">
          <div class="num_item_box">
              <h2 class="num_item_title">实名注册志愿者人数 (人)</h2>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
               <ol class="number_show">
                <li class="num">0</li>
              </ol>
          </div>

        <div class="num_item_box">
              <h2 class="num_item_title">志愿服务组织及团队数 (个)</h2>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
               <ol class="number_show">
                <li class="num">0</li>
              </ol>
          </div>

          <div class="num_item_box">
              <h2 class="num_item_title">志愿服务组织及团队数 (个)</h2>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
               <ol class="number_show">
                <li class="num">0</li>
              </ol>
          </div>
          <div class="num_item_box">
              <h2 class="num_item_title">累计开展志愿活动数 (个)</h2>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
               <ol class="number_show">
                <li class="num">0</li>
              </ol>
          </div>
          <div class="num_item_box">
              <h2 class="num_item_title">累计志愿服务时长 (万小时)</h2>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
              <ol class="number_show">
                <li class="num">0</li>
              </ol>
               <ol class="number_show">
                <li class="num">0</li>
              </ol>
          </div>
        </div>
        <div class="classification-right">
          <div class="classification-list">
              <i class=" icon icon6 icon-laji iconfont"></i>
                  垃圾分类
            </div>
            <div class="classification-list">
              <i class=" icon icon3 icon-airudiantubiaohuizhi-zhuanqu_laodongmofan iconfont"></i>
              义务劳动
            </div>
            <div class="classification-list">
              <i class=" icon icon2 icon-canjiren iconfont"></i>
              阳光助残
            </div>
            <div class="classification-list">
              <i class=" icon icon2 icon-aixin iconfont"></i>
                河洛关爱
            </div>
            <div class="classification-list">
              <i class=" icon icon5 iconfont icon-mingxinghuodong"></i>
                热门活动
            </div>
            <div class="classification-list">
              <i class=" icon  icon2 icon-fensi iconfont"></i>
                青春情暖
            </div>
        </div>

      </div>

<!-- 志愿者名单 -->
<div class="volunteers">
  <!-- 志愿者名单 -->
  <div class="volunteers-title">
    <div class="volunteers-title-left">
      <img src="@/assets/radio_wave.png" alt="">
      <h4>活跃志愿者</h4>
    </div>
    <div class="volunteers-title-right">
      <a href="#">换一换</a>
    </div>
  </div>
  <!--志愿者列表  -->
  <div class="volunteers-list">
    <div class="list-item" v-for="(item,index) in listItem" :key="index">
        <p>{{item.name}}</p>
        <small>时长: {{item.time}}</small>
    </div>
  </div>
  <!-- 志愿者公告 -->
  <div class="note">
    <!-- 右边公告 -->
    <div class="note-left">
      <!-- 公告标题 -->
      <div class="note-left-title">
          <ul>
            <li>
              <router-link to="/Home/consult"> 志愿资讯</router-link>
            </li>
            <li>
              <router-link to="/Home/information">信息公告</router-link>
            </li>
            <li>
              <router-link to="/Home/culture">志愿文化</router-link>
            </li>
            <li>
              <router-link to="/Home/law">政策法规</router-link>
            </li>
          </ul>
     </div>
     <!-- 公告内容 -->
     <!-- <div class="note-left-content"> -->
        <router-view></router-view>
     <!-- </div> -->
    </div>
    <!-- 左边信息 -->
    <div class="note-right">
      <div class="note-right-title">
        <i class="icon1 el-icon-lollipop"></i>
        <h4>志愿排行</h4>
      </div>
      <div class="note-right-list">
          <div class="tt note-right-list-left">
                <h4>志愿者</h4>
                <ol>
                  <li class="note-right-list-left-li-list" v-for="(item,index) in areaPerson" :key="index">
                    <span>
                        <em class="num">{{index+1}}</em>
                        {{item.areaName}}
                    </span>
                    <span class="dd">
                        {{item.personNumber}}
                        <em>人</em>
                    </span>
                  </li>
                </ol>
          </div>
           <div class="note-right-list-left">
                     <h4>志愿服务时长</h4>
                <ol>
                  <li class="note-right-list-left-li-list" v-for="(item,index) in areaPersonTime" :key="index">
                    <span>
                        <em class="num">{{index+1}}</em>
                        {{item.areaName}}
                    </span>
                    <span class="dd">
                        {{item.personNumber}}
                        <em>小时</em>
                    </span>
                  </li>
                </ol>
          </div>
      </div>
    </div>
  </div>
</div>

</div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
    // 部分志愿者人员名单
    listItem:[{
      name:"李玉森",
      time:10
    },{
      name:"王小二",
      time:88
    },{
      name:"李二牛",
      time:5
    },{
      name:"张晓明",
      time:50
    },{
      name:"李三中",
      time:89
    },{
      name:"肖丽尔",
      time:45
    },{
      name:"尤宪超",
      time:29
    },{
      name:"奈静",
      time:28
    },{
      name:"李二牛",
      time:5
    },{
      name:"李二牛",
      time:5
    },{
      name:"李二牛",
      time:5
    },{
      name:"李二牛",
      time:5
    },{
      name:"李二牛",
      time:5
    },{
      name:"李二牛",
      time:5
    },{
      name:"李二牛",
      time:5
    }
    ],
    // 区模块志愿者人总数 涧西区,西工区,老城区,廛河区,洛龙区,吉利区 偃师市 栾川,洛宁,伊县,宜阳,汝阳
    areaPerson:[{
          areaName:"涧西区",
          personNumber:1300
        },{
          areaName:"西工区",
          personNumber:2000
        },{
          areaName:"老城区",
          personNumber:2000
        },{
          areaName:"廛河区",
          personNumber:300
        },{
          areaName:"洛龙区",
          personNumber:4000
        },{
          areaName:"吉利区",
          personNumber:2309
        },{
          areaName:"偃师市",
          personNumber:2042
        },{
          areaName:"栾川",
          personNumber:1609
        },{
          areaName:"伊县",
          personNumber:2332
        },{
          areaName:"宜阳",
          personNumber:2121
        },{
          areaName:"汝阳",
          personNumber:111
        }],
    areaPersonTime:[{
          areaName:"涧西区",
          personNumber:200
        },{
          areaName:"西工区",
          personNumber:2112
        },{
          areaName:"老城区",
          personNumber:203200
        },{
          areaName:"廛河区",
          personNumber:312321
        },{
          areaName:"洛龙区",
          personNumber:42323
        },{
          areaName:"吉利区",
          personNumber:4543543
        },{
          areaName:"偃师市",
          personNumber:32132
        },{
          areaName:"栾川",
          personNumber:323213
        },{
          areaName:"伊县",
          personNumber:3213
        },{
          areaName:"宜阳",
          personNumber:43344
        },{
          areaName:"汝阳",
          personNumber:55454
        }]
    }
  },
  components: {
  }
  }
</script>


<style scoped>

.footer p{
  margin-top: 10px;
}
.router-link-active{
   background-color:#DB4552;
  /* border-radius: 30px; */
}
.home{
  width: 1250px;
  /* height: 1500px; */
  margin: 0 auto;
  background-color: #eee;
}
.home-img{
  width: 100%;
  height: 250px;
  /* background-color: pink; */
  background:url("../assets/banner_pic1.png") no-repeat;
background-size:cover;
overflow: hidden;
}
.home-img>img{
  margin: 0 auto;
  width: 100%;
}
.txt{
  width: 300px;
  height: 100px;
  /* background-color: pink; */
  z-index: 999;
  margin: 75px auto;
  text-align: center;
  line-height:60px;

}
.dd{
  font-size: 14px;
  color: #6c6c6c;
}
.classification{
  display: flex;
  margin-top: 20px;
  width: 100%;
  height: 380px;
  /* background-color: pink; */
}
.classification-left{
  display: flex;
  width: 443px;
  height: 380px;
  /* background-color:bisque; */
  flex-wrap: wrap;
}
.classification-middle{
  width: 380px;
  height: 380px;
  background-color:#DB4552;
  text-align: center;
  color:#fff;
}
.classification-right{
     display: flex;
  width: 443px;
  height: 380px;
  /* background-color:bisque; */
  flex-wrap: wrap;
}
.classification-list{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 217px;
  height: 126px;
  /* background-color:blueviolet; */
 flex-direction: column;
}
.icon{
  font-size: 42px;
}
.num_item_box{
      text-align: center;
    font-size: 0;
    margin-bottom: 5px;
}
.num_item_title{
      font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
}
.number_show {
  display: inline-block;
    font-size: 14px;
}
.number_show num{
background-position: left -40px;
}

.number_show  li{
      width: 30px;
    height: 40px;
    float: left;
    margin-right: 2px;
    font-size: 28px;
    color: #FFFFFF;
    background-color: #ff8814;
    margin-left: 2px;
}
.volunteers{
  margin-top: 10px;
  width: 100%;
  height: 300px;
  /* background-color:beige; */
}
.volunteers-title{
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  /* background-color: pink; */
}
.volunteers-title-left{
  display: flex;
  width: 140px;
  height: 40px;
  line-height: 40px;
  justify-content: center;
  align-items: center;
}
.volunteers-title-left>img{
  width: 17px;
  height: 19px;
}
.volunteers-title-right{
  display: flex;
  /* background-color: pink; */
  width: 50px;
  height: 40px;
  margin-right: 20px;
  line-height: 40px;
}
.volunteers-title-right a{
  color: #6c6c6c;
  font-size: 12px;
}
.volunteers-title-right a:hover{
  color: #DB4552;
}
.volunteers-list{
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 98%;
  height: 210px;
  box-shadow: 0 0 10px #fff;
  background-color: #fff;
}
.list-item{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
  height: 70px;
  /* background-color:#ff8814; */
}
.list-item>p{
  margin-bottom: 5px;
}
.list-item>small{
  color: #6c6c6c;
  font-size: 12px;
}
.note{
  display: flex;
  width: 100%;
  height: 400px;
  margin-top: 20px;
  justify-content: space-between;
  background-color: #eee;
}
.note-left{
  width: 59%;
  height: 400px;
  /* background-color:#DB4552; */
}
.note-left-title {
  display: flex;
  width: 100%;
  height: 40px;
  /* background-color: pink; */
}
.note-left-title ul{
    display: flex;
      width: 100%;
      height: 40px;
}
.note-left-title ul li{
  line-height: 40px;
  width: 100px;
  height: 40px;
  
  font-weight: bold;
}
.num{
  margin-right: 8px;
}
.note-left-title ul li a{
  display: inline-block;
  width: 70px;
  height: 30px;
  /* margin-top: 20px; */
  text-align: center;
  line-height: 30px;
  color: #000;
}
.note-left-title ul li a:hover{
  background-color:#DB4552;
  color: #FFFFFF;
}
.note-left-title ul {
  margin-left: 10px;
}
.note-right{
    width: 40%;
  height: 400px;
  /* background-color:#ff8814; */
}
.note-left-content{
  width: 100%;
  height: 360px;
  background-color: #fff;
}
.note-right-title{
   display: flex;
   /* justify-content: center; */
   align-items: center;
  width: 100%;
  height: 40px;
  /* background-color: pink; */
}
.icon1{
  font-size: 24px;
  color: #ff8814;
 margin: 0,5px;
}
.note-right-list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 360px;
  /* background-color: #fff; */
}
.note-right-list-left{
  width: 49.5%;
  background-color:#fff;
}
.tt{
  border-right: 1px solid #ccc;
  /* background-color: #fff; */
}
.note-right-list-left>h4{
  text-align: center;
  margin-top: 10px;
}
.note-right-list-left-li-list{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-top: 5px;
  line-height: 30px;
}
.note-right-list-left-li-list span:nth-child(1){
  margin-left: 10px;
}
.note-right-list-left-li-list span:nth-child(2){
  margin-right: 10px;
}
.note-right-list-left-li-list:nth-child(1){
  margin-top: 10px;
}
.icon6{
  color: #ff8814;
}
.icon2{
  color: #DB4552;
}
.icon3{
  color: slateblue;
}
.icon4{
  color: violet;
}
.icon5{
  color: green;
}
.icon6{
  color: fuchsia;
}
</style>