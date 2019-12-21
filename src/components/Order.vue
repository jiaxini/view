<template>
		<div class="content">
			<div class="ng">
				<ul class="left"> 
					<li>
						<a href="user.html">
							<span>我的加西妮</span>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<span>个人资料</span>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<span>修改密码</span>
						</a>
					</li>
					<li>
						<a href="address.html">
							<span>收货地址</span>
						</a>
					</li>
					<li class="default">
						<a href="order.html">
							<span>我的订单</span>
						</a>
					</li>
				</ul>
				
				<div class="right">
					<div class="title">
						<div class="choice on">全部订单</div>
						<div class="choice">待付款</div>
						<div class="choice">待发货</div>
						<div class="choice">待收货</div>
						<div class="choice">待评论</div>
						<div class="search">
							<input type="text" placeholder="商品名称/商品编号/订单号" />
							<a href="javascript:;"></a>
						</div>
					</div>
					<div class="choice_cont show">
						<div class="cont_title">
							<span>商品信息</span>
							<span>单价</span>
							<span>数量</span>
							<span>实付款</span>
							<span>交易状态</span>
							<span>操作</span>
						</div>
						
						<div class="pro">
							<div class="pro_title">
								<span>订单编号：253543515311351</span>
								<span>交易时间：2016年8月8日</span>
								<router-link to="detail">查看订单详情</router-link>
							</div>
							<div class="pro_cont">
								<div>
									<a href="pro_details.html"><img :src="pic.pro1" /></a>
									<p>
										<a class="text" href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水</a>
										<span>规格：150g</span>
									</p>
								</div>
								<div>￥299.00</div>
								<div>X 1</div>
								<div>￥299.00</div>
								<div>
									<span>物流运输中</span>
									<a href="javascript:;">查看物流</a>
								</div>
								<div>
									<a class="confirm" href="javascript:;">确认收货</a>
								</div>
							</div>							
						</div>
						
						<div class="pro">
							<div class="pro_title">
								<span>订单编号：253543515311351</span>
								<span>交易时间：2016年8月8日</span>
								<router-link to="detail">查看订单详情</router-link>
							</div>
							<div class="pro_cont">
								<div>
									<a href="pro_details.html"><img :src="pic.pro2" /></a>
									<p>
										<a class="text" href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水</a>
										<span>规格：150g</span>
									</p>
								</div>
								<div>￥299.00</div>
								<div>X 1</div>
								<div>￥598.00</div>
								<div>
									<i>交易成功</i>
									<i><a href="javascript:;">查看物流</a></i>
								</div>
								<div>
									<a class="evaluate" href="javascript:;">评价</a>
									<a class="again" href="javascript:;">再次购买</a>
								</div>
							</div>
							
						</div>
						
						<div class="pro">
							<div class="pro_title">
								<span>订单编号：253543515311351</span>
								<span>交易时间：2016年8月8日</span>
								<router-link to="detail">查看订单详情</router-link>
							</div>
							<div class="pro_cont">
								<div>
									<a href="pro_details.html"><img :src="pic.pro3" /></a>
									<p>
										<a class="text" href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水</a>
										<span>规格：150g</span>
									</p>
								</div>
								<div>￥299.00</div>
								<div>X 1</div>
								<div>￥598.00</div>
								<div>
									<i>交易成功</i>
									<i><a href="javascript:;">查看物流</a></i>
								</div>
								<div>
									<div>
										<a class="again" href="javascript:;">再次购买</a>
									</div>
								</div>
							</div>
							<div class="pro_cont">
								<div>
									<a href="pro_details.html"><img :src="pic.pro4" /></a>
									<p>
										<a class="text" href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水</a>
										<span>规格：150g</span>
									</p>
								</div>
								<div>￥299.00</div>
								<div>X 1</div>
								<div>￥598.00</div>
								<div>
									<i>交易成功</i>
									<i><a href="javascript:;">查看物流</a></i>
								</div>
								<div>									
									<div>
										<a class="again" href="javascript:;">再次购买</a>
									</div>
								</div>
							</div>
						</div>
						
						<div class="page">
							<a href="javascript:;"></a>
							<a href="javascript:;">1</a>
							<a class="here" href="javascript:;">2</a>
							<a href="javascript:;">3</a>
							<a href="javascript:;">...</a>
							<a href="javascript:;">60</a>
							<a href="javascript:;">></a>
							<span>共30页，跳到第</span>
							<input type="text" />
							<span>页</span>
							<a href="javascript:;">确定</a>
						</div>
						
					</div>
					<div class="choice_cont"></div>
					<div class="choice_cont"></div>
					<div class="choice_cont"></div>
					<div class="choice_cont"></div>
				</div>			
			</div>
			
		</div>
