<template>
	<div>
		<!--top-->
		<landTop></landTop>
		<!--nav-->
		<landNav></landNav>
		<!--message"-->
		<landMessage></landMessage>
		<!--landlords-->
		<landLandlords></landLandlords>
		<!--footer-->
		<tenFooter></tenFooter>
	</div>
</template>

<script>


	import landTop from "@/components/landlord_story/landTop.vue"
	import landNav from "@/components/landlord_story/landNav.vue"
	import landMessage from "@/components/landlord_story/landMessage.vue"
	import landLandlords from "@/components/landlord_story/landLandlords.vue"
		import tenFooter from "@/components/common/tenFooter.vue"
	export default{
		components:{
			landTop,
			landNav,
			landMessage,
			landLandlords,
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

/*房东图片*/
.message{
    width:100%;
    height: 310px;
    margin-top: 20px;
}
.message .message-c{
    width: 1210px;
    height: 310px;
    margin: 0 auto;
}
.message .message-c .pic{
    float: left;
    width: 934px;
    height: 310px;
}
.message .message-c .pic img{
	width: 934px;
	height: 310px;
}
.message .message-c .landlord{
    float: right;
    width: 274px;
    height: 308px;
}
.message .message-c .landlord p{
	text-align: center;
	margin-top:80px;
}
.message .message-c .landlord h3{
	text-align: center;
	margin-top: 20px;
}
.message .message-c .landlord .mylandlord{
    width: 168px;
    height: 50px;
    background: #EA614A;
    font-size: 16px;
    border-radius: 3px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
    color: #fff;
    margin:30px 0 0 50px;
}
/*房东故事以及推荐公寓*/
.landlords{
    width: 100%;
}
.landlords .landlords-c{
    width: 1210px;
    margin: 0 auto;
    overflow: hidden;
}
.landlords .landlords-c .story{
    float: left;
    width: 846px;
    margin-top: 62px;
}
.landlords .landlords-c .story .story-title{
    width: 846px;
    height: 42px;
    border-bottom: 1px solid #333;
}
.landlords .landlords-c .story .story-title .book{
    width: 30px;
    height: 30px;
	float: left;
	margin-right: 15px;
}
.landlords .landlords-c .story .story-title .book img{
	width: 30px;
	height: 30px;
}
.landlords .landlords-c .story .story-title .ls{
    height: 30px;
	font-size: 20px;
}
.landlords .landlords-c .story ul{
    width: 886px;
    overflow: hidden;
}
.landlords .landlords-c .story ul li{
    width: 352px;
    height: 446px;
    margin: 22px 58px 22px 24px;
    float: left;
	box-shadow:0 3px 5px 0
	rgba(98,100,100,.48);
	border-radius: 1px;
}
.landlords .landlords-c .story ul li .pic{
    width: 330px;
    height: 322px;
    background: #e8e8e8;
    margin: 14px 11px;
}
.landlords .landlords-c .story ul li .pic img{
	width: 330px;
	height: 322px;
}
.landlords .landlords-c .story ul li p{
    text-align: center;
    padding-top: 12px;
    font-size: 16px;
}
.landlords .landlords-c .story ul li p span{
	display: inline-block;
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
.landlords .landlords-c .story ul li p span img{
	width: 20px;
	height: 20px;
}
.landlords .landlords-c .story ul li .color{
    padding-top: 20px;
}
.landlords .landlords-c .story ul li .color:hover{
    color: #ff9800;
}
.landlords .landlords-c .apartment{
    float: right;
    width: 300px;
    margin-top: 62px;
}
.landlords .landlords-c .apartment h3{
    font-size: 20px;
    width: 300px;
    height: 42px;
    border-bottom: 1px solid #333
}
.landlords .landlords-c .apartment ul li{
    width: 300px;
    height: 202px;
    margin: 22px 0;
	position: relative;
}
.landlords .landlords-c .apartment ul li img{
	width:300px;
	height: 202px;
}
.landlords .landlords-c .apartment ul li span{
	position: absolute;
	display: block;
	width: 120px;
	height:40px;
	background: #EA614A;
	opacity: .6;
	left:50%;
	top:50%;
	margin-left:-60px;
	margin-top:-20px;
	color:rgba(255,255,255,1);
	line-height: 40px;
	text-align: center;
}
/*页脚*/


</style>
