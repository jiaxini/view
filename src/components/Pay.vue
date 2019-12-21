<template>
		<div class="content">
			<div class="ng">
				<div class="now">
					<img :src="pic.progress" />
				</div>
				<div class="refer">
					<img :src="pic.draw" />
					<div>
						<p>订单提交成功，请尽快完成支付！</p>
						<p>
							<span>订单号：21651651354</span>
							<span>
								应付金额：<span>3215.00元</span>
							</span>
						</p>
						<p>配送信息：广东省广州市天河区大观南路26号长盛商务大厦D栋4楼多迪网络科技公司</p>
						<p>收货人：大雄    13666666666</p>
					</div>
				</div>
				<div class="box">
					<div class="tit">
						选择支付方式
					</div>
					<div class="cont">
						<div class="radio">
							<span>在线支付：</span>
							<div>
								<input type="radio" name="radio" checked id="radio1" />
								<label for="radio1"><img :src="pic.zfb" /> </label>
							</div>
						</div>
						<div class="radio">
							<span>银行卡支付：</span>
							<div>
								<input type="radio" name="radio" id="radio2" />
								<label for="radio2"><img :src="pic.zgyh" /> </label>
							</div>
							<div>
								<input type="radio" name="radio" id="radio3" />
								<label for="radio3"><img :src="pic.gsyh" /> </label>
							</div>
						</div>
						<div class="password">
							<span>请输入支付密码：</span>
							<input type="password" />
							<a href="javascript:;">更多支付方式 ></a>
						</div>
					</div>
				</div>
				<div class="box">
					<div class="tit">
						选择发票信息
					</div>
					<div class="cont">
						<div class="chooce">
							<span>发票类型：</span>
							<div>
								<input type="radio" name="radio1" checked id="radio4" />
								<label for="radio4"><span>电子发票</span> </label>
							</div>
							<div>
								<input type="radio" name="radio1" id="radio5" />
								<label for="radio5"><span>电子发票</span> </label>
							</div>
						</div>
						<div class="chooce">
							<span>发票抬头：</span>
							<div>
								<input type="radio" name="radio2" checked id="radio6" />
								<label for="radio6"><span>个人</span> </label>
							</div>
							<div>
								<input type="radio" name="radio2" id="radio7" />
								<label for="radio7"><span>单位</span> </label>
							</div>
						</div>
						<div class="chooce">
							<span>发票内容：</span>
							<div>
								<input type="radio" name="radio3" checked id="radio8" />
								<label for="radio8"><span>明细</span> </label>
							</div>
							<div>
								<input type="radio" name="radio3" id="radio9" />
								<label for="radio9"><span>办公用品</span> </label>
							</div>
							<div>
								<input type="radio" name="radio3" id="radio10" />
								<label for="radio10"><span>其他</span> </label>
							</div>
						</div>
					</div>
				</div>
				
				<div class="box">
					<div class="tit">
						 商品清单
					</div>
					<ul class="cont">
						<li>
							<span>名称：温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</span>
							<span>规格：150g</span>
							<span>数量： 1</span>
							<span>价格：299.00</span>
						</li>
						<li>
							<span>名称：温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</span>
							<span>规格：150g</span>
							<span>数量： 1</span>
							<span>价格：299.00</span>
						</li>
						<li>
							<span>名称：温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</span>
							<span>规格：150g</span>
							<span>数量： 1</span>
							<span>价格：299.00</span>
						</li>
						<li>
							<span>名称：温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</span>
							<span>规格：150g</span>
							<span>数量： 1</span>
							<span>价格：299.00</span>
						</li>
						<li>
							<span>名称：温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</span>
							<span>规格：150g</span>
							<span>数量： 1</span>
							<span>价格：299.00</span>
						</li>
					</ul>
				</div>
				
				<div class="pay">
					<router-link to="order">
						支付
					</router-link>
					<div>
						<p>金额：￥3215.00</p>
						<router-link to="confirm">查看订单详情</router-link>
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
                progress : require("@/assets/pay/progress.png"),
                draw : require("@/assets/pay/draw.png"),
                zfb : require("@/assets/pay/zfb.png" ),
                zgyh : require("@/assets/pay/zgyh.png" ),
                gsyh : require("@/assets/pay/gsyh.png" )
            }
        }
    }
}
</script>
<style scoped>
.content{ overflow: hidden;}
.content>.ng{ margin-top: 30px;}
.content>.ng>.refer{ background: white; overflow: hidden; border: 1px solid #CCCCCC; padding: 20px;}
.content>.ng>.refer>img{ display: block; float: left;}
.content>.ng>.refer>div{ float: left; margin-left: 20px;}
.content>.ng>.refer>div>p:nth-child(1){ line-height: 24px; font-size: 18px; color: #339933; margin-top: -5px;}
.content>.ng>.box{ border: 1px solid #CCCCCC; overflow: hidden; margin-top: 30px;}
.content>.ng>.box>.tit{ border-bottom: 1px solid #CCCCCC; height: 58px; line-height: 58px; font-size: 16px; color: #000000; padding-left: 28px; background: #EFEFEF;}
.content>.ng>.box>.cont{ padding-left: 26px; overflow: hidden; background: white; padding-bottom: 20px;}
.content>.ng>.box>.cont>div>span{ overflow: hidden; color: #000000; font-size: 16px; float: left;}
.content>.ng>.box>.cont>div{ clear: both;}
.content>.ng>.box>.cont>div:nth-child(1){ margin-top: 10px;}
.content>.ng>.box>.cont>div{padding-top: 20px;}
.content>.ng>.box>.cont>.radio>div{ width: 174px; height: 54px; float: left; position: relative;}
.content>.ng>.box>.cont>.radio:nth-child(1)>div{ margin-left: 40px;}
.content>.ng>.box>.cont>.radio:nth-child(2)>div{ margin-left: 24px;}
.content>.ng>.box>.cont>.radio>div>input{ visibility: hidden; }
.content>.ng>.box>.cont>.radio>div>label{ position: absolute; width: 174px; height: 54px; top: 8px; left: 0; background: url(../assets/pro_details/radio_box.png) no-repeat ; cursor: pointer; z-index: 10; display: block;}
.content>.ng>.box>.cont>.radio>div>label>img{ position: absolute; display: block; right: 0;  top: -15px;}
.content>.ng>.box>.cont>.radio>div>input[type=radio]:checked+label{ position: absolute; background: url(../assets/pro_details/radio.png) no-repeat 0 0;}
.content>.ng>.box>.cont>.password>input{ width: 138px; height: 30px; padding: 0 5px; margin-left: 16px; border: 1px solid #CCCCCC;}
.content>.ng>.box>.cont>.password>a{ color: #339933; text-decoration: underline; margin-left: 20px;}

.content>.ng>.box>.cont>.chooce{ padding-top: 10px;}
.content>.ng>.box>.cont>.chooce>div{ position: relative; float: left; width: 86px; height: 18px;}
.content>.ng>.box>.cont>.chooce>div>input{ visibility: hidden;}
.content>.ng>.box>.cont>.chooce>div>label{ position: absolute; width: 86px; height: 18px; top: 8px; left: 0; background: url(../assets/pro_details/radio_box.png) no-repeat ; cursor: pointer; z-index: 10; display: block;}
.content>.ng>.box>.cont>.chooce>div>label>span{ font-size: 16px ; color: #000000; display: block; position: absolute; left: 22px; line-height: 18px;}
.content>.ng>.box>.cont>.chooce>div>input[type=radio]:checked+label{ position: absolute; background: url(../assets/pro_details/radio.png) no-repeat 0 0;}
.content>.ng>.box>.cont>.chooce>span{ margin-right: 40px;}
.content>.ng>.box>.cont>.chooce>div:nth-child(2){ margin-right: 30px;}
.content>.ng>.box>.cont>.chooce>div:nth-child(3){ margin-right: 30px;}

.content>.ng>.box:nth-child(5)>.cont{ padding: 0;}
.content>.ng>.box>ul{ margin-bottom: -1px;}
.content>.ng>.box>ul>li{padding: 18px; border-bottom: 1px solid #CCCCCC; overflow: hidden; margin-right: -160px;}
.content>.ng>.box>ul>li>span{ font-size: 14px; color: #333333; display: inline-block; margin-right: 180px;}
.content>.ng>.pay{ margin-top: 30px; overflow: hidden;}
.content>.ng>.pay>div{ width: 200px; float: right;}
.content>.ng>.pay>div>p{ line-height: 30px; margin-top: 25px; font-size: 24px; color: #FF9933;}
.content>.ng>.pay>div>a{ float: right; color: #669933; margin-right: 15px; font-size: 16px; text-decoration: underline;}
.content>.ng>.pay>a{ display: block; float: right; font-size: 36px; color: white; width: 150px; height: 80px; line-height: 80px; text-align: center; background: #FF9933;}

</style>