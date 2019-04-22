<template>
	<div>
			<div class="top">
			<div class="toper">
				<a href="javascript:;" class="logo">
					<img src="@/assets/home/logo.jpg" alt="">
				</a>
				<ul class="listone" @click="">
					<li><a href="javasript:;" style="background: #e34d35;color: #fff;" @click="gohome">首页</a></li>
					<li><a href="javasript:;">发现</a></li>
				</ul>
				<div class="right">
					<dl>
						<dt><a href="javascript:;" @click="gologin">登录</a></dt>
						
					</dl>
					<dl>
						<dt><a href="javascript:;">注册</a></dt>
						<dd>
							<ul>
								<li><a href="javascript:;" @click="golandlordregister">房东注册</a></li>
								<li><a href="javascript:;" @click="gopassengerregster">旅客注册</a></li>
							</ul>
						</dd>
					</dl>
					<dl>
						<dt><a href="javascript:;">预定住宿</a></dt>
					</dl>
				</div>
			</div>
			
			<!--哪些房屋可以出租-->
			<div class="which">
				<p>哪些房屋可以在融舍出租？</p>
				<div class="flexer">
					<div class="whichlist">
						<img src="@/assets/home/whichimglist1.png" alt="">
					</div>
				<div class="whichlist">
						<img src="@/assets/home/whichimglist2.png" alt="">					
				</div>
				<div class="whichlist">
						<img src="@/assets/home/whichimglist3.png" alt="">					
				</div>
				<div class="whichlist">
						<img src="@/assets/home/whichimglist4.png" alt="">					 				</div>
				</div>
				
			</div>
			<!--提升优势-->
			<div class="advantage">
				<p>提升优势?</p>
				<div class="advantager">
					<dl>
						<dt>
							<img src="@/assets/home/tubiao1.png" alt="">
						</dt>
						<dd>
							想一个特别的房子的名字
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="@/assets/home/tubiao2.png" alt="">
						</dt>
						<dd>
							真实美观的房屋图片
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="@/assets/home/tubiao3.png" alt="">
						</dt>
						<dd>
							同比周边更具吸引力的价格
						</dd>
					</dl>
					<dl>
						<dt>
							<img src="@/assets/home/tubiao4.png" alt="">
						</dt>
						<dd>
						          准确的地址和详细的周边配套设施
						</dd>
					</dl>
				</div>
				
			</div>
			<!--创建房源-->
			<div class="createroom">
				<div class="roomimg">
					<img src="@/assets/home/fangyuan1.jpg" alt="">
				</div>
				<div class="detaildescribe">
					<p>创建房源</p>
					<ul>
						<li>在融舍创建房源是免费的，使用"融舍"APP或使用电脑均能简单快速的创建一套房源;</li>
						<li>您可以取一个彰显您个性的房屋名称，描述一下您的房源，说明每次能接待多少名访客，什么时候接待，并添加一些照片以及必要的介绍即可;</li>
						<li>我们提供复制已有房屋的功能,能帮您快速在途家创建多套房源您只需更改房屋位置,房屋名称及照片即可;</li>
					</ul>
				</div>
				<div class="detaildescribe">
					<p>创建房源</p>
					<ul>
						<li>在融舍创建房源是免费的，使用"融舍"APP或使用电脑均能简单快速的创建一套房源;</li>
						<li>您可以取一个彰显您个性的房屋名称，描述一下您的房源，说明每次能接待多少名访客，什么时候接待，并添加一些照片以及必要的介绍即可;</li>
						<li>我们提供复制已有房屋的功能,能帮您快速在途家创建多套房源您只需更改房屋位置,房屋名称及照片即可;</li>
					</ul>
				</div>
				<div class="roomimg">
					<img src="@/assets/home/fangyuan2.jpg" alt="">
				</div>
				<div class="roomimg">
					<img src="@/assets/home/fangyuan3.jpg" alt="">
				</div>
				<div class="detaildescribe">
					<p>创建房源</p>
					<ul>
						<li>在融舍创建房源是免费的，使用"融舍"APP或使用电脑均能简单快速的创建一套房源;</li>
						<li>您可以取一个彰显您个性的房屋名称，描述一下您的房源，说明每次能接待多少名访客，什么时候接待，并添加一些照片以及必要的介绍即可;</li>
						<li>我们提供复制已有房屋的功能,能帮您快速在途家创建多套房源您只需更改房屋位置,房屋名称及照片即可;</li>
					</ul>
				</div>
			</div>
			<div class="bottom">
				<p>我已经准备好了</p>
				<a href="javascript:;" @click="golandlordregister">立即注册</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			gohome(){
				this.$router.push({path:"/"})
			},
			gologin(){

				this.$router.push({path:"/login"})
			},
			golandlordregister(){
				if(confirm("你准备好了么？")){
					
					this.$router.push({path:"/landlordregister"})
				}
			},
			gopassengerregster(){
				this.$router.push({path:"/passengerregster"})
			}
		}
	}
