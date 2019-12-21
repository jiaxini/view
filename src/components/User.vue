<template>
		<div class="content">
			<div class="ng">
				<ul class="left"> 
					<li class="default">
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
					<li>
						<a href="order.html">
							<span>我的订单</span>
						</a>
					</li>
				</ul>
				
				<div class="right">
					<div class="basic">
						<h1>基本信息</h1>
						<div>
							<img :src="pic.user" />
							<div>
								<p>昵称已被占用</p>
								<p>
									<span>等级： </span>
									<img :src="pic.V5" />
									<span>距离下个等级还需消费300元</span>
								</p>
								<p>
									<a href="javascript:;">修改昵称</a>
									<a href="javascript:;">更换头像</a>
								</p>
							</div>
						</div>
					</div>
					<div class="recent">
						<h1>近期动态</h1>
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
						 			<a href="pro_details.html"><img :src="pic.pro_1" /></a>
						 			<a href="pro_details.html"><p>温碧泉盈润保湿洁面乳150g深层清洁补水</p></a>
						 		</div>
						 		<div>150g</div>
						 		<div>X 1</div>
						 		<div>￥299.00</div>
						 		<div>
						 			<span>016-8-26</span>
						 			<span>23:56:30</span>
						 		</div>
						 		<div>交易成功</div>
						 		
						 	</div>
						 	<div class="box_cont">
						 		<div>
						 			<a href="pro_details.html"><img :src="pic.pro_2" /></a>
						 			<a href="pro_details.html"><p>温碧泉盈润保湿洁面乳150g深层清洁补水</p></a>
						 		</div>
						 		<div>150g</div>
						 		<div>X 1</div>
						 		<div>￥299.00</div>
						 		<div>
						 			<span>016-8-26</span>
						 			<span>23:56:30</span>
						 		</div>
						 		<div>交易成功</div>
						 		
						 	</div>
						</div>												 
					</div>
					<div class="like">
					 	<h1>猜你喜欢</h1>
					 	<div class="carousel">
					 		<button class="left"></button>
					 		<button class="right"></button>
					 		<div>
					 			<ul class="lunbo">
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_3" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_1" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_6" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_1" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_3" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_1" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_3" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 				<li>
					 					<a href="pro_details.html">
					 						<img :src="pic.list_pro_6" />
					 						<p>
					 							<span>韩束墨菊深度保湿氨基酸洁面乳150ml</span>
					 						</p>
					 					</a>
					 				</li>
					 			</ul>
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
                user : require("@/assets/user/user.png"),
                V5 : require("@/assets/user/V5.png"),
                pro_1 : require("@/assets/order_details/pro_1.png"),
                pro_2 : require("@/assets/order_details/pro_2.png"),
                list_pro_3 : require("@/assets/shop_list/pro_3.png"),
                list_pro_1 : require("@/assets/shop_list/pro_1.png"),
                list_pro_6 : require("@/assets/shop_list/pro_6.png")
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
.content>.ng>.left>li:nth-child(1){ background: url(../assets/address/add11.png) no-repeat center; background-position:50% 40%, center; background-color: #ff9933;}
.content>.ng>.left>li:nth-child(1):hover{ background: url(../assets/address/add11.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(2){ background: url(../assets/address/add2.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(2):hover{ background: url(../assets/address/add22.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(3){ background: url(../assets/address/add3.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(3):hover{ background: url(../assets/address/add33.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(4){ background: url(../assets/address/add4.png) no-repeat center; background-position:50% 40%, center;}
.content>.ng>.left>li:nth-child(4):hover{ background: url(../assets/address/add44.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(5){ background: url(../assets/address/add5.png) no-repeat center; background-position:50% 40%, center;}
.content>.ng>.left>li:nth-child(5):hover{ background: url(../assets/address/add55.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center;}

.content>.ng>.right{ overflow: hidden; background: white; padding-bottom: 12px;}
.content>.ng>.right>.basic{ overflow: hidden;}
.content>.ng>.right>.basic>h1{ border-left: 5px solid #339933; font-size: 16px; color: #333333; padding-left: 24px ; line-height: 16px; margin-top: 30px;}
.content>.ng>.right>.basic>div>img{ display: block; float: left; margin-top: 20px; margin-left: 30px; margin-right: 20px;}
.content>.ng>.right>.basic>div>div{ float: left; margin-top: 20px;}
.content>.ng>.right>.basic>div>div>p{ color: #333333;}
.content>.ng>.right>.basic>div>div>p:nth-child(1){ font-size: 24px; line-height: 24px;}
.content>.ng>.right>.basic>div>div>p:nth-child(2){ margin-top: 30px;}
.content>.ng>.right>.basic>div>div>p:nth-child(2)>span{ float: left; display: block;}
.content>.ng>.right>.basic>div>div>p:nth-child(2)>img{ float: left; display: block;}
.content>.ng>.right>.basic>div>div>p:nth-child(2)>span:nth-child(3){ margin-left: 25px; font-size: 14px; color: #666666;}
.content>.ng>.right>.basic>div>div>p:nth-child(2)>span:nth-child(1){ font-size: 16px; color: #FF9933; margin-top: -4px;}
.content>.ng>.right>.basic>div>div>p:nth-child(3)>a{ display: block; float: left; font-size: 14px; color: #666666; text-decoration: underline; margin-top: 24px; margin-right: 22px;}
.content>.ng>.right>.recent>h1{ border-left: 5px solid #339933; font-size: 16px; color: #333333; padding-left: 24px ; line-height: 16px; margin-top: 30px;}
.content>.ng>.right>.recent>.box{ margin-top: 30px; margin-left: 30px; border: 1px solid #CCCCCC; width: 960px;}
.content>.ng>.right>.recent>.box>.box_title{ height: 30px; background: #CCCCCC;}
.content>.ng>.right>.recent>.box>.box_title>span{ line-height: 30px; display: block; float: left; font-size: 16px; color: #333333; text-align: center; margin-right: 50px;} 
.content>.ng>.right>.recent>.box>.box_title>span:nth-child(1){ width: 320px;}
.content>.ng>.right>.recent>.box>.box_title>span:nth-child(2){ width: 60px;}
.content>.ng>.right>.recent>.box>.box_title>span:nth-child(3){ width: 60px;}
.content>.ng>.right>.recent>.box>.box_title>span:nth-child(4){ width: 80px;}
.content>.ng>.right>.recent>.box>.box_title>span:nth-child(5){ width: 100px;}
.content>.ng>.right>.recent>.box>.box_cont{ height: 98px; border-top: 1px solid #CCCCCC; overflow: hidden;}
.content>.ng>.right>.recent>.box>.box_cont>div{ font-size: 16px; color: #666666; margin-right: 50px; text-align: center; line-height: 98px; float: left;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(1){ width: 320px;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(2){ width: 60px;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(3){ width: 60px;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(4){ width: 80px;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(5){ width: 100px;margin-right: 26px; padding-top: 30px;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(1)>a>img{ margin: 8px; display: block; float: left;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(1)>a>p{ margin-top: 20px; line-height: 24px; width: 210px; float: left; text-align: left; font-size: 14px; color: #333333;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(1)>a:hover>p{ color: #339933;}
.content>.ng>.right>.recent>.box>.box_cont>div:nth-child(5)>span{ font-size: 14px; display: block; line-height: 20px;}
.content>.ng>.right>.like>h1{ border-left: 5px solid #339933; font-size: 16px; color: #333333; padding-left: 24px ; line-height: 16px; margin-top: 30px;}
.content>.ng>.right>.like>.carousel{ margin-top: 30px; margin-bottom: 6px;}
.content>.ng>.right>.like>.carousel>button{ cursor: pointer; width: 22px; height: 39px; background: none; border: none;}
.content>.ng>.right>.like>.carousel>.left{ float: left; margin-top: 80px; margin-left: 30px; background: url(../assets/user/left.png);}
.content>.ng>.right>.like>.carousel>.left:hover{ background: url(../assets/user/left_h.png);}
.content>.ng>.right>.like>.carousel>.right{ float: right; margin-top: 80px; margin-right: 30px; background: url(../assets/user/right.png);}
.content>.ng>.right>.like>.carousel>.right:hover{ background: url(../assets/user/right_h.png);}
.content>.ng>.right>.like>.carousel>div{ width: 860px; overflow: hidden; margin: 0 auto;}
.content>.ng>.right>.like>.carousel>div>ul{ width: 999999px; clear: both; overflow: hidden;}
.content>.ng>.right>.like>.carousel>div>ul>li{ float: left; margin-left: 20px; width: 148px; height: 198px; border: 1px solid #CCCCCC;}
.content>.ng>.right>.like>.carousel>div>ul>li:hover{ border: 1px solid #FF9933;}
.content>.ng>.right>.like>.carousel>div>ul>li>a{display: block; width: 148px;}
.content>.ng>.right>.like>.carousel>div>ul>li>a>img{ height: 120px; display: block; margin: 16px auto;}
.content>.ng>.right>.like>.carousel>div>ul>li>a>p{ display: block; background: #b2b2b2; padding: 5px 0; }
.content>.ng>.right>.like>.carousel>div>ul>li>a>p>span{ display: block; width: 124px; line-height: 18px; color: white; margin: 0 auto;}

</style>