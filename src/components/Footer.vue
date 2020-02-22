<template>
		<div class="footer">
			<div class="ng">
				<div class="footer_left">
					<img :src="require('@/assets/foot_logo.png')" />
					<div>
						<img :src="require('@/assets/phone.png')" />
						<p>
							<span>加西妮客服电话</span>
							<span>400 - 843 - 2288</span>
							<span>周一到周日 09:00 - 18:00</span>
						</p>
					</div>
				</div>
				<ul class="footer_middle">
					<li>
						<span>买家帮助</span>
						<a href="javascript:;">购买流程</a>
						<a href="javascript:;">发票制度</a>
						<a href="javascript:;">查看订单</a>
						<a href="javascript:;">联系客服</a>
					</li>
					<li>
						<span>配送标准</span>
						<a href="javascript:;">配送方式</a>
						<a href="javascript:;">配送费用</a>
						<a href="javascript:;">跟踪包裹</a>
						<a href="javascript:;">验货签收</a>
					</li>
					<li>
						<span>会员须知</span>
						<a href="javascript:;">用户注册</a>
						<a href="javascript:;">找回密码</a>
						<a href="javascript:;">服务条款</a>
						<a href="javascript:;">隐私说明</a>
					</li>
					<li>
						<span>售后服务</span>
						<a href="javascript:;">退换货政策</a>
						<a href="javascript:;">退换货流程</a>
						<a href="javascript:;">退还运费承担</a>
						<a href="javascript:;">积分奖励</a>
					</li>
				</ul>
				<div class="footer_right">
					<span>加西妮官方微信</span>
					<img :src="require('@/assets/code.png')" />
				</div>
			</div>
			<div class="copyright">
				© 2013-2016 Jaciny China Holding Limited.版权所有 <a href="javascript:;">隐私权正常</a> | <a href="javascript:;">用户服务协议</a> | <a href="javascript:;">条款规定</a>
			</div>
		</div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
.footer{ background: #669933; margin-top: 60px; overflow: hidden;}
.footer>.ng{ border-bottom: 1px solid white; overflow: hidden;}
.footer>.ng>.footer_left{ width: 330px; float: left;}
.footer>.ng>.footer_left>img{ display: block; margin: 0 auto; margin-top:95px ; margin-bottom: 50px;}
.footer>.ng>.footer_left>div{ width: 330px;}
.footer>.ng>.footer_left>div>img{ display: block; float: left; margin-top: 20px;}
.footer>.ng>.footer_left>div>p{ margin-left: 8px; float: left;}
.footer>.ng>.footer_left>div>p>span{ display: block; color: white; font-size: 14px; line-height: 30px;}
.footer>.ng>.footer_left>div>p>span:nth-child(2){ font-size: 30px;}
.footer>.ng>.footer_left>div>p>span:nth-child(3){ color: #ccffcc;}
.footer>.ng>.footer_middle{ float: left; margin-top: 90px; margin-left: 30px;}
.footer>.ng>.footer_middle>li{ float: left; width: 150px; text-align: center;}
.footer>.ng>.footer_middle>li>span{ display: block; font-size: 18px; color: white;}
.footer>.ng>.footer_middle>li>a{ display: block; font-size: 14px; color: #f5f5f5;}
.footer>.ng>.footer_middle>li>a:hover{ color: #52C837;}
.footer>.ng>.footer_right{ float: left;  margin-top: 70px; margin-left: 40px; margin-bottom: 80px;}
.footer>.ng>.footer_right>span{ display: block; font-size: 24px; color: white; font-weight: bold;} 
.footer>.ng>.footer_right>img{ display: block; margin: 0 auto;}
.footer>.copyright{ font-size: 14px; color: #ffffcc; text-align: center; line-height: 44px;}
.footer>.copyright>a{ color: #ffffcc;}
.footer>.copyright>a:hover{ color: white;}
</style>