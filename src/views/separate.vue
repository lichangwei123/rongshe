<template>
	<div>
		<sepTop></sepTop>
		<sepNav></sepNav>
		<sepReview></sepReview>
		<sepTourism></sepTourism>
		<tenFooter></tenFooter>
	</div>
</template>

<script>
	import sepTop from "@/components/separate_article/sepTop.vue"
	import sepNav from "@/components/separate_article/sepNav.vue"
	import sepReview from "@/components/separate_article/sepReview.vue"
	import sepTourism from "@/components/separate_article/sepTourism.vue"
	import tenFooter from "@/components/common/tenFooter.vue"
	export default{
		components:{
			sepTop,
			sepNav,
			sepReview,
			sepTourism,
			tenFooter
		}
	}
</script>

<style>
	*{
	    margin: 0;
	    padding: 0;
	}
	a{
	    text-decoration: none;
	}
	li{
	    list-style: none;
	}
	body{
		color:#333;
	}
	/*头部*/
	.top{
	    width: 100%;
	    height: 38px;
	    background: #ea614a;
		border-bottom: 2px solid #e39b8f;
	}
	.top .top-c{
	    width: 1210px;
	    height: 30px;
	    margin: 0 auto;
	    
	}
	.top .top-c .top-c-Left{
	    float: left;
	    height: 30px;
	    line-height: 30px;
	}
	.top .top-c .top-c-Left a{
	    font-size: 14px;
	    color: #fff;
	}
	.top .top-c .top-c-Right{
	    width: 262px;
	    height: 30px;
	    line-height: 30px;
	    float: right;
	}
	.top .top-c .top-c-Right a{
	    font-size: 14px;
	    color: #fff;
	    display: inline;
	    padding-right: 26px;
	}
	/*导航栏*/
	.nav{
	    width: 100%;
	    height: 60px;
	    background:#ea614a;
	}
	.nav .nav-c{
	    width: 1210px;
	    height: 60px;
	    margin: 0 auto;
	}
	.nav .nav-c .logo{
	    float: left;
		padding-top:10px;
	}
	.nav .nav-c .logo img{
		width:200px ;
		height: 40px;
	}
	.nav .nav-c .list{
	    width: 670px;
	    height: 60px;
	    line-height: 60px;
		margin-left:290px;
	}
	.nav .nav-c .list ul li{
	    float: left;
		width: 126px;
		height: 60px;
	}
	.nav .nav-c .list ul li a{
	    display: inline-block;
	    width: 126px;
	    height: 60px;
	    line-height: 60px;
	    color: #fff;
	    font-size: 22px;
	    text-align: center;
	}
	.nav .nav-c .list ul li a:hover{
		background:#fff;
		color:#fa0f0f;
	}
	
		
	/*评论区*/
	.review{
	    width: 1120px;
	    margin: 24px auto 0 auto;
		box-shadow:0px 5px 9px 0px rgba(98,100,100,0.48);
		/* overflow: hidden; */
		position: relative;
	}
	.review .pic-c{
	    width: 1120px;
	    height: 300px;
	    background: #e8e8e8;
	}
	.review .pic-z{
		width: 86px;
		height: 86px;
		position: absolute;
		margin:-30px 0 0 60px;
	}
	.review .pic-z img{
		width: 86px;
		height: 86px;
		border-radius: 50%;
	}
	.review .xinxi{
		width:1120px;
		height: 60px;
		line-height: 60px;
	}
	.review .xinxi .review-L{
	    float: left;
	    padding-left: 160px;
	}
	.review .xinxi .review-L li{
	    float: left;
		margin-right:10px;
		color: #626464 ;
	}
	.review .xinxi .review-L .col{
		color: #EA614A;
		font-size: 30px;
	}
	.review .xinxi .review-R{
	    float: right;
	    margin-right: 40px;
	}
	.review .xinxi .review-R li{
	    float: left;
	}
	.review .xinxi .review-R li a{
	    color: #000;
	    padding-left: 30px;
	}
	.review .xinxi .review-R li span{
	    display: inline-block;
	    margin:0 10px;
	}
	/*旅游攻略及公寓推荐*/
	.tourism{
	    width: 100%;
	    overflow: hidden;
	}
	.tourism .tourism-c{
	    width: 1120px;
	    margin: 0 auto;
	}
	.tourism .tourism-c .travel-guides{
	    float: left;
		
	}
	.tourism .tourism-c .travel-guides .story-content{
		width:720px;
		box-shadow:0 5px 9px 0
		rgba(98,100,100,.48);
		border-radius: 2px;
		margin-top:100px;
	}
	.tourism .tourism-c .travel-guides .story-content h2{
	    width: 64px;
	    height: 28px;
	    border: 1px solid #EA614A ;
	    border-radius: 10px;
		margin-left:20px;
	    font-size: 14px;
	    line-height: 28px;
	    text-align: center;
		color:#999;
	}
	.tourism .tourism-c .travel-guides .story-content ul{
		padding-bottom:20px;
	}
	.tourism .tourism-c .travel-guides .story-content ul li{
	    width: 680px;
	    margin-top: 28px;
		margin-left:20px;
	}
	.tourism .tourism-c .travel-guides .story-content ul li p{
	    font-size: 18px;
	    line-height: 32px;
	}
	.tourism .tourism-c .travel-guides .story-content ul li .pic-big{
	    width: 680px;
	     margin-top: 16px;
	}
	.tourism .tourism-c .travel-guides .story-content ul li .pic-big img{
		width: 680px;
	}
	.tourism .tourism-c .travel-guides h4{
	    font-size:18px;
	    margin:46px 0 30px 0;
		color:#333;
		font-weight: normal;
	}
	.tourism .tourism-c .travel-guides .comments{
	    width: 720px;
	    height: 140px;
	    resize: none;
		border:1px solid  #EA614A;
	}
	.tourism .tourism-c .travel-guides .pub{
	    width: 720px;
	    height: 40px;
	    margin:26px 0 40px 0;
	}
	.tourism .tourism-c .travel-guides .pub .pub-L{
	    float: left;
	    margin-left:14px;
		color:#333;
	}
	.tourism .tourism-c .travel-guides .pub .pub-R{
	    float: right;
	    width: 126px;
	    height: 40px;
	    line-height: 40px;
	    text-align: center;
	    background: #EA614A;
	    border-radius: 8px;
		color:#fff;
	}
	.tourism .tourism-c .travel-guides .report{
	    width: 720px;
	    border-top:1px solid #EA614A;
	    overflow: hidden;
	}
	.tourism .tourism-c .travel-guides .report .report-L{
	    float: left;
	    height: 76px;
	    margin:40px 0 40px 20px;
	}
	.tourism .tourism-c .travel-guides .report .report-R{
	    float: right;
	    width: 80px;
	    font-size: 12px;
	    margin-top: 102px;
	}
	
	.tourism .tourism-c .travel-guides .report .report-R span{
	    padding-left: 14px;
	}
	.tourism .tourism-c .travel-guides .report .report-L p{
	    padding-left: 66px;
	    font-size: 12px;
	    line-height: 28px;
	}
	.tourism .tourism-c .travel-guides .report .report-L .gray{
		color:#999;
	}
	
	.tourism .tourism-c .travel-guides .report .reply {
	    width: 720px;
	    height: 80px;
	    display: block;
	    resize: none;
	    background: #EA614A;
		border:1px solid #EA614A;
		opacity: .7;
	
	}
	.tourism .tourism-c .travel-guides .report .btn{
	    width: 180px;
	    height: 30px;
	    float: right;
	    margin-top: 10px;
	}
	.tourism .tourism-c .travel-guides .report .btn input{
	    width: 64px;
	    height: 30px;
	    margin-left: 20px;
	    border-radius: 8px;
		border: 1px solid  #EA614A;
		background:#EA614A;
	}
	.tourism .tourism-c .travel-guides .report .btn .cancel{
	    background: #fff;
		border: 1px solid  #EA614A ;
		border-radius: 8px;
	}
	.tourism .tourism-c .apartment{
	    float: right;
	}
	.tourism .tourism-c .apartment h3{
	    width: 310px;
	    height: 32px;
	    margin-top: 100px;
	    border-bottom: 4px solid #bbb;
	}
	.tourism .tourism-c .apartment ul li{
	    width: 310px;
	    height:233px;
		margin-top: 20px;
	}
	.tourism .tourism-c .apartment ul li img{
		width: 310px;
		height: 233px;
	}
	.tourism .tourism-c .article{
	    float: right;
		width: 310px;
	}
	.tourism .tourism-c .article h3{
	    width: 310px;
	    height: 32px;
	    margin-top: 20px;
	    border-bottom: 4px solid #bbb;
	}
	.tourism .tourism-c .article ul li{
		margin-top:10px;
		list-style-type: square;
		margin-left:20px;
	}
	.tourism .tourism-c .article ul li:hover{
		color:#EA614A;
		text-decoration: underline;
	}
</style>
