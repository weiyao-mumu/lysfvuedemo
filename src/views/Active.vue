<template>
    <div class="active">
        <!-- 分类导航 -->
        <div class="nav">
            <ul>
                <li v-for="(item,index) in navList" :key="index" @click="clicknav(index)">{{item}}</li>
                
            </ul>
        </div>
        <!-- 活动内容 -->
        <div class="content">
            <active-list :cardList="cardList"></active-list>
            
            <div class="content_bottom">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                         v-model:currentPage="currentPage1"
                        :page-size="pagesize"
                        layout="total, prev, pager, next"
                        :total="80">
                    </el-pagination>
            </div>
        </div>
    </div>
    
</template>

<script>
import ActiveList from '@/components/ActiveList.vue'
export default {
    name:"Active",
    data() {
        return {
            navList:['全部','禁毒活动','青少年服务','敬老助残','扶贫帮困','治安防控','环境保护','康乐文化','便民服务','志愿防疫','其它'],
            cardList:[{
            id:1,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210309/1615255485064.png",
            personNum:50,
            percentage:100,
            title:"志愿者服务",
            address:"洛阳市洛龙区伊滨校区洛阳师范学院",
            organization: "洛阳师范学院信息技术学院",
            interest:"1000",
            recruit:"202",
            focus:"39"
        },{
            id:2,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614782692460.png",
            personNum:500,
            percentage:25,
            title:"心理咨询室志愿者",
            address:"广东省广州市番禺区广州南华工贸高级技工学校教学楼心理咨询室",
            organization: "广州青年志愿者协会",
            interest:"112",
            recruit:"2000",
            focus:"212"
        },{
            id:3,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614782058763.gif",
            personNum:4,
            percentage:18,
            title:"安全卫士-广州志愿驿站旗舰站日常安全应急志愿服务",
            address:"河南省洛阳市越秀区北京路312号一楼（南门）",
            organization: "广州青年志愿者协会",
            interest:"1121",
            recruit:"22",
            focus:"1213"
        },{
            id:3,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614782058763.gif",
            personNum:4,
            percentage:18,
            title:"安全卫士-广州志愿驿站旗舰站日常安全应急志愿服务",
            address:"河南省洛阳市越秀区北京路312号一楼（南门）",
            organization: "广州青年志愿者协会",
            interest:"1121",
            recruit:"22",
            focus:"1213"
        },{
            id:3,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614782058763.gif",
            personNum:4,
            percentage:18,
            title:"安全卫士-广州志愿驿站旗舰站日常安全应急志愿服务",
            address:"河南省洛阳市越秀区北京路312号一楼（南门）",
            organization: "广州青年志愿者协会",
            interest:"1121",
            recruit:"22",
            focus:"1213"
        }],
        // 每页5条
        pagesize:5,
        // 当前页
        currentPage1:1,
        // 总数
        total:80
       }
    },
    methods: {
        clicknav(index){
        console.log(index);
            if(index==1){
             this.cardList = [{
                        id:1,
                        img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210309/1615255485064.png",
                        personNum:50,
                        percentage:100,
                        title:"志愿者服务",
                        address:"洛阳市洛龙区伊滨校区洛阳师范学院",
                        organization: "洛阳师范学院信息技术学院",
                        interest:"1000",
                        recruit:"202",
                        focus:"39"
                    }]
            }else {
                this.cardList = [{
            id:1,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210309/1615255485064.png",
            personNum:50,
            percentage:100,
            title:"志愿者服务",
            address:"洛阳市洛龙区伊滨校区洛阳师范学院",
            organization: "洛阳师范学院信息技术学院",
            interest:"1000",
            recruit:"202",
            focus:"39"
        },{
            id:2,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614782692460.png",
            personNum:500,
            percentage:25,
            title:"心理咨询室志愿者",
            address:"广东省广州市番禺区广州南华工贸高级技工学校教学楼心理咨询室",
            organization: "广州青年志愿者协会",
            interest:"112",
            recruit:"2000",
            focus:"212"
        },{
            id:3,
            img:"https://www.125cn.net/upload/orgRegisterPic/idcard/20210303/1614782058763.gif",
            personNum:4,
            percentage:18,
            title:"安全卫士-广州志愿驿站旗舰站日常安全应急志愿服务",
            address:"河南省洛阳市越秀区北京路312号一楼（南门）",
            organization: "广州青年志愿者协会",
            interest:"1121",
            recruit:"22",
            focus:"1213"
        }]
            }
            
        },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    components:{
        ActiveList
    }
}
</script>


<style  scoped>
.active{
     width: 1247px;
  /* height: 1500px; */
  margin: 0 auto;
  background-color: #eee;
}
.nav{

    margin-top: 20px;
    margin-left: 20px;
    width: 900px;
    /* height: 70px; */
    /* background-color: pink; */
}
.nav ul{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
}
.nav ul li{
    margin-top: 5px;
    margin-left: 15px;
    text-align: center;
    line-height:30px;
    width: 10%;
    height: 30px;
    background-color: #ccc;
    cursor: pointer;
    font-size: 14px;
}
.nav ul li:hover{
    background-color:#FE8B02;
    color: #fff;
}
.content{
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 950px;

    /* background-color: pink; */
}
.content_bottom{
    position:absolute;
    bottom: 20px;
    width: 100%;
    height: 40px;
    /* background-color: pink; */
    text-align: center;
    line-height: 40px
}
</style>