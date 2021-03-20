<template>
<!-- Home页面志愿咨询 -->
    <div class="activeList">
    <div class="content-title">
                <div class="content-title-left">
                    <el-cascader
                    class="cascader"
                    v-model="value"
                    :options="options"
                    size="mini"
                    placeholder="状态"
                    :props="{ expandTrigger: 'hover' }"
                    @change="handleChange">
                    </el-cascader>
                </div>
                <div class="content-title-right">
                        <div style="margin-top: 0px">
                            <el-input
                                placeholder="请输入内容"
                                v-model="input3"
                                class="input-with-select"
                                size="mini"
                            >
                                <template #append>
                                <el-button icon="el-icon-search"></el-button>
                                </template>
                            </el-input>
                        </div>
                </div>
            </div>
        <el-card class="box-card tt" v-for="(item,index) in cardList" :key="index">
            <div class="box-card-left">
               <div class="img">
                   <img :src="item.img" alt="">
               </div>
                <div class="card-note">
                    <h4>{{item.title}}</h4>
                    <p>地点:{{item.address}}</p>
                    <p>归属组织:{{item.organization}}</p>
                    <span>
                        <el-progress :percentage="item.percentage">
                            <el-button type="text">{{item.personNum}}人</el-button>
                        </el-progress>
                    </span>
                </div>
            </div>
            <div class="box-card-right">
                <div class="box-card-right-left">
                    <div class="box-card-right-left-item">
                        <i class="icon1  iconfont  icon-ganxingqu"></i>
                        <p>感兴趣</p>
                        <span>{{item.interest}}</span>
                    </div>
                    <div class="box-card-right-left-item">
                         <i class="icon3 iconfont icon-zhaomu"></i>
                        <p>招募人数</p>
                        <span>{{item.recruit}}</span>
                    </div>
                     <div class="box-card-right-left-item">
                         <i class="icon2 iconfont icon-guanzhu"></i>
                        <p>关注</p>
                        <span>{{item.focus}}</span>
                    </div>
                     
                </div>
                <div class="box-card-right-right">
                    <el-button type="warning" plain>报名参加</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name:"ActiveList",
    props:['cardList'],
   data() {
      return {
        value: [],
        options: [{
          value: 'finish',
          label: '已完成',
        }, {
          value: 'test',
          label: '进行中',
        }],
        input3:""
      };
    },
    // filters:{
    //     amount(){
    //         return this.cardList.percentage === 100?"满": this.cardList.percentage;
    //     }
    // },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    },
}

</script>


<style scoped>
  .el-select .el-input {
    width: 90px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-select{
      width: 90px;
  }
.content-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    /* background-color: pink;    */
}
.content-title-left{
    margin-left: 20px;
}
.content-title-right{
  width: 220px;
}
.activeList{
    width: 97%;
    height: 800px;
    margin: 0 auto;
    /* background-color: red; */
}

  .text {
    font-size: 14px;
  }

  .item {
    padding: 5px 0;
  }

  .box-card {
    position: relative;
    margin-top: 55px;
    width: 100%;
    height: 100px;
  }
   .tt{
         margin-top: 55px;
       /* background-color: pink; */
   }
  .box-card-left{
    display: flex;
    justify-content: space-between;
    width: 600px;
    height: 100px;
    /* background-color: pink; */
  }
    .box-card-right{
    position:absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    right: 20px;
    top:20px;
    width: 500px;
    height: 100px;
    /* background-color: pink; */
  }
  .box-card-left .img{
    width: 155px;
    height: 100px;
    /* background-color:red; */
  }
  .box-card-left .img>img{
      width: 100%;
      height: 100%;
  }
 .box-card-left .card-note{
    width: 400px;
    height: 100px;
    /* background-color:red; */
 }
 .card-note span{
     display: inline-block;
     width: 270px;
 }
 .box-card-right .box-card-right-left{
     width: 240px;
     height: 100px;
     /* background-color: red; */
     display: flex;
     align-items: center;
     justify-content: space-around;
     /* padding: 5px; */
 }
.box-card-right .box-card-right-right{
     width: 180px;
     height: 100px;
     /* background-color: red; */
 }
 .box-card-right-left-item{
     display:flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     width: 70px;
     height: 90px;
     border: 1px solid #ccc;
     /* background-color: pink; */
 }
 .box-card-right-left-item>i{
     font-size: 30px;
 }
 .box-card-right-left-item >p{
     font-size: 12px;
 }
.icon1{
    color:#DB4453;
}
.icon2{
    color: #c9f2ff;
}
.icon3{
    color: #b39bd7;
}
.box-card-right-right{
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-button {
    /* height: 30px; */
    border-radius: 40px;
}
</style>
