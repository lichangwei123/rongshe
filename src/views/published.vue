<template>
	<div>
		<pubTop></pubTop>
		<pubNav></pubNav>
		<pubPic></pubPic>
		<pubContent></pubContent>
		<tenFooter></tenFooter>
	</div>
</template>

<script>
	import pubTop from "@/components/published/pubTop.vue"
	import pubNav from "@/components/published/pubNav.vue"
	import pubPic from "@/components/published/pubPic.vue"
	import pubContent from "@/components/published/pubContent.vue"
		import tenFooter from "@/components/common/tenFooter.vue"
	export default{
		components:{
			pubTop,
			pubNav,
			pubPic,
			pubContent,
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
	/*发表文章上传图片*/
	.pic{
	    width: 100%;
	    height: 320px;
	    margin-top: 40px;
	}
	.pic .pic-c{
	    width: 1210px;
	    height: 320px;
	    background: palegreen;
	    margin: 0 auto;
	}
	/*发表文章标题及内容*/
	.content{
	    width: 100%;
	}
	.content .content-c{
	    width: 1210px;
	    margin: 0 auto;
	}
	.content .content-c h1{
	    font-size: 20px;
	    color:#EA614A ;
	    margin-top: 42px;
	}
	.content .content-c h3{
	    font-size: 16px;
	    color: #333;
	    margin: 20px 0;
		font-weight: normal;
	}
	.content .content-c h3 span{
	    color: #EA614A;
	}
	.content .content-c .write-title{
	    width: 1208px;
	    height: 70px;
	    resize: none;
		border:1px solid #EA614A;
	}
	.content .content-c .write-style{
	    width: 1210px;
	    height: 48px;
	    background: #EA614A;
		box-shadow:0px 3px 4px 1px rgba(133,22,3,0.59);
		margin-top: 16px;
	    border-radius: 15px;
		position: absolute;
	}
	.content .content-c .write{
	    width: 1208px;
	    height: 224px;
	    border: 1px solid #EA614A;
	    border-top: none;
	    resize: none;
	    text-align: center;
	    line-height: 224px;
	    font-size: 14px;
		margin-top:55px;
	}
	.content .content-c .label{
	    width: 1210px;
	    height: 30px;
	    margin-top: 20px;
	}
	.content .content-c .label b{
	    font-size:18px;
	    padding-left: 20px;
		font-weight: normal;
	}
	.content .content-c .label span{
	    display: inline-block;
	    width: 76px;
	    height: 28px;
	    margin:0 14px;
	    background:#EA614A;
		box-shadow:0px 3px 4px 1px rgba(133,22,3,0.59);
		border-radius:14px;
	    text-align: center;
	    line-height: 28px;
	    font-size: 14px;
		color:#fff;
	}
	.content .content-c .release{
	    width: 80px;
	    height: 30px;
	    margin: 30px 0 0 26px;
	    background:#EA614A;
		border-radius:8px;
	    color: #fff;
	    font-size: 14px;
	    text-align: center;
	    line-height: 30px;
	    display: inline-block;
	}
	.content .content-c .delete{
	    width: 80px;
	    height: 30px;
	    margin: 30px 0 0 26px;
	    border:1px solid #EA614A;
		border-radius:8px;
	    color: #333;
	    font-size: 14px;
	    text-align: center;
	    line-height: 30px;
	    display: inline-block;
	}
</style>
