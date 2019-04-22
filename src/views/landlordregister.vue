<template>
	<div>
	<div class="header">
			<a href="javascript:;" @click="gohome">首页</a>
			<a href="javascript:;">发现</a>
		</div>
		<!--中间部分-->
		<div class="main-section">
			<div class="main-left">
				<div class="main-from">
				<form action="" method="post">
					<p class="imager">
						<img src="@/assets/home/logo2_03.png">
					</p>
					<p class="p1">
						<a href="javascript:;">房东注册</a>
					</p>
					<p><input type="text" placeholder="用户名" name="username" class="username txt" autocomplete="off"></p>
					<p><input type="password" placeholder="密码" name="password" class="password txt" autocomplete="off"></p>
					<p><input type="text" name="realName" class="realName txt" placeholder="真实姓名"></p>
					<p><input type="text" placeholder="手机号" name="phone" class="phone txt" autocomplete="off"></p>
					<p class="clearfix"><input type="text" placeholder="验证码" class="code"><span class="regcode">获取短信验证码</span></p>
					<p><input type="button" value="立即注册" class="regbtn"></p>
				</form>
				</div>
			</div>
			<!--图片-->
			<div class="main-right">
				<img src="@/assets/home/rigister1.jpg" alt="">
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
		methods:{
			gohome(){
				this.$router.push({path:"/"})
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

/*头部*/
.header{
	width: 1216px;
	margin:0 auto;
	height: 90px;
	/*background: #006666;*/
}
.header a{
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
/*中间部分*/
.main-section{
	width:1216px;
	height: 612px;
	margin:0 auto;
	/*background: #00FF00;*/
}
.main-section .main-left{
	width: 678px;
	height: 612px;
	float: left;
	/*background: pink;*/
}
.main-section .main-left .main-from{
	width: 350px;
	height: 612px;
	margin:0 auto;
	/*background: #008080;*/
}
.main-section .main-left .main-from .imager{
	text-align: center;
}
.main-section .main-left .main-from .p1{
	text-align: center;
}
.main-section .main-left .main-from .p1 a{
	display: inline-block;
	width: 153px;
	height: 36px;
	text-align: center;
	line-height: 36px;
	border-bottom: 2px solid #fd640d;
	font-size: 18px;
	color: #fd640d;
}
.main-section .main-left h3{
	text-align: center;
	font-size: 36px;
}
.main-section .main-left .txt{
	width: 337px;
	height: 50px;
	padding-left: 10px;
}
.main-section .main-left .code{
	width: 131px;
	height: 50px;
	padding-left: 10px;
	float: left;
}
.main-section .main-left .regcode{
	width: 131px;
	height: 50px;
	display: inline-block;
	text-align: center;
	line-height: 50px;

	float: right;
	background: #fd640d;
	color: #fff;
	border-radius: 4px;
}
.main-section .main-left .regbtn{
	width: 337px;
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
.main-section .main-left p{
	text-align: center;
}
.main-section .main-left p:nth-child(1){
	padding-top: 50px;
	font-size: 36px;
}
.main-section .main-left p:nth-child(2){
	margin-top: 20px;
}
.main-section .main-left p:nth-child(3){
	margin-top: 20px;
}
.main-section .main-left p:nth-child(4){
	margin-top: 20px;
}
.main-section .main-left p:nth-child(5){
	margin-top: 20px;
}
.main-section .main-left p:nth-child(6){
	margin-top: 20px;
}
.main-section .main-left p:nth-child(7){
	margin-top: 10px;
}
.main-section .main-right{
	width: 538px;
	height: 532px;
	float: left;
	/*background: red;*/
}
.main-section .main-right img{
	width: 100%;
	margin-top: -90px;
	height: 702px;
}
/*底部*/


</style>