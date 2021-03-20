<template>
<!-- Home页面信息公告 -->
    <div class="information">
      <div class="information-list" v-for="(item,index) in informationList" :key="index">
            <h4 class="information-list-h4"><span>新</span>{{item.title}}</h4>
            <p class="list-content">{{item.concont}}</p>
            <p class="list-content-time">{{item.createTime}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Information",
    data(){
        return{
            informationList:[{
                title:"第十届志愿服务广州交流会青年志愿服务专项行动精品项目大赛通知公告",
                concont:"为深入贯彻落实习近平总书记关于志愿服务的重要指示精神，大力弘扬奉献、友爱、互助、进步的志愿精神，充分引导志愿服务力量在社会治理创新、常态化疫情防控等方面发挥积极作用，打造一批形式创新、覆盖面广、成效突出，可持续、可复制、可推广的精品项目，团市委拟举办第十届志愿服务广州交流会青年志愿服务专项行动精品项目大赛（以下简称“项目大赛”）。现将有关事项通知如下：一、大",
                createTime:"2020-02-17"
           },{
                title:"志愿时4.0”系统数据互联互通温馨提示 （志愿者）",
                concont:"志愿时4.0”系统数据互联互通温馨提示（志愿者）尊敬的用户，由于您个人中心的“志愿时数”数据融合自i志愿等系统。部分数据正在同步中，统计结果可能存在偏差，待数据同步完成后将恢复正常。给您带来的不便敬请谅解！",
                createTime:"2020-12-3"
           },{
                title:"志愿时4.0”系统数据互联互通温馨提示 （志愿者）",
                concont:"志愿时4.0”系统数据互联互通温馨提示（志愿者）尊敬的用户，由于您个人中心的“志愿时数”数据融合自i志愿等系统。部分数据正在同步中，统计结果可能存在偏差，待数据同步完成后将恢复正常。给您带来的不便敬请谅解！",
                createTime:"2020-12-3"
           },{
                title:"志愿时4.0”系统数据互联互通温馨提示 （志愿者）",
                concont:"志愿时4.0”系统数据互联互通温馨提示（志愿者）尊敬的用户，由于您个人中心的“志愿时数”数据融合自i志愿等系统。部分数据正在同步中，统计结果可能存在偏差，待数据同步完成后将恢复正常。给您带来的不便敬请谅解！",
                createTime:"2020-12-3"
           }]
        }
    }
}

</script>


<style scoped>
.information{
    
    overflow: hidden;
}
.information-list{
    /* margin-top: 5px; */
    margin: 10px auto;
    width: 96%;
    /* height: 100px; */   /**可伸缩的高度 */
    /* background-color: skyblue; */
    border-bottom: 1px solid #ccc;
}
.information-list h4 span{
    position: relative;
    display: inline-block;
    width: 40px;
    height: 25px;
    margin-right: 10px;
    text-align: center;
    line-height: 25px;
    background-color: red;
    color: #fff;
}
.information-list h4 {
    cursor: pointer;
}
.information-list h4:hover {
    color: salmon;
}
.information-list h4 span::before{
    position:absolute;
    top: 8px;
    right: -4px;
    content: '';
    clear: both;
    display: block;
    width: 10px;
    height: 10px;
    background-color: red;
    transform: rotate(45deg);
    z-index: 999;
}
.list-content{
    margin-left: 5px;
    height: 48px;
    overflow: hidden;
    font-size: 12px;
    color: #6c6c6c;
}
.list-content-time{
    margin-left: 5px;
    margin-top:5px;
    font-size: 12px;
    color: #6c6c6c;
}
</style>
