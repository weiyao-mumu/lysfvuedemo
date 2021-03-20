<template>
    <div class="organization">
        <!-- 组织团队 -->
        <div class="content-title">
           <div class="content_left">
                <el-input
              placeholder="寻找组织"
                v-model="input3"
               class="input-with-select"
               size="mini">
               <template #append>
               <el-button icon="el-icon-search"></el-button>
               </template>
            </el-input>
           </div>
        </div>
        <!-- 团队列表 -->
        <div class="team_list">
             <div class="team_list-item"
              @mouseenter="a=index" @mouseleave="a=-1"
              v-for="(item, index) in teamList" :key="index">
                <div class="team_list-item-img">
                    <img :src="item.organization_imgUrl" alt="">
                </div>
                <h5>{{item.title}}</h5>
                <p>{{item.slogan}}</p>
                <div class="details" v-show="index==a">
                      <el-button plain size="small">查看详情</el-button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>


export default ({
  name:"Organization",
  data() {
      return {
          input3:"",
          a:"",
          teamList:[
              {
                  id:"1",
                  organization_imgUrl:'https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614781476912.png',
                  title:'洛阳师范学院志愿队',
                  slogan:"无感佩戴，一切变得简单",
              },{
                    id:"2",
                  organization_imgUrl:'https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614781476912.png',
                  title:'洛阳师范学院志愿队',
                  slogan:"无感佩戴，一切变得简单",
              },{
                 id:"3",
                  organization_imgUrl:'https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614781476912.png',
                  title:'洛阳师范学院志愿队',
                  slogan:"无感佩戴，一切变得简单",
              },{
                   id:"4",
                  organization_imgUrl:'https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614781476912.png',
                  title:'洛阳师范学院志愿队',
                  slogan:"无感佩戴，一切变得简单",
              },{
                   id:"5",
                  organization_imgUrl:'https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614781476912.png',
                  title:'洛阳师范学院志愿队',
                  slogan:"无感佩戴，一切变得简单",
              }
          ],
      }
  },
  methods: {
      divShow(){
          this.isShow = true;
      },
      divNoShow(){
          this.isShow = false;
      }
  },

})
</script>


<style scope>
.organization{
width: 1232px;
  height: 1500px;
  margin: 0 auto;
  background-color: #eee;
  overflow: hidden;
}
.content-title{
    overflow: hidden;
    margin: 20px 0;
    padding-left: 20px;
    width: 100%;
    height: 40px;
    /* background-color: pink; */
}
.content_left{
    margin-top: 5px;
    width: 210px;
}
.team_list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    /* height: 500px; */
    background-color: #eee;
    perspective: 800px;
}
.team_list-item{
    box-sizing: border-box;
    display: flex;
    margin-top: 5px;
    width: 24.8%;
    height: 403px;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    background-color:#FFFFFF;
}
.team_list-item:before:hover,.team_list-item:after:hover{
    content: "";
    position:absolute; 
    top:20px;bottom: 22px;  
    background: transparent; 
    box-shadow: 0 8px 20px rgba(0,0,0,0.7);  
    z-index: -1; 
    background: #fff; 
}
.team_list-item:before:hover{ 
    left: 22px;  
    right:12px; 
    transform: skew(-12deg) rotate(-4deg); 
}
.team_list-item:after:hover{  
    left: 12px;  
    right:22px; 
    transform: skew(12deg) rotate(4deg); 
}
.team_list-item:hover{
    box-shadow: 0 1px 4px rgba(0,0,0,0.3),0 0 40px rgba(0,0,0,0.1) inset;
    animation:an 2s;
    -webkit-animation:an 2s;
    animation-fill-mode: forwards;/*当动画完成时，动画会停留在最后一帧。*/
}
.team_list-item-img{
    width: 150px;
    height: 150px;
    /* background-color:antiquewhite; */
    margin: 10px 10px 10px 10px;

}
.team_list-item-img>img{
    width: 100%;
    height: 100%;
}
.team_list-item>h5{
    margin: 10px 0;
}
.team_list-item p{
    font-size: 14px;
    color: #6c6c6c;
}
.details{
    margin-top:50px ;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    /* background-color: pink; */
}
@keyframes an {
    0%{
        transform: translateZ(0px);
    }
    50%{
        transform: translateZ(5px);
    }
    100%{
        transform: translateZ(10px);
    }
}
</style>
