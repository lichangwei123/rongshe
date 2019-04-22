<template>
	<div class="footer">
	    <div class="footer-c">
	        <div class="app">
				<img src="@/assets/community/erweima.png" alt="">
				<p>下载APP</p>
			</div>
	        <div class="WeChat">
				<img src="@/assets/community/erweima.png" alt="">
				<p>微信小程序</p>
			</div>
	        <div class="icon">
				<span></span>
				<span class="wechat"></span>
			</div>
	        <div class="details">
	            <ul>
	                <li>联系电话</li>
	                <li>关于客栈</li>
	                <li>加入我们</li>
	                <li>与我沟通</li>
	                <li>我是房客</li>
	                <li>我是房东</li>
	            </ul>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default{
		name:"footer"
	}
</script>

<style>
	.footer{
    margin-top: 162px;
    width: 100%;
    height: 220px;
    background: rgba(230,221,216,1);
    border-top: 1px solid #bbb;
}
.footer .footer-c{
    width: 894px;
    height: 220px;
    margin: 0 auto;
}
.footer .footer-c .app{
    float: left;
    width: 108px;
    height: 154px;
    margin:60px 80px 0 0;
}
.footer .footer-c .app img{
	width: 108px;
	height: 100px;
}
.footer .footer-c .app p{
	font-size: 16px;
	text-align: center;
	height: 54px;
	line-height: 54px;
}
.footer .footer-c .WeChat{
    float: left;
    width: 108px;
    height: 154px;
    margin:60px 90px 0 0;
}
.footer .footer-c .WeChat img{
	width: 108px;
	height: 100px;
}
.footer .footer-c .WeChat p{
	font-size: 16px;
	text-align: center;
	height: 54px;
	line-height: 54px;
}
.footer .footer-c .icon{
    float: left;
    width: 182px;
    height: 60px;
    margin-top: 80px;
   
}
.footer .footer-c .icon span{
	width: 60px;
	height: 60px;
	border-radius: 50%;
	display: inline-block;
	margin-left:20px;
	background:#fff url(../../assets/community/weibo.png) no-repeat center;  
	background-size:25px 25px;
}
.footer .footer-c .icon .wechat{
	background: #fff url(../../assets/community/weixin.png) no-repeat center;
	background-size:25px 25px;
}
.footer .footer-c .details{
    float: right;
    width: 170px;
    height: 108px;
    margin-top: 60px;
}
.footer .footer-c .details ul{
    width: 230px;
    overflow: hidden;
}
.footer .footer-c .details ul li{
    float: left;
    width: 56px;
    font-size: 14px;
    line-height: 38px;
    margin-right:58px;
}

</style>
