<template>
	<div>
		<!--top-->
		<tenTop></tenTop>
		<!--nav-->
		<tenNav></tenNav>
		<!--pic-->
		<tenPic></tenPic>
		<!--tenant-->
		<tenTenant></tenTenant>
		<!--footer-->
		<tenFooter></tenFooter>
	</div>
</template>

<script>


	import tenTop from "@/components/tenant_story/tenTop.vue"
	import tenNav from "@/components/tenant_story/tenNav.vue"
	import tenPic from "@/components/tenant_story/tenPic.vue"
	import tenTenant from "@/components/tenant_story/tenTenant.vue"
	import tenFooter from "@/components/common/tenFooter.vue"
	export default{
		components:{
			tenTop,
			tenNav,
			tenPic,
			tenTenant,
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

/*租客图片*/
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
    background: #e8e8e8;
}
.message .message-c .pic img{
	width:934px;
	height:310px ;
}
.message .message-c .tenanter{
    float: right;
    width: 274px;
    height: 308px;
}
.message .message-c .tenanter p{
	text-align: center;
	margin-top:80px;
}
.message .message-c .tenanter h3{
	text-align: center;
	margin-top: 20px;
}
.message .message-c .tenanter .mytenanter{
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
/*租客故事以及推荐公寓*/
.tenant{
    width: 100%;
}
.tenant .tenant-c{
    width: 1210px;
    margin: 0 auto;
    overflow: hidden;
}
.tenant .tenant-c .story{
    float: left;
    width: 886px;
    margin-top: 62px;
}
.tenant .tenant-c .story .story-title{
    width: 846px;
    height: 42px;
    border-bottom: 1px solid #333;
}
.tenant .tenant-c .story .story-title .book{
    width: 30px;
    height: 30px;
    float: left;
    margin-right: 15px;
}
.tenant .tenant-c .story .story-title .book img{
    width: 30px;
    height: 30px;
}
.tenant .tenant-c .story .story-title .ls{
    height: 30px;
    font-size: 20px;
}
.tenant .tenant-c .story ul li{
    width: 846px;
    height: 446px;
    background:#fff;
	box-shadow:0px 3px 5px 0px
	rgba(98,100,100,.48);
	border-radius: 1px;
}
.tenant .tenant-c .story ul li .pic{
    width: 806px;
    height: 336px;
	margin:20px 0 0 20px;
    background: #e8e8e8;
}
.tenant .tenant-c .story ul li .pic img{
	 width: 806px;
	height: 336px;
}
.tenant .tenant-c .story ul li .names{
    width: 844px;
    height: 110px;
    border-top:none ;
}
.tenant .tenant-c .story ul li .names p{
    text-align: center;
    padding-top: 12px;
    font-size: 16px;
}
.tenant .tenant-c .story ul li .names p span{
	display: inline-block;
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
.tenant .tenant-c .story ul li .names p span img{
	width: 20px;
	height: 20px;
}
.tenant .tenant-c .story ul li .names .color{
    padding-top: 20px;
}
.tenant .tenant-c .story ul li .names .color:hover{
    color: #ff9800;
}
.tenant .tenant-c .apartment{
    float: right;
    width: 300px;
    margin-top: 62px;
}
.tenant .tenant-c .apartment h3{
    font-size: 20px;
    width: 300px;
    height: 42px;
    border-bottom: 1px solid #333;
}
.tenant .tenant-c .apartment ul li{
    width: 300px;
    height: 202px;
    margin: 22px 0;
	position: relative;
}
.tenant .tenant-c .apartment ul li img{
	width:300px;
	height: 202px;
}
.tenant .tenant-c .apartment ul li span{
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
.tenant .tenant-c .apartment ul li p{
	width:70px;
	border:15px solid #EA614A;
	border-right:15px solid transparent;
	position: absolute;
	margin-top:-187px;
	opacity: .6;
}
.tenant .tenant-c .apartment ul li p b{
	position: absolute;
	margin:-15px 0 0 -15px;
	width:95px;
	height:30px;
	line-height: 30px;
	background:transparent;
	padding-left:5px;
	color:#fff;
}
/*页脚*/


</style>
