<template>
		<div class="content">
			<div class="ng">
				<ul class="left"> 
					<li>
						<router-link to="user">
							<span>我的加西妮</span>
						</router-link>
					</li>
					<li>
						<router-link to="user">
							<span>个人资料</span>
						</router-link>
					</li>
					<li>
						<router-link to="user">
							<span>修改密码</span>
						</router-link>
					</li>
					<li>
						<router-link to="address">
							<span>收货地址</span>
						</router-link>
					</li>
					<li class="default">
						<a href="order.html">
							<span>我的订单</span>
						</a>
					</li>
				</ul>
				
				<div class="right">
					<div class="order">
						 <h1>订单详情</h1>
						 <div class="text">
						 	<p>当前订单交易状态：<span>交易已成功</span></p>
						 	<p>
						 		收货地址：大雄    13866666666   广东省 广州市 天河区 大观南路26号长盛商务大厦4楼多迪网络科技公司   510510
						 	</p>
						 	<p>
						 		<span>订单编号: 54165113311</span>
						 		<span>支付宝交易号: 2016081444244321131312</span>
						 		<span>创建时间:2016-08-14 21:43:19</span>
						 	</p>
						 	<p>
						 		<span>发货时间: 2016-08-15 02:10:44 </span>
						 		<span>付款时间: 2016-08-14 21:43:37 </span>
						 		<span>成交时间:2016-08-19 00:49:59</span>
						 	</p>
						 </div>
						 
						 <div class="box">
						 	<div class="box_title">
						 		<span>商品信息</span>
						 		<span>规格</span>
						 		<span>数量</span>
						 		<span>价格</span>
						 		<span>优惠</span>
						 		<span>状态</span>
						 	</div>
						 	<div class="box_cont">
						 		<div>
						 			<img :src="pic.pro_1" />
						 			<p>温碧泉盈润保湿洁面乳150g深层清洁补水</p>
						 		</div>
						 		<div>150g</div>
						 		<div>X 1</div>
						 		<div>￥299.00</div>
						 		<div>满599减300</div>
						 		<div>已签收</div>
						 		
						 	</div>
						 	<div class="box_cont">
						 		<div>
						 			<img :src="pic.pro_2" />
						 			<p>温碧泉盈润保湿洁面乳150g深层清洁补水</p>
						 		</div>
						 		<div>150g</div>
						 		<div>X 1</div>
						 		<div>￥299.00</div>
						 		<div>满599减300</div>
						 		<div>已签收</div>
						 		
						 	</div>
						 </div>
						 
						 <div class="price">						 	
						 	<span>598.00元</span>
						 	<span>交易总金额：</span>
						 </div>
					</div>
					
					<div class="message">
						<h1>物流信息</h1>
						<div class="message_cont">
							<div>
								发货方式：
								<span>快递</span>
								<span>物流公司：顺风快递</span>
								<span>物流编号：25452453115313513</span>
							</div>
							<div>
								<span>物流跟踪：</span>
								<p>
									<span>2016-08-16 00:53:15 【福建石狮公司】的收件员【福建石狮公司】已收件 </span>
									<span>2016-08-16 01:08:15 由【福建石狮公司】发往【福建泉州航空部】 </span>
									<span>2016-08-16 02:15:23 由【福建泉州航空部】发往【广东广州公司】</span>
									<span>2016-08-17 12:52:20 快件已到达【广东广州中转部】 扫描员是【李艳青】上一站是【广东广州公司】</span>
									<span>2016-08-17 13:04:08 由【广东广州公司】发往【广东广州东圃】</span>
									<span>2016-08-17 15:00:11 【广东广州东圃】已收入 </span>
									<span>2016-08-17 15:00:11 【广东广州东圃】的派件员【周伟廷】正在派件 电话:13888888888</span>
									<span>2016-08-17 18:00:11 快递已被签收，签收人是：【本人】</span>
								</p>
							</div>
						</div>
					</div>
				</div>			
			</div>
			
		</div>
