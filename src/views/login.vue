<template>
	<div>
		<div class="login-context clearfix">
			<!--左半部分-->
			<div class="login-context-left">
				<img src="@/assets/home/asd.jpg" alt="">
			</div>
			<!--右半部分-->
			<div class="login-context-right">
				<div class="logo-area">
					<a href="javascript:;" @click="gohome">首页</a>
		        	<a href="javascript:;">发现</a>
				</div>
				
				<div class="form-area">
					<p class="imager">
						<img src="@/assets/home/logo2_03.png" alt="">
					</p>
					<ul class="tabs-nav clearfix">
						<li :class="flag?'lii':''">
							<a href="javascript:;" @click="fn">旅客登录</a>
						</li>
						<li :class="flag1?'lii':''">
							<a href="javascript:;" @click="fn1">房东登录</a>
						</li>
					</ul>
					<!--旅客登录-->
					<div class="passenger-login" v-if="flag">
						<form method="post" action="" class="login-from" id="login">
								<p><input type="text" placeholder="账号" class="username txt" name="username" autocomplete="off"></p>
								<p><input type="password" placeholder="密码" class="password txt" name="password" autocomplete="off"></p>
								<p class="clearfix"><input type="text" maxlength="6" name="code" class="code" placeholder=" 请输入验证码" autocomplete="off"><span class="auth-code">验</span></p>
								<p><input type="button" class="submit" id="submitLogin" value="登录" /></p>
								<p><a href="javascript:;" class="forgetpassword">忘记密码?</a><a href="javascript:;" class="clickreg">还没有账号,点击注册</a></p>
						</form>
					</div>
					<!--房东登录-->
					<!--<div class="landlord-login">
						
					</div>-->
					<div class="passenger-login" v-else="flag1">
						<form method="post" action="" class="login-from1" id="login1">
								<p><input type="text" placeholder="账号" class="username txt" name="username" autocomplete="off"></p>
								<p><input type="password" placeholder="密码" class="password txt" name="password" autocomplete="off"></p>
								<p class="clearfix"><input type="text" maxlength="6" name="code" class="code" placeholder=" 请输入验证码" autocomplete="off"><span class="auth-code">验证码</span></p>
								<p><input type="button" class="submit" id="submitLogin" value="登录" /></p>
								<p><a href="javascript:;" class="forgetpassword">忘记密码?</a><a href="javascript:;" class="clickreg">还没有账号,点击注册</a></p>
						</form>
					</div>
					
				</div>
				<div class="public-area">
					
				</div>
			</div>
		</div>
		<!--底部-->
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '@/components/common/footer.vue'
	
	export default{
		components:{
			Footer
		},
		data(){
			return{
				flag:true,
				flag1:false
			}
		},
		methods:{
			fn(){
				this.flag = true;
				this.flag1 = false;
			},
			fn1(){
				this.flag1 = true;
				this.flag = false;
			},
			gohome(){

				this.$router.push({path:'/'})
				
			}
		}
	}
</script>

<style>
	*{
	margin: 0;
	padding: 0;
}

ul,ol,li{
	list-style: none;
}
a{
	text-decoration: none;
}

.clearfix:after{
	content: "";
	height: 0;
	clear: both;
	display: block;
	overflow: hidden;
	visibility: hidden;
}

.login-context{
	width: 1216px;
	margin:0 auto;
}
.login-context .login-context-left{
	width: 534px;
	height: 640px;
	float: left;
	background: pink;
}
.login-context .login-context-left img{
	width: 100%;
	height: 100%;
}
.login-context .login-context-left .left-nav{
	height: 92px;
	background: #00FFFF;
}
.login-context .login-context-right{
	width:680px;
	height: 640px;

	float: left;
}
.login-context .login-context-right .logo-area{
	height: 60px;

}
.login-context .login-context-right .logo-area a{
	float: left;
	display: block;
	width: 85px;
	height: 56px;
	text-align: center;
	line-height: 56px;
	font-size: 18px;
	border-bottom: 2px solid red;
	margin-left: 20px;
	color: #000000;
}
.login-context .login-context-right .form-area{
	width: 360px;
	height: 413px;
	margin:0 auto;

	padding-left: 10px;
}
.login-context .login-context-right .form-area .imager{
	text-align: center;
	margin:30px 0 30px;
}
.login-context .login-context-right .form-area .tabs-nav{
	display: flex;
	justify-content: space-around;
	padding-left: 10px;
}
.login-context .login-context-right .form-area .tabs-nav .lii{
	border-bottom: 2px solid #fd640d;
}
.login-context .login-context-right .form-area .tabs-nav li{
	float: left;
	width: 144px;
	height: 36px;
	border-bottom: 2px solid transparent;
	line-height: 36px;
	text-align: center;
}
.login-context .login-context-right .form-area .tabs-nav li a{
	color: #000000;
}
.login-context .login-context-right .form-area .tabs-nav .lii a{
	color: #fd640d;
}
.login-context .login-context-right .txt{
	width: 338px;
	height: 52px;
	border: 1px solid #666666;
	margin-top: 25px;
	padding-left: 10px;
}
.login-context .login-context-right .code{
	width: 196px;
	height: 52px;
	border:1px solid #666666;
	float: left;
	margin-right: 10px;
}
.login-context .login-context-right .code{
	width: 196px;
	height: 52px;
	border:1px solid #666666;
	float: left;
	margin-right: 10px;
}
.login-context .login-context-right .auth-code{
	width: 140px;
	height: 52px;
	text-align: center;
    color:#fff ;
	float: left;
	display: inline-block;
	line-height: 52px;
	background: #fd640d;
	border-radius: 4px;
}
.login-context .login-context-right .public-area{
	width: 370px;
	height: 160px;
	margin: 0 auto;

}
.login-context .login-context-right .submit{
	width: 348px;
	height: 50px;
	text-align: center;
	line-height: 50px;
	background: #fd640d;
	border-radius: 4px;
	border: none;
	font-size: 20px;
	color: #fff;
	margin-top: 20px;
}	
.login-context .login-context-right .forgetpassword{
	float: left;
	color:#000000;
	font-size: 14px;
}
.login-context .login-context-right .clickreg{
	float: right;
	font-size: 14px;
	color: #000000;
}
.login-context .login-context-right .passenger-login p:nth-child(3){
	margin:20px 4px;

	
}
.login-context .login-context-right .passenger-login p:nth-child(4){
	margin-top: 25px;
}
.login-context .login-context-right .passenger-login p:nth-child(5){
	padding-top: 10px;
}
/*底部*/
</style>