</script>

<style scoped>
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
.top{
	width: 100%;
	height: 60px;
	/*background: #ccc;*/
	background-size: 100% 100%;
}
.top .toper{
	width:1226px;
	height: 60px;
	/*background: pink;*/
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
	position: relative;
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
	position: absolute;
	display: none;
}
.top .toper .right dl:nth-child(2) ul li a{
	color: #000000;
	font-size: 20px;
}
.top .toper .right dl:nth-child(2):hover ul{
	display: block;
}
.top .toper .right dl:nth-child(2) ul li:hover a{
	color: red;
}
/*哪些可以在融舍出租*/
.which{
	width: 1226px;
	margin: 0 auto;
	height: 324px;
	
}
.which .flexer{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.which p{
	font-size: 28px;
	padding: 10px 0 10px;
	width: 1226px;
	/*flex: 1;*/
	/*float: left;*/
}
.which .whichlist{
	text-align: center;
   display: flex;
	/*float: left;*/
	width: 247px;
	height: 247px;
	background-size: 100%;
}
.which .whichlist img{
	width: 100px;
	height: 100px;
    margin:auto;
}
.which .whichlist:nth-of-type(1){
	background: url(../assets/home/whichimg1.jpg) no-repeat 0 0;
}
.which .whichlist:nth-of-type(2){
	background: url(../assets/home/whichimg2.jpg) no-repeat 0 0;	
}
.which .whichlist:nth-of-type(3){
	background: url(../assets/home/whichimg3.jpg) no-repeat 0 0;	
}
.which .whichlist:nth-of-type(4){
	background: url(../assets/home/whichimg4.jpg) no-repeat 0 0;	
}

/*提升优势?*/
.advantage{
	width: 1226px;
	height: 344px;
	background: #383c50;
	margin: 0 auto;
}
.advantage p{
	font-size: 28px;
	padding: 10px 40px 40px;
	width: 1226px;
	color: #fff;
}
.advantage .advantager{
	display: flex;
	justify-content: space-around;
}
.advantage .advantager dl{
	text-align: center;
}
.advantage .advantager dl dd{
	color: #fff;
	font-size: 18px;
	margin-top: 28px;
}
/*房源创建*/
.createroom{
	padding-top: 40px;
	width: 1081px;
	height: 1262px;
	/*background: pink;*/
	margin:0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.createroom .roomimg{
	width: 50%;
	height: 352px;
	/*background: #00B7FF;*/
}
.createroom .roomimg img{
	width: 100%;
	height: 100%;
}
.createroom .detaildescribe{

	height: 302px;
	/*background:red;*/
	padding-left: 84px;
	
	padding-right: 50px;
	width: 406px;
	padding-top:50px;
}
.createroom .detaildescribe p{
	font-size: 24px;
	margin-bottom: 20px;
}
.createroom .detaildescribe ul li{
	list-style-type: disc;
	margin-bottom: 10px;
	/*list-style-position: inside;*/
}
.bottom{
	width: 1081px;
	height: 80px;
	background: #383c50;
	margin: 0 auto;
}
.bottom p{
	float: left;
	font-size: 25px;
	color: #fff;
	margin-left: 128px;
	height: 80px;
	line-height: 80px;
}
.bottom a{
	float: left;
	width: 155px;
	height: 51px;
	float: right;
	border: 1px solid #fff;
	border-radius: 4px;
	text-align: center;
	line-height: 51px;
	font-size: 19px;
	color: #fff;
	margin-top: 18px;
	margin-right:128px;
}

</style>