</template>
<script>
export default {
    data(){
        return {
            pic: {
                pro_1 : require("@/assets/order_details/pro_1.png"),
                pro_2 : require("@/assets/order_details/pro_2.png")
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
.content>.ng>.right>.order>h1{ margin-top: 30px; border-left: 5px solid #339933; line-height: 16px; font-size: 16px; padding-left: 24px; color: #333333;}
.content>.ng>.right>.order>.text>p{ margin-top: 8px; margin-left: 30px; font-size: 14px; color: #333333;}
.content>.ng>.right>.order>.text>p:nth-child(1)>span{ font-size: 16px; color: #339933;}
.content>.ng>.right>.order>.text>p:nth-child(3)>span{ margin-right: 50px;}
.content>.ng>.right>.order>.text>p:nth-child(4)>span{ margin-right: 50px;}
.content>.ng>.right>.order>.box{ margin-top: 20px; margin-left: 30px; border: 1px solid #CCCCCC; width: 960px;}
.content>.ng>.right>.order>.box>.box_title{ height: 30px; background: #CCCCCC;}
.content>.ng>.right>.order>.box>.box_title>span{ line-height: 30px; display: block; float: left; font-size: 16px; color: #333333; text-align: center; margin-right: 50px;} 
.content>.ng>.right>.order>.box>.box_title>span:nth-child(1){ width: 320px;}
.content>.ng>.right>.order>.box>.box_title>span:nth-child(2){ width: 60px;}
.content>.ng>.right>.order>.box>.box_title>span:nth-child(3){ width: 60px;}
.content>.ng>.right>.order>.box>.box_title>span:nth-child(4){ width: 80px;}
.content>.ng>.right>.order>.box>.box_title>span:nth-child(5){ width: 100px;}
.content>.ng>.right>.order>.box>.box_cont{ height: 98px; border-top: 1px solid #CCCCCC; overflow: hidden;}
.content>.ng>.right>.order>.box>.box_cont>div{ font-size: 16px; color: #333333; margin-right: 50px; text-align: center; line-height: 98px; float: left;}
.content>.ng>.right>.order>.box>.box_cont>div:nth-child(1){ width: 320px;}
.content>.ng>.right>.order>.box>.box_cont>div:nth-child(2){ width: 60px;}
.content>.ng>.right>.order>.box>.box_cont>div:nth-child(3){ width: 60px;}
.content>.ng>.right>.order>.box>.box_cont>div:nth-child(4){ width: 80px;}
.content>.ng>.right>.order>.box>.box_cont>div:nth-child(5){ width: 100px;margin-right: 40px;}
.content>.ng>.right>.order>.box>.box_cont>div:nth-child(1)>img{ margin: 8px; display: block; float: left;}
.content>.ng>.right>.order>.box>.box_cont>div:nth-child(1)>p{ margin-top: 20px; line-height: 24px; width: 210px; float: left; text-align: left; font-size: 14px; color: #333333;}
.content>.ng>.right>.order>.price{ margin-top: 16px; overflow: hidden;}
.content>.ng>.right>.order>.price>span{ font-size: 16px; float: right;}
.content>.ng>.right>.order>.price>span:nth-child(1){ color: #ff9933; margin-right: 30px;}
.content>.ng>.right>.order>.price>span:nth-child(2){ color: #333333;}

.content>.ng>.right>.message{ margin-top: 8px;}
.content>.ng>.right>.message>h1{ border-left: 5px solid #339933; line-height: 16px; color: #333333; padding-left: 24px; font-size: 16px;}
.content>.ng>.right>.message>.message_cont{ margin-left: 30px;}
.content>.ng>.right>.message>.message_cont>div{ margin-top: 10px; color: #333333; font-size: 14px;}
.content>.ng>.right>.message>.message_cont>div>span{  margin-right: 60px;}
.content>.ng>.right>.message>.message_cont>div:nth-child(2)>span{ float: left; display: block; margin-right: 5px;}
.content>.ng>.right>.message>.message_cont>div:nth-child(2)>p{ float: left;}
.content>.ng>.right>.message>.message_cont>div:nth-child(2)>p>span{ display: block;}
.content>.ng>.right>.message>.message_cont>div:nth-child(2)>p>span:last-child{ color: #339933;}
</style>