</template>
<script>
export default {
    data(){
        return {
            pic: {
                pro1 : require("@/assets/order/pro1.png"),
                pro2 : require("@/assets/order/pro2.png"),
                pro3 : require("@/assets/order/pro3.png"),
                pro4 : require("@/assets/order/pro4.png")
            }
        }
    }
}
</script>
<style scoped>
.content{ overflow: hidden;}
.content>.ng{ margin-top: 30px;}
.content>.ng>.left{ margin-right: 30px; margin-left: 10px; float: left; width: 150px; background: white;}
.content>.ng>.left>li{ width: 150px; height: 160px;text-align: center;}
.content>.ng>.left>li.default{ background: #ff9933;}
.content>.ng>.left>li.default>a>span{ color: white;}
.content>.ng>.left>li:hover>a>span{ color: white;}
.content>.ng>.left>li>a{ display: block; width: 100%; height: 160px;}
.content>.ng>.left>li:nth-child(4)>a>img{ display: none;} 
.content>.ng>.left>li:nth-child(4)>a>img:nth-child(2){ display: block;}
.content>.ng>.left>li>a>span{ display: block; font-size: 16px; color: #333333; padding-top: 100px;}
.content>.ng>.left>li:nth-child(1){ background: url(../assets/address/add1.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(1):hover{ background: url(../assets/address/add11.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(2){ background: url(../assets/address/add2.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(2):hover{ background: url(../assets/address/add22.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(3){ background: url(../assets/address/add3.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(3):hover{ background: url(../assets/address/add33.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(4){ background: url(../assets/address/add4.png) no-repeat center; background-position:50% 40%, center;}
.content>.ng>.left>li:nth-child(4):hover{ background: url(../assets/address/add44.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(5){ background: url(../assets/address/add55.png) no-repeat center; background-position:50% 40%, center; background-color: #ff9933;}
.content>.ng>.left>li:nth-child(5):hover{ background: url(../assets/address/add55.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center;}

.content>.ng>.right{ overflow: hidden; background: white; padding-bottom: 12px;}
.content>.ng>.right>.title{ border: 1px solid #CCCCCC; overflow: hidden;}
.content>.ng>.right>.title>div{ float: left; }
.content>.ng>.right>.title>.choice:hover{ border-top: 4px solid #339933;}
.content>.ng>.right>.title>.choice.on{ border-top: 4px solid #339933;}
.content>.ng>.right>.title>.choice{ cursor: pointer; border-right: 1px solid #CCCCCC; font-size: 16px; color: #333333; width: 150px; height: 54px; border-top: 4px solid #FFFFFF; line-height: 54px; text-align: center;}
.content>.ng>.right>.title>.search{ margin-left: 16px; margin-top: 14px;}
.content>.ng>.right>.title>.search>input{ padding: 0 5px; float: left; width: 169px; height: 28px; border: 1px solid #CCCCCC;}
.content>.ng>.right>.title>.search>a{ float: left; display: block; width: 40px; height: 30px; background: url(../assets/order/search.png);}
.content>.ng>.right>.choice_cont{ display: none;}
.content>.ng>.right>.choice_cont.show{ display: block;}
.content>.ng>.right>.choice_cont>.cont_title{ background: #CCCCCC; overflow: hidden; margin-right: -30px; margin-top: 30px; margin-bottom: 30px;}
.content>.ng>.right>.choice_cont>.cont_title>span{ display: block; float: left; height: 30px; line-height: 30px; font-size: 16px; color: #333333; text-align: center; margin-right: 50px;}
.content>.ng>.right>.choice_cont>.cont_title>span:nth-child(1){ width: 310px;}
.content>.ng>.right>.choice_cont>.cont_title>span:nth-child(2){ width: 70px;}
.content>.ng>.right>.choice_cont>.cont_title>span:nth-child(3){ width: 50px;}
.content>.ng>.right>.choice_cont>.cont_title>span:nth-child(4){ width: 80px;}
.content>.ng>.right>.choice_cont>.cont_title>span:nth-child(5){ width: 80px;}
.content>.ng>.right>.choice_cont>.cont_title>span:nth-child(6){ width: 130px;}
.content>.ng>.right>.choice_cont>.pro{ border: 1px solid #CCCCCC; margin-bottom: 20px;}
.content>.ng>.right>.choice_cont>.pro>.pro_title{ overflow: hidden; background: #efefef;}
.content>.ng>.right>.choice_cont>.pro>.pro_title>span{ float: left; display: block; height: 28px; line-height: 28px; color: #999999;}
.content>.ng>.right>.choice_cont>.pro>.pro_title>span:nth-child(1){ margin-left: 40px;}
.content>.ng>.right>.choice_cont>.pro>.pro_title>span:nth-child(2){ margin-left: 24px;}
.content>.ng>.right>.choice_cont>.pro>.pro_title>a{ float: right; color: #ff9933; text-decoration: underline; line-height: 28px; margin-right: 50px;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont{ overflow: hidden; height: 98px; border-top: 1px solid #CCCCCC;margin-right: -30px; }
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div{ text-align: center; float: left; margin-right: 50px; line-height: 98px; font-size: 16px ; color: #666666;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(1){ width: 310px; line-height: 26px;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(1)>p>a:hover{ color: #339933 ;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(2){ width: 70px; }
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(3){ width: 50px; }
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(4){ width: 80px; }
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(5){ width: 80px; line-height: 24px; padding-top: 18px; font-size: 14px;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(6){ width: 130px; }
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(1)>a{ float: left; margin: 8px;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div>p{ float: left; width: 210px; margin-top: 8px;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div>p>a{ font-size: 14px; color: #333333; text-align: left; display: block;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div>p>span{ float: left;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(5)>span{ color: #339933;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(5)>a{ text-decoration: underline; color: #ff9933;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(5)>i{display: block; font-style: normal; color: #666666; margin-top: 4px;}


.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(6)>.confirm{display: block; font-size: 14px; width: 80px; height: 30px; line-height: 30px; text-align: center; color: white; background: #ff9933; margin-top: 35px; margin-left: 40px;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(6)>.evaluate{ margin-left: 25px; line-height: 30px; display: block; font-size: 14px; text-decoration: underline; color: #ff9933; margin-top: 20px;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(6)>.again{ margin-left: 25px; line-height: 30px; display: block; font-size: 14px; color: #666666;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(6)>.again:hover{ color: #339933;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(6)>div>.again{margin-top: 35px; margin-left: 25px; line-height: 30px; display: block; font-size: 14px; color: #666666;}
.content>.ng>.right>.choice_cont>.pro>.pro_cont>div:nth-child(6)>div>.again:hover{ color: #339933;}

.content>.ng>.right>.choice_cont>.page{margin: 28px auto; width: 480px; overflow: hidden; padding-top: 30px;}
.content>.ng>.right>.choice_cont>.page>a{ margin-right: 10px; text-align: center; font-size: 14px; display: block; float: left; width: 25px; height: 25px; border: 1px solid #d2d2d2; color: #666666;}
.content>.ng>.right>.choice_cont>.page>a:hover{ color: #339933; border: 1px solid #339933;}
.content>.ng>.right>.choice_cont>.page>a.here{ background: #669933; color: white; border: none; margin-top: 1px;}
.content>.ng>.right>.choice_cont>.page>input{ text-align: center; margin-right: 10px; display: block; float: left; width: 25px; height: 25px; background: none; border: 1px solid #d2d2d2; }
.content>.ng>.right>.choice_cont>.page>span{ margin-right: 10px; display: block; float: left;}
.content>.ng>.right>.choice_cont>.page>a:nth-child(11){ width: 50px;}
.content>.ng>.right>.choice_cont>.page>a:nth-child(11):hover{ background: #52C837; color: white;}
</style>