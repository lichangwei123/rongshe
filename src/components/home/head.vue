<template>
	<div class="top">
			<div class="toper">
				<a href="javascript:;" class="logo">
					<img src="@/assets/home/logo2_02.png" alt="">
				</a>
				<ul class="listone">
					<li><a href="javasript:;" style="background: #e34d35;color: #fff;">首页</a></li>
					<li><a href="javasript:;">发现</a></li>
				</ul>
				<div class="right">
					<dl>
						<dt @click="lordregisterknow"><a href="javascript:;">登录</a></dt>
						
					</dl>
					<dl>
						<dt><a href="javascript:;">注册</a></dt>
						<dd>
							<ul>
								<li @click="golandlordregister"><a href="javascript:;">房东注册</a></li>
								<li @click="gopassengerregster"><a href="javascript:;">旅客注册</a></li>
							</ul>
						</dd>
					</dl>
					<dl>
						<dt><a href="javascript:;">预定住宿</a></dt>
					</dl>
				</div>
			</div>

			<div class="banner">
				<div class="selectfrom">
					<div class="form-left">
						<a href="javascript:;" class="address">
							<img src="@/assets/home/address.png" alt="">
						</a>
						<input type="text" class="txt" value="北京" />
						<input type="text" class="txt" value="北京" />
						<input type="text" class="txt" value="北京" />
					</div>
					<div class="form-center">
						<a href="javascript:;" class="persion">
							<img src="@/assets/home/person.png" alt="">
						</a>
						<input type="text" class="txt-c" value="不限" />
						
					</div>
					<input type="button" class="btn" value="搜索"/>
				</div>
				<div class="selectfrombot"></div>
			</div>

		</div>
</template>

<script>
	export default{
		methods:{
			golandlordregister(){
				this.$router.push({path:'/landlordregister'})
			},
			gopassengerregster(){
				this.$router.push({path:'/passengerregster'})
			},
			lordregisterknow(){
				this.$router.push({path:'/lordregisterknow'})
			}
			
		}
	}
</script>

<style scoped>
	
.top{
	width: 100%;
	height: 700px;
	background: url(../../assets/home/banner.jpg) no-repeat 0 0;
	background-size: 100% 100%;
	border-bottom: none;
}
.top .toper{
	width:1226px;
	height: 60px;
	margin:0 auto;
}
.top .toper .logo{
	float: left;
	height: 60px;
}
.top .toper .logo img{
	height: 60px;
	margin-right: 60px;
}

.top .toper .listone{
	float: left;
}
.top .toper .listone li{
	float: left;
	margin-right: 30px;
}
.top .toper .listone li a{
	display: block;
	width: 80px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	color: #000000;
	font-size: 20px;
}

.top .toper .right{
	float: right;
}
.top .toper .right dl{
	float: left;
}

.top .toper .right dl dt{
	width: 80px;
	height: 60px;
	text-align: center;
	line-height: 60px;
}
.top .toper .right dl dt a{
	color: #000000;
	font-size: 20px;
}
.top .toper .right dl:nth-child(2) ul li{
	width:80px;
	height: 40px;
	line-height: 30px;
	text-align: center;
}
.top .toper .right dl:nth-child(2) ul{
	display: none;
}
.top .toper .right dl:nth-child(2) ul li a{
	color: #000000;
	font-size: 20px;
}

.top .toper .right dl:nth-child(2) ul li:hover a{
	color: red;
}
.top .toper .right dl:nth-child(2):hover ul{
	display: block;
}

.banner{
	width:1226px;
	height: 640px;
	margin:0 auto;
	background: none;
}
.banner .selectfrom{
	padding-top: 22px;
	width: 1138px;
	height: 58px;
	margin:422px auto 0;
	background: url(../../assets/home/bg5.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.top .banner .selectfrom .form-left{
	width: 430px;
	height: 28px;
	border-radius: 4px;
	background: #fff;
	float: left;
	margin-left: 200px;
	padding-top:6px;
}
.top .banner .selectfrom .form-left .address{
	float: left;
}
.top .banner .selectfrom .form-left .address img{
	width: 26px;
	height: 26px;
	padding: 0px 10px;
}
.top .banner .selectfrom .form-left .txt{
	width: 122px;
	height: 25px;
	border: none;
	border-left: 1px solid #ccc;
	text-align: center;
	font-size: 20px;
	color: #666;
	outline: none;
	float: left;
}
.top .banner .selectfrom .form-center{
	width: 204px;
	height: 28px;
	border-radius: 4px;
	background: #fff;
	float: left;
	margin-left: 15px;
	padding-top: 6px;
}
.top .banner .selectfrom .form-center .persion{
	float: left;
}
.top .banner .selectfrom .form-center .persion img{
	width: 26px;
	height: 26px;
	padding: 0px 10px;
}
.top .banner .selectfrom .form-center .txt-c{
	width: 122px;
	height: 25px;
	border: none;
	border-left: 1px solid #ccc;
	text-align: center;
	font-size: 20px;
	color: #666;
	outline: none;
	float: left;
}
.top .banner .selectfrom .btn{
	width: 124px;
	height: 38px;
	background: #ed391b;
	color: #fff;
	font-size: 20px;
	line-height:38px ;
	text-align: center;
	border-radius: 4px;
	float: left;
	border: none;
	margin-left: 120px;
}

.top .banner .selectfrombot{
	width: 1138px;
	height: 55px;
	margin:0 auto ;
	background: url(../../assets/home/bg6.png) no-repeat 0 0;
	background-size: 100% 100%;
}
</style>