<template>
    <div class="registered">
        <header>
            <router-link to="/">已有账号？|返回首页</router-link>
        </header>
        <div class="content">‘
            <!-- 内容简介 -->
            <div class="content-tltle">
                <p>已有120021名志愿者参与了我们的行动</p>
                <p>快快加入我们吧!</p>
            </div>
            <!-- 注册人信息待定区 -->
            <div class="content-con">

            </div>
        </div>
        <el-footer></el-footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    name:"Registered",
    components:{
        'el-footer':Footer
    }
}
</script>

<style scoped>
    .registered{
        width: 1247px;
        /* height: 100%; */
        /* background-color: pink; */
        margin:  0 auto;
    }
    header{
        width: 100%;
        margin-top: 20px;
        height: 40px;
        line-height: 40px;
        text-align: right;        
        /* background-color: pink; */
    }
    header a{
        color:#000;
        font-size:12px;
    }
    .content{
        width: 100%;
        height: 600px;
        /* background-color: pink; */
    }
    .content-tltle{
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 30px;
        
        /* background-color: skyblue; */
    }
     .content-tltle p{
         /* height:30px; */
         font-size: 14px;
     }
     .content-con{
         width: 100%;
         height: 540px;
         border-radius: 10px;
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
         background-color:#fff;
     }
</style>