<template>
  <div class="mai">
    <!-- 导航部分 -->
    <div class="header">
      <nav class="nav">
            <div class="nav-title">
                <div class="nav-title-left">
                  <a href="javascript:;" @click="loginbox">登录</a>
                  <router-link to="/register">注册</router-link>
                </div>
                <div class="nav-title-right">
                    <span>洛阳</span>
                    <span>控制台</span>
                </div>
            </div>
          </nav>
    </div>
    <!-- login 遮罩层 -->
    <div class="login_box" v-show="isShow">
        <div class="login_info_box">
            <div class="login_info_con">
              <!-- 标题部分 -->
                <p style="text-align: right; background-color: #da4453;">
                  <!-- 登录标题 -->
                  <span style="margin-right: 120px;color: #fff; font-size: 16px;">账号登录</span>
                 <!-- 关闭按钮 -->
                  <span @click="close" style="display:inline-block;text-align:center;color: #fff;width:30px;height:35px;line-height:35px; font-size: 16px;cursor: pointer;" class="iconfont icon-guanbi"></span>
                </p>
                <!-- 登录主题部分 -->
                <div class="login_info_body">
                    <div class="info_tab clearfix">
                        <div class="tab_item" @click="cur1()" :class="{cur:CurActive==1}">
                            志愿者登录
                        </div>
                        <div class="tab_item" @click="cur2()" :class="{cur:CurActive==2}">
                          组织/团体登录
                        </div>
                    </div>
                    <!-- 志愿者登录 -->
                    <form class="volunteer_login" v-show="isvolun">
                      <input type="hidden" name="loginType" value="1"> 
                      <div class="info_body">
                          <div class="info_input_common">
                              <input type="text" class="right_input" placeholder="请输入账号">
                          </div>
                           <div class="info_input_common">
                              <input type="password" class="password_input" placeholder="请输入密码">
                          </div>
                          <div class="info_input_common pp">
                              <div class="vecl">
                                <input type="text" class="password_input qq position" placeholder="请输入验证码">
                              </div>
                              <img title="看不清？点击试一试" src="../assets/staticimge4login.jpg" alt="未显示">
                          </div>
                           <div class="info_input_common pp">
                             <div class="forover_password">
                               <label for="check">
                                  <input type="checkbox" name="" id="check"/><span>记住密码</span>
                               </label>
                             </div>
                            <div class="no_password">  
                              <a href="javascript:;">忘记密码</a>
                            </div>
                          </div>
                           <div class="info_input_common logoIn">
                             <div class="logo">
                                登录
                             </div>
                          </div>
                            <div class="info_input_common logoIn bottom">
                              <span>还不是志愿者？</span>
                              <a href="">加入我们</a>
                          </div>
                      </div>
                    </form>
                       <!-- 组织登录登录 -->
                    <form class="volunteer_login" v-show="!isvolun">
                      <input type="hidden" name="loginType" value="2"> 
                      <div class="info_body">
                          <div class="info_input_common">
                              <input type="text" class="right_input" placeholder="请输入账号">
                          </div>
                           <div class="info_input_common">
                              <input type="password" class="password_input" placeholder="请输入密码">
                          </div>
                          <div class="info_input_common pp">
                              <div class="vecl">
                                <input type="password" class="password_input qq" placeholder="请输入密码">
                              </div>
                              <img title="看不清？点击试一试" src="../assets/staticimge4login.jpg" alt="未显示">
                          </div>
                           <div class="info_input_common pp">
                             <div class="forover_password">
                               <label for="check">
                                  <input type="checkbox" name="" id="check"/><span>记住密码</span>
                               </label>
                             </div>
                            <div class="no_password">  
                              <a href="javascript:;">忘记密码</a>
                            </div>
                          </div>
                           <div class="info_input_common logoIn">
                             <div class="logo">
                                登录
                             </div>
                          </div>
                            <div class="info_input_common logoIn bottom">
                              <span>还不是组织？</span>
                              <a href="JavaScript:;">加入我们</a>
                          </div>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   <div class="main">
 <!-- 头部logo -->
    <div class="header-logo"> 
      <img src="@/assets/menu-banner.jpg" alt="">
    </div>
<!-- 中部导航部分 -->
    <nav class="middle-nav">
      <div class="middle-nav-title">
          <ul>
            <li><router-link to="/Home">首页</router-link></li>
            <li><router-link to="/organization">组织团体</router-link></li>
            <li><router-link to="/active">志愿活动</router-link></li>
            <li><router-link to="/aaa">志愿者证</router-link></li>
            <li><router-link to="/aaaa">实践证书</router-link></li>
            <li><router-link to="/b">下载中心</router-link></li>
            <li><router-link to="/bbb">帮助中心</router-link></li>
          </ul>
      </div>
    </nav>
<!-- 路由切换部分 -->
  <router-view></router-view>
   </div> 
