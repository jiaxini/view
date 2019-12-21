<template>
		<div class="content">
			<div class="ng">
				<div class="now">
					<img :src="pic.progress" />
				</div>
				
				<div class="address">
					<div class="address_title">
						 <span>确认收货地址</span>
						 <a href="javascript:;">管理收货地址</a>
					</div>
					<ul>
						<li class="default">
							<h1>广东广州（大雄 收）</h1>
							<div>广东省广州市天河区</div>
							<div>大观南路26号长盛商务大厦D栋4楼多迪网络科技公司</div>
							<div>收货人：大雄</div>
							<div>电话：13666666666</div>
						</li>
						<li>
							<h1>广东广州（大雄 收）</h1>
							<div>广东省广州市天河区</div>
							<div>大观南路26号长盛商务大厦D栋4楼多迪网络科技公司</div>
							<div>收货人：大雄</div>
							<div>电话：13666666666</div>
						</li>
						<li>
							<h1>广东广州（大雄 收）</h1>
							<div>广东省广州市天河区</div>
							<div>大观南路26号长盛商务大厦D栋4楼多迪网络科技公司</div>
							<div>收货人：大雄</div>
							<div>电话：13666666666</div>
						</li>
					</ul>
				</div>
				
				<div class="box">
					<div class="box_title">
						<div>
							确认订单信息
						</div>
						<div>商品信息</div>
						<div>单价</div>
						<div>数量</div>
						<div>小计</div>
						<div>运费</div>
					</div>
					<ul class="box_cont">
						<li>
							<div>
								
							</div>
							<div>
								<a href="pro_details.html"><img :src="pic.pro1" /></a>
								<div>
									<p><a href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</a></p>
									<span>规格：150g</span>
								</div>
							</div>
							<div class="pri">￥299.00</div>
							<div class="amount">
								X 1
							</div>
							<div class="tot">￥299.00</div>
							<div>
								0.00
							</div>
						</li>
						<li>
							<div>

							</div>
							<div>
								<a href="pro_details.html"><img :src="pic.pro2" /></a>
								<div>
									<p><a href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</a></p>
									<span>规格：150g</span>
								</div>
							</div>
							<div class="pri">￥299.00</div>
							<div class="amount">
								X 2
							</div>
							<div class="tot">￥598.00</div>
							<div>
								0.00
							</div>
						</li>
						<li>
							<div>

							</div>
							<div>
								<a href="pro_details.html"><img :src="pic.pro3" /></a>
								<div>
									<p><a href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</a></p>
									<span>规格：150g</span>
								</div>
							</div>
							<div class="pri">￥299.00</div>
							<div class="amount">
								X 1
							</div>
							<div class="tot">￥299.00</div>
							<div>
								0.00
							</div>
						</li>
						<li>
							<div>
	
							</div>
							<div>
								<a href="pro_details.html"><img :src="pic.pro1" /></a>
								<div>
									<p><a href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</a></p>
									<span>规格：150g</span>
								</div>
							</div>
							<div class="pri">￥299.00</div>
							<div class="amount">
								X 2
							</div>
							<div class="tot">￥598.00</div>
							<div>
								0.00
							</div>
						</li>
						<li>
							<div>
	
							</div>
							<div>
								<a href="pro_details.html"><img :src="pic.pro1" /></a>
								<div>
									<p><a href="pro_details.html">温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</a></p>
									<span>规格：150g</span>
								</div>
							</div>
							<div class="pri">￥299.00</div>
							<div class="amount">
								X 2
							</div>
							<div class="tot">￥598.00</div>
							<div>
								0.00
							</div>
						</li>
					</ul>
			
					
				</div>
				<div class="box_foot">
					<div class="foot_l">
						<a href="shop_cart.html">返回购物车修改</a>
					</div>
					<div class="foot_r">
						 <span>运费：￥0.00</span>
						 <span>合计：</span>
						 <span class="tol">￥3215.00</span>
						 <router-link to="pay">提交</router-link>
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
                progress : require("@/assets/confirm_order/progress.png"),
                pro1 : require("@/assets/shop_cart/pro1.png"),
                pro2 : require("@/assets/shop_cart/pro2.png"),
                pro3 : require("@/assets/shop_cart/pro3.png")
            }
        }
    }
}
</script>
<style scoped>
.content{ overflow: hidden;}
.content>.ng{ margin-top: 30px;}

