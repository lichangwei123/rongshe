<template>
	<div>
		<!--玩转民宿-->
		<div class="hot">
			<div class="hoter">
				<p>玩转民宿</p>
				<p>Play the homestay</p>
			</div>
		</div>
		<!--当即热门下面-->
		<div class="hot-public">
			<div class="hot-public-center">
				<div class="playhomestay1">
					<a href="javascript:;">查看详情</a>
				</div>
				<div class="playhomestay2">
					<a href="javascript:;">查看详情</a>
					
				</div>
				<div class="playhomestay3">
					<a href="javascript:;">查看详情</a>
				</div>
				<div class="playhomestay4">
					<a href="javascript:;">查看详情</a>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	.hoter{
	width: 1226px;
	height: 135px;
	margin: 0 auto;
	/*background: red;*/	
	padding-top: 50px;
}
.hoter p{
	text-align: center;
	font-size: 46px;
}
/*当即热门下面*/
.hot-public-center{
	width: 1226px;
	height: 812px;
	margin:0 auto;
	/*background: #0000FF;*/
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.hot-public-center .playhomestay1{
	float: left;
	width: 800px;
	height: 400px;
	background: url(../../assets/home/playhome.jpg) no-repeat 0 0;
	background-size: 100% 100%;
}
.hot-public-center .playhomestay1 a{
	display: block;
	width: 80px;
	height: 30px;
	color: #fff;
	border: 1px solid #fff;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	border-radius: 2px;
	margin-left: 431px;
	margin-top: 171px;
}
.hot-public-center .playhomestay2{
	float: left;
	width: 400px;
	height: 400px;
	background: url(../../assets/home/bg2.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.hot-public-center .playhomestay2 a{
	display: block;
	width: 80px;
	height: 30px;
	color: #fff;
	border: 1px solid #fff;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	border-radius: 2px;
	margin-left: 168px;
	margin-top: 171px;
}
.hot-public-center .playhomestay3{
	float: left;
	width: 400px;
	height: 400px;
	background: url(../../assets/home/bg3.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.hot-public-center .playhomestay3 a{
	display: block;
	width: 80px;
	height: 30px;
	color: #fff;
	border: 1px solid #fff;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	border-radius: 2px;
	margin-left: 168px;
	margin-top: 171px;
}
.hot-public-center .playhomestay4{
	float: left;
	width: 800px;
	height: 400px;
	background: url(../../assets/home/bg4.png) no-repeat 0 0;
	background-size: 100% 100%;
}
.hot-public-center .playhomestay4 a{
	display: block;
	width: 80px;
	height: 30px;
	color: #fff;
	border: 1px solid #fff;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	border-radius: 2px;
	margin-left: 431px;
	margin-top: 171px;
}
/*.hot-public-center .hot-list{
	width: 244px;
	height: 420px;
	border: 1px solid #CCCCCC;
}*/
</style>