<!-- 底部footer部分 -->
     <div class="footer">
          <p>广州市志愿者行动指导中心版权所有     粤ICP备11019788号</p>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Main',
  data() {
    return {
      isShow:false,
      CurActive:1,
      isvolun:true
    }
  },
  methods: {
    // 打开登录按钮
    loginbox(){
      this.isShow = !this.isShow;
    },
    // 关闭登录按钮
    close(){
      this.isShow = !this.isShow;
    },
    // 切换登录方式
    cur1(){
      this.CurActive =1,
      this.isvolun = true
    },
    cur2(){
      this.CurActive =2,
        this.isvolun = false
    }
  },
  components: {
    
  }
}
</script>

<style scoped> 
.router-link-active{
 background-color: #FE8B02;
  border-radius: 30px;
}
/* login-box遮罩层 */
.login_box {
    /* display: none; */
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 111;
    background-color: rgba(27, 26, 26, 0.5);
}
.login_box .login_info_box {
    margin-top: 60px;
    background-color: #fff;
    width: 362px;
    margin: 100px auto;
    z-index: 112;
}
.login_box .login_info_box .login_info_con {
    width: 362px;
}
.login_box .login_info_box .login_info_body {
    background-color: #f3f4f6;
    border: 1px solid #e7e7e7;
}
.info_tab{
  display: flex;
  /* background-color: pink; */
  width: 360px;
  height: 50px;
}
.login_box .login_info_box .login_info_body .tab_item {
    width: 50%;
    height: 50px;
    line-height: 50px;
    background-color: #e4e4e4;
    float: left;
    color: #999;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
}
.login_box .login_info_box .login_info_body .tab_item.cur {
    background-color: transparent;
    color: #666;
}
.login_box .login_info_box .info_body {
    padding: 36px 20px 15px;
}
.login_box .login_info_box .info_input_common {
    margin-bottom: 15px;
}
.login_box .login_info_box .info_input_common .right_input {
    width: 276px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    padding-left: 32px;
    padding-right: 10px;
    background-image:url(../assets/login_icon.png);
    background-repeat: no-repeat;
    border: 1px solid #e7e7e7;
    background-color: #fff;
}
.password_input{
    width: 276px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    padding-left: 32px;
    padding-right: 10px;
    background-image: url(../assets/login_icon.png);
    background-position: 0 -40px;
    background-repeat: no-repeat;
    border: 1px solid #e7e7e7;
    background-color: #fff;
}
.vecl{
  width: 50%;
}
.pp{
  display: flex;
  justify-content: space-between;
}
.position{
      background-position: 0 -75px;
}
.pp>img{
  cursor: pointer;
  height: 38px;
}
.vecl>input{
  width: 100%;
}
.forover_password span{
  margin-left: 5px;
  font-size: 14px;
}
.no_password>a{
  font-size: 14px;
  color: hsl(214, 74%, 49%);
}
.info_input_common>.logo{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #da4453;
  cursor: pointer;
  color: #fff;
}
.logoIn{
  height: 38px;
}
.bottom{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}
.bottom>span{
  font-size: 14px;
  margin-right: 14px;
}
.bottom>a{
  font-size: 14px;
  color:  hsl(214, 74%, 49%);
}
.mai{
  height: auto;
}
.header{
   margin: 0 auto;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: #464C5B;
}
.main{
 width: 100%;
  position: absolute;
  top: 60px;
  bottom: 90px;
  overflow: auto;
  padding-top: 10px;

}
.footer{
   width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #eee;
  font-size: 14px;
  background: #464C5B;
}
.nav{
  width: 100% ;
  height: 60px;
  background-color: #000;

}
.nav-title{
  display: flex;
  justify-content: space-between;
  width: 1260px;
  height: 60px;
  /* background-color: pink; */
  margin: 0 auto;

}
.nav-title-left{
  width: 200px;
  height: 60px;
  /* background-color:aqua; */
  text-align: center;
  line-height: 60px;
}
.nav-title-left a{
  display: inline-block;
  width: 30px;
  margin-right: 10px;
  font-size: 14px;
}
.nav-title-left a:hover{
  color: #DB4453;
}
.nav-title-right{
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  height: 60px;
  /* background-color:aqua; */
  text-align: center;
  line-height: 60px;
}
.nav-title-right span{
  display: inline-block;
  color: #fff;
  width: 100px;
  /* margin-right: 2px; */
  font-size: 14px;
}
.header-logo{
  margin: 0 auto;
  width: 1247px;
  height: 142px;
}
.middle-nav{
  width: 100%;
  height: 60px;
  background-color: #DB4453;
}
.middle-nav-title{
  width:1247px;
  margin: 10px auto;
  height: 60px;
  /* background-color: pink; */
}
.middle-nav-title ul li{
  float: left;
  width: 170px;
  height: 40px;
   margin: 10px auto;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.middle-nav-title ul li a{
  display: inline-block;
  width: 170px;
  height: 40px;
}
.middle-nav-title ul li:hover{
  background-color: #FE8B02;
  border-radius: 30px;
}
/* .footer{
  width: 100%;
  background-color: #eee;
  height: 200px;
} */
</style>