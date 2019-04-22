<template>
	<div>
		<!--房东故事-->
		<div class="landlord-story">
			<div class="landlord-story-center">
				<p>房东故事</p>
				<p>landlord story</p>
			</div>
		</div>
		<!--房东故事下面-->
		<div class="landlord-story-public">
			<div class="landlord-story-public-center">
				<a href="javascript:;" class="details1 detail">详情</a>
				<a href="javascript:;" class="details2 detail">详情</a>
				<div class="imager">
					<img src="@/assets/home/landlordstory1.png" alt="">
				</div>
				<div class="describe">
					<p>禅茶民宿里</p>
					<p>过云淡风轻的小日子</p>
					<p>成都武侯区腹地,杜甫草堂旁,一栋三层小白楼很是醒目,大片的落地窗让室内一览无遗</p>
				</div>
				<div class="describe">
					<p>黔南古寨的木屋</p>
					<p>4间房却溢满书香和诗意</p>
					<p>贵州，中国唯一一个没有平原支撑的省份"八山一水一分田"，数不清的山泉、溪流、瀑布、与山峰、峡谷相依相伴.</p>
				</div>
				<div class="imager">
					<img src="@/assets/home/landlordstory2.png" alt="">
				</div>
			</div>
		</div>
		<!--加载更多-->
		<div class="load-more">
			<a href="javascript:;" class="loader">
				加载更多
			</a>
		</div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style>
	/*房东故事*/
.landlord-story-center{
	width: 1226px;
	height: 125px;
	margin:0 auto;
	/*background: #33FFCC;*/
	padding-top: 15px;
}
.landlord-story-center p{
	text-align: center;
	font-size: 40px;
}
/*房东故事下面*/
.landlord-story-public-center{
	width: 1226px;
	height: 837px;
	margin:0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	background: #faf7f6;
	position: relative;
}
.landlord-story-public-center .detail{
	width: 171px;
	height: 66px;
	position: absolute;
	background: #07cee5;
	color: #fff;
	text-align: center;
    line-height: 66px;
    border-radius: 33px;
    font-size: 30px;
}
.landlord-story-public-center .details1{
	left: 749px;
	top: 266px;
}
.landlord-story-public-center .details2{
	left: 303px;
	top: 690px;
}
.landlord-story-public-center .imager{
	width: 824px;
	height: 389px;
}
.landlord-story-public-center .imager img{
	width: 100%;
    height: 100%;
}
.landlord-story-public-center .describe{
	width: 340px;
	height: 249px;
	padding:70px 30px;
}
.landlord-story-public-center .describe p{
	margin-bottom: 10px;
}
.landlord-story-public-center .describe p:nth-child(1){
	font-size: 32px;
}
.landlord-story-public-center .describe p:nth-child(2){
	font-size: 26px;
}
.landlord-story-public-center .describe p:nth-child(3){
	font-size: 12px;
}

</style>