.content>.ng>.address{ background: white; overflow: hidden; border: 1px solid #CCCCCC; margin-bottom: 30px;}
.content>.ng>.address>.address_title{ border-bottom: 1px solid #CCCCCC; height: 58px; line-height: 58px;}
.content>.ng>.address>.address_title>span{ margin-left: 30px; display: block; float: left; font-size: 16px; color: #000000;}
.content>.ng>.address>.address_title>a{ margin-right: 30px; display: block; float: right; font-size: 16px; color: #339933;}
.content>.ng>.address>ul{ margin-right: -32px; padding: 30px; overflow: hidden;}
.content>.ng>.address>ul>li{ cursor: pointer; font-size: 16px; color: #666666; float: left; width: 358px; height: 198px; border: 1px solid #CCCCCC; margin-right: 30px; }
.content>.ng>.address>ul>li:hover{ border: 1px solid #339933; background: url(../assets/confirm_order/darw.png) no-repeat right bottom;}
.content>.ng>.address>ul>li.default{ border: 1px solid #339933; background: url(../assets/confirm_order/darw.png) no-repeat right bottom;}
.content>.ng>.address>ul>li>h1{ border-bottom: 1px solid #CCCCCC; height: 48px; line-height: 48px;  width: 314px; margin: 0 auto;}
.content>.ng>.address>ul>li>div:nth-child(2){ margin-top: 18px;}
.content>.ng>.address>ul>li>div{ line-height: 24px; width: 314px; margin: 0 auto;}

.content>.ng>.box{ border: 1px solid #CCCCCC;}
.content>.ng>.box>.box_title{ overflow: hidden; border-bottom: 1px solid #CCCCCC; background: #efefef;}
.content>.ng>.box>.box_title>div{ text-align: center; float: left; font-size: 16px ; color: #333333; line-height:58px; margin-right: 50px;}
.content>.ng>.box>.box_title>div>span{ display: block; position: relative; float: left; cursor: pointer; margin-left: 18px;}
.content>.ng>.box>.box_title>div>span>label{ display: block; width: 70px; height: 20px; position: absolute; z-index: 10; background: url(../assets/shop_cart/draw_box.png) no-repeat; top: 18px; cursor: pointer;}
.content>.ng>.box>.box_title>div>span>input{ visibility: hidden;}
.content>.ng>.box>.box_title>div>span>input[type=checkbox]:checked+label{ position: absolute; background: url(../assets/shop_cart/draw.png) no-repeat 0 0;}
.content>.ng>.box>.box_title>div>span>label>span{ margin-left: 25px; float: left; font-size: 16px; color: #333333; margin-top: -18px;}
.content>.ng>.box>.box_title>div:nth-child(1){ width: 100px; margin-left: 25px;}
.content>.ng>.box>.box_title>div:nth-child(2){ width: 340px;}
.content>.ng>.box>.box_title>div:nth-child(3){ width: 100px;}
.content>.ng>.box>.box_title>div:nth-child(4){ width: 110px;}
.content>.ng>.box>.box_title>div:nth-child(5){ width: 110px;}
.content>.ng>.box>.box_title>div:nth-child(6){ width: 110px;}

.content>.ng>.box>.box_cont{ overflow: hidden;  background: #FFFFFF; margin-bottom: -1px;}
.content>.ng>.box>.box_cont>li{ overflow: hidden; border-bottom: 1px solid #CCCCCC;}
.content>.ng>.box>.box_cont>li>div{ text-align: center; float: left; font-size: 14px ; color: #333333; margin-right: 50px;}
.content>.ng>.box>.box_cont>li>div:nth-child(1){ width: 90px; margin-right: 15px; height: 100px;}
.content>.ng>.box>.box_cont>li>div:nth-child(2){ width: 410px;}
.content>.ng>.box>.box_cont>li>div:nth-child(2)>a>img{ margin-bottom: 22px; display: block; float: left; margin-top: 22px; margin-right: 18px;}
.content>.ng>.box>.box_cont>li>div:nth-child(2)>div{ float: left;}
.content>.ng>.box>.box_cont>li>div:nth-child(2)>div>p{ width: 265px; line-height: 24px; text-align: left; margin-top: 35px;}
.content>.ng>.box>.box_cont>li>div:nth-child(2)>div>p>a{ color: #333333;}
.content>.ng>.box>.box_cont>li>div:nth-child(2)>div>p>a:hover{ color: #339933;}
.content>.ng>.box>.box_cont>li>div:nth-child(2)>div>span{ display: block; line-height: 30px; text-align: left; color: #666666;}
.content>.ng>.box>.box_cont>li>div:nth-child(3){ width: 100px; padding-top: 55px;}
.content>.ng>.box>.box_cont>li>div:nth-child(4){ width: 110px; padding-top: 55px;}
.content>.ng>.box>.box_cont>li>div:nth-child(5){ width: 110px; padding-top: 55px; color: #FF9900;}
.content>.ng>.box>.box_cont>li>div:nth-child(6){ width: 110px; padding-top: 55px;}


.content>.ng>.box_foot{ overflow: hidden; margin-top: 16px; border: 1px solid #CCCCCC; background: #efefef;}
.content>.ng>.box_foot>.foot_l{ float: left; font-size: 16px; line-height: 78px; margin-left: 20px;}
.content>.ng>.box_foot>.foot_l>a{ color: #333333;}
.content>.ng>.box_foot>.foot_l>a:hover{ color: #339933;}
.content>.ng>.box_foot>.foot_r{ line-height: 78px; float: right;}
.content>.ng>.box_foot>.foot_r>span:nth-child(1){ font-size: 14px; margin-right: 15px;}
.content>.ng>.box_foot>.foot_r>span:nth-child(2){ font-size: 16px;}
.content>.ng>.box_foot>.foot_r>span:nth-child(3){ font-size: 24px; color: #FF9900; margin-right: 20px;}
.content>.ng>.box_foot>.foot_r>a{ display: block; float: right; width: 148px; line-height: 83px; text-align: center; font-size: 36px; background: #FF9933; color: white;}

</style>