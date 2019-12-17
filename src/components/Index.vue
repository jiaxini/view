<template>
	<div>
		<Banner></Banner>
		<div class="content">
			<div class="ng">
				<div class="today">
					<div class="caption">
						<span>今日推荐</span>
					</div>
					<ul>
						<li>
							<a href="pro_details.html">
								<img :src="pic.td1" /> 
								<p>松露水润雪肌面膜贴25g*28片</p>
								<span>￥129</span>
							</a>
						</li>
						<li>
							<a href="pro_details.html">
								<img :src="pic.td2" />
								<p>隐形水润面膜25g*24片</p>
								<span>￥129</span>
							</a>
						</li>
						<li>
							<a href="pro_details.html">
								<img :src="pic.td3" /> 
								<p>智能愉悦臻白日霜15ml</p>
								<span>￥129</span>
							</a>
						</li>
						<li>
							<a href="pro_details.html">
								<img :src="pic.td4" />
								<p>松露水润雪肌面膜贴25g*28片</p>
								<span>￥129</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="news">
					<ol class="news_title">
						<li class="active">新品上架</li>
						<li>猜你喜欢</li>
						<li>热卖推荐</li>
						<li>限时特卖</li>
					</ol>
					<ul class="news_cont show">
						<li>
							<a href="pro_details.html">
								<img :src="pic.news1" />
								<p>
									<span>奇焕光感粉嫩透亮修颜霜</span>
									<span>嫩粉色 30ml</span>
								</p>
								<span>￥79</span>
							</a>
						</li>
						<li>
							<a href="pro_details.html">
								<img :src="pic.news2" />
								<p>
									<span>巨遮瑕雾感轻垫霜</span>
									<span>象牙色 14g</span>
								</p>
								<span>￥79</span>
							</a>
						</li>
						<li>
							<a href="pro_details.html">
								<img :src="pic.news3" />
								<p>
									<span>玻尿酸精华原液 25ml</span>
								</p>
								<span>￥79</span>
							</a>
						</li>
						<li>
							<a href="pro_details.html">
								<img :src="pic.news4" />
								<p>
									<span>韦博士灵芝焕能精华素 50ml</span>
								</p>
								<span>￥79</span>
							</a>
						</li>
					</ul>
					<ul class="like"></ul>
					<ul class="hot"></ul>
					<ul class="limit"></ul>
					
					<div class="advertisement">
						<a href="pro_details.html">
							<img :src="pic.gg" />
						</a>
					</div>
				</div>
				<div class="mask">
					<div class="mask_title">
						<span>1F</span>
						<span>面膜/面霜</span>
						<span>Mask/Face cream</span>
						<a href="shop_list.html">进入专区 ></a>
					</div>
					<div class="mask_cont">
						<div class="advertising">
							<a href="pro_details.html"><img :src="pic.F1" /></a>
						</div>
						<div class="mask_list">
							<ul>
								<li>
									<a href="pro_details.html">
										<p>
											<span>松露水润雪肌面膜贴25g*28片</span>
											<span>￥79 <span>￥149</span></span>
										</p>
										<img :src="pic.F1_1" />
									</a>
								</li>
								
								<li>
									<a href="pro_details.html">
										<img :src="pic.F1_2" />
										<span>智能愉悦臻白日霜15ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F1_3" />
										<span>燕窝补水面膜23gx7片</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>							
								
								<li>
									<a href="pro_details.html">
										<img :src="pic.F1_4" />
										<span>智能愉悦臻白日霜15ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F1_3" />
										<span>燕窝补水面膜23gx7片</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
							
								<li>
									<a href="pro_details.html">
										<img :src="pic.F1_1" />
										<p>
											<span>松露水润雪肌面膜贴25g*28片</span>
											<span>￥79 <span>￥149</span></span>
										</p>										
									</a>
								</li>
							</ul>								
							
						</div>
					</div>
				</div>
				
				<div class="eye">
					<div class="eye_title">
						<span>2F</span>
						<span>眼霜/BB霜</span>
						<span>Eye cream/BB cream</span>
						<a href="shop_list.html">进入专区 ></a>
					</div>
					<div class="eye_cont">
						<div class="advertising">
							<a href="pro_details.html"><img :src="pic.F2" /></a>
						</div>
						<div class="eye_list">
							<ul>
								<li>
									<a href="pro_details.html">
										<p>
											<span>奇焕光感粉嫩透亮修颜霜 嫩粉色 30ml</span>
											<span>￥79 <span>￥149</span></span>
										</p>
										<img :src="pic.F2_1" />
									</a>
								</li>

								<li>
									<a href="pro_details.html">
										<img :src="pic.F2_2" />
										<span>环采臻皙炫亮霜30g</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F2_3" />
										<span>极光无暇闪耀气垫21号</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>

								<li>
									<a href="pro_details.html">
										<img :src="pic.F2_4" />
										<span>巨遮瑕雾感轻垫霜象牙色 14g</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F2_5" />
										<span>密集焕白防护修颜乳 <br /> SPF30 PA++ 30ml</span>											
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
						
								<li>
									<a href="pro_details.html">
										<img :src="pic.F2_1" />
										<p>
											<span>奇焕光感粉嫩透亮修颜霜 嫩粉色 30ml</span>
											<span>￥79 <span>￥149</span></span>
										</p>										
									</a>
								</li>
							</ul>
	
					
						</div>
					</div>
				</div>
				
				<div class="latex">
					<div class="latex_title">
						<span>3F</span>
						<span>原液/乳液</span>
						<span>Concentrate/Emulsion</span>
						<a href="shop_list.html">进入专区 ></a>
					</div>
					<div class="latex_cont">
						<div class="advertising">
							<a href="pro_details.html"><img :src="pic.F3" /></a>
						</div>
						<div class="latex_list">
							<ul>
								<li>
									<a href="pro_details.html">
										<p>
											<span>精华肌底液100ml</span>
											<span>￥79 <span>￥149</span></span>
										</p>
										<img :src="pic.F3_1" />
									</a>
								</li>

								<li>
									<a href="pro_details.html">
										<img :src="pic.F3_2" />
										<span>新精华肌底液5ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F3_3" />
										<span>肌初赋活抚痕眼部精华液20ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F3_4" />
										<span>玻尿酸精华原液 25ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F3_5" />
										<span>甘草萃取液</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								
								<li>
									<a href="pro_details.html">
										<img :src="pic.F3_1" />
										<p>
											<span>精华肌底液100ml</span>
											<span>￥79 <span>￥149</span></span>
										</p>										
									</a>
								</li>
							</ul>
						
								
							
						</div>
					</div>
				</div>
				
				<div class="cream">
					<div class="cream_title">
						<span>4F</span>
						<span>精华素/洁面乳	</span>
						<span>Essence/Cleanser</span>
						<a href="shop_list.html">进入专区 ></a>
					</div>
					<div class="cream_cont">
						<div class="advertising">
							<a href="pro_details.html"><img :src="pic.F4" /></a>
						</div>
						<div class="cream_list">
							<ul>
								<li>
									<a href="pro_details.html">
										<p>
											<span>墨菊深度补水奢养礼盒</span>
											<span>￥79 <span>￥149</span></span>
										</p>
										<img :src="pic.F4_1" />
									</a>
								</li>
								
								<li>
									<a href="pro_details.html">
										<img :src="pic.F4_2" />
										<span>幻时抗皱精华素 18g</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F4_3" />
										<span>抗皱精华素15ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F4_4" />
										<span>韦博士灵芝焕能精华素 50ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F4_5" />
										<span>抗痘控油洁面膏 80g</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
							
								<li>
									<a href="pro_details.html">
										<img :src="pic.F4_1" />
										<p>
											<span>墨菊深度补水奢养礼盒</span>
											<span>￥79 <span>￥149</span></span>
										</p>										
									</a>
								</li>
							</ul>							
							
						</div>
					</div>
				</div>
				
				<div class="water">
					<div class="water_title">
						<span>5F</span>
						<span>爽肤水/面部润肤</span>
						<span>Toner/Facial skin</span>
						<a href="shop_list.html">进入专区 ></a>
					</div>
					<div class="water_cont">
						<div class="advertising">
							<a href="pro_details.html"><img :src="pic.F5" /></a>
						</div>
						<div class="water_list">
							<ul>
								<li>
									<a href="pro_details.html">
										<p>
											<span>绿茶精萃平衡护肤二重套装</span>
											<span>￥79 <span>￥149</span></span>
										</p>
										<img :src="pic.F5_1" />
									</a>
								</li>
								
								<li>
									<a href="pro_details.html">
										<img :src="pic.F5_2" />
										<span>盈润平衡保湿水</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F5_3" />
										<span>大米调理持久保湿水150ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F5_4" />
										<span>复颜清乳柔肤水175ml</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.F5_5" />
										<span>蜂蜜活颜保湿水</span>
										<span>￥79 <span>￥149</span></span>
									</a>
								</li>
								
								<li>
									<a href="pro_details.html">
										<img :src="pic.F5_1" />
										<p>
											<span>绿茶精萃平衡护肤二重套装</span>
											<span>￥79 <span>￥149</span></span>
										</p>										
									</a>
								</li>
							
							</ul>
															
						</div>
					</div>
				</div>
				
				<ul class="service">
					<li>
						<a href="javascript:;">
							<img :src="pic.tb1" />
						</a>
						<div>
							<h2><a href="javascript:;">正品保障</a></h2>
							<p>100%正品保障</p>
						</div>
						
					</li>
					<li>
						<a href="javascript:;">
							<img :src="pic.tb2" />
						</a>
						<div>
							<h2><a href="javascript:;">品牌直营</a></h2>
							<p>全球唯一官方旗舰店</p>
						</div>
						
					</li>
					<li>
						<a href="javascript:;">
							<img :src="pic.tb3" />
						</a>
						<div>
							<h2><a href="javascript:;">极速送达</a></h2>
							<p>极速送达  晚到必赔</p>
						</div>
						
					</li>
					<li>
						<a href="javascript:;">
							<img :src="pic.tb4" />
						</a>
						<div>
							<h2><a href="javascript:;">专属客服</a></h2>
							<p>独立客服热线  贴心服务	</p>
						</div>
						
					</li>
					<li>
						<a href="javascript:;">
							<img :src="pic.tb5" />
						</a>
						<div>
							<h2><a href="javascript:;">售后无忧</a></h2>
							<p>七天放心退货，运费有保</p>
						</div>
						
					</li>
				</ul>
			</div>
		</div>
	</div>	
</template>
<script>
import Banner from '@/components/Banner';
export default {
    name: 'Index',
    data:() => {
         return {
            pic: {
                td1: require('@/assets/index/td1.png'),
                td2: require('@/assets/index/td2.png'),
                td3: require('@/assets/index/td3.png'),
                td4: require('@/assets/index/td4.png'),
                news1: require('@/assets/index/news1.png'),
                news2: require('@/assets/index/news2.png'),
                news3: require('@/assets/index/news3.png'),
                news4: require('@/assets/index/news4.png'),
                gg: require('@/assets/index/gg.png'),
                F1: require('@/assets/index/F1.png'),
                F1_1: require('@/assets/index/1F-1.png'),
                F1_2: require('@/assets/index/1F-2.png'),
                F1_3: require('@/assets/index/1F-3.png'),
                F1_4: require('@/assets/index/1F-4.png'),
                F2: require('@/assets/index/F2.png'),
                F2_1: require('@/assets/index/2F-1.png'),
                F2_2: require('@/assets/index/2F-2.png'),
                F2_3: require('@/assets/index/2F-3.png'),
                F2_4: require('@/assets/index/2F-4.png'),
                F2_5: require('@/assets/index/2F-5.png'),
                F3: require('@/assets/index/F3.png'),
                F3_1: require('@/assets/index/3F-1.png'),
                F3_2: require('@/assets/index/3F-2.png'),
                F3_3: require('@/assets/index/3F-3.png'),
                F3_4: require('@/assets/index/3F-4.png'),
                F3_5: require('@/assets/index/3F-5.png'),                
                F4: require('@/assets/index/F4.png'),
                F4_1: require('@/assets/index/4F-1.png'),
                F4_2: require('@/assets/index/4F-2.png'),
                F4_3: require('@/assets/index/4F-3.png'),
                F4_4: require('@/assets/index/4F-4.png'),
                F4_5: require('@/assets/index/4F-5.png'),
                F5: require('@/assets/index/F5.png'),
                F5_1: require('@/assets/index/5F-1.png'),
                F5_2: require('@/assets/index/5F-2.png'),
                F5_3: require('@/assets/index/5F-3.png'),
                F5_4: require('@/assets/index/5F-4.png'),
                F5_5: require('@/assets/index/5F-5.png'),
                tb1: require('@/assets/index/tb1.png'),
                tb2: require('@/assets/index/tb2.png'),
                tb3: require('@/assets/index/tb3.png'),
                tb4: require('@/assets/index/tb4.png'),
                tb5: require('@/assets/index/tb5.png'),
            }
        }
	},
	components: {Banner}
}
</script>
<style scoped>
.content>.ng>.today{ margin-top: 60px; margin-left: -1px; position: relative; width: 100%; border-top: 1px solid #cfcfcf; border-bottom: 1px solid #cfcfcf;}
.content>.ng>.today>.caption{ width: 93px; height: 115px; position: absolute; top: 0; left: 0; background: require(@/assets/index/bt1.png);}
.content>.ng>.today>.caption>span{ display: block; font-size: 24px; color: white; width: 50px; line-height: 30px; margin: 0 auto; margin-top: 14px;} 
.content>.ng>.today>ul{ border-left: 1px solid #CFCFCF;overflow: hidden; margin-right: -1px;}
.content>.ng>.today>ul>li{ background: #FFFFFF; float: left; border-right: 1px solid #CFCFCF; width: 299px; height: 298px;}
.content>.ng>.today>ul>li:hover>a>p{ color: #3BC03B;}
.content>.ng>.today>ul>li>a{ display: block; text-align: center; width: 244px; margin: 0 auto;}
.content>.ng>.today>ul>li>a>img{ display: block; width: 244px; height: 230px; margin: 0 auto;}
.content>.ng>.today>ul>li>a>p{ color: #666666; font-size: 16px; line-height: 18px;}
.content>.ng>.today>ul>li>a>span{ color: #ff9900; font-size: 18px;}
.content>.ng>.news{overflow: hidden; width: 100%; margin-top: 60px;}
.content>.ng>.news>ul{ margin-top: 6px; float: left; display: none;}
.content>.ng>.news>ul.show{ display: block;}
.content>.ng>.news>.like{ height: 338px; width: 877px; background: #339933;}
.content>.ng>.news>.hot{ height: 338px; width: 877px; background: #3BC03B;}
.content>.ng>.news>.limit{ height: 338px; width: 877px; background: #52C837;}
.content>.ng>.news>.news_title{ float: left; width: 876px; height: 50px; background: #3bc03b;}
.content>.ng>.news>.news_title>li{cursor: pointer; border-top: 2px solid #3bc03b; float: left; width: 219px; text-align: center; line-height: 48px; color: #FFFFFF; font-size: 18px;}
.content>.ng>.news>.news_title>li.active{ background: #FFFFFF; color: #3bc03b;}
.content>.ng>.news>.news_cont{ width: 877px; margin-top: 6px; border-top: 1px solid #cfcfcf; border-bottom: 1px solid #cfcfcf; border-left: 1px solid #cfcfcf; overflow: hidden; }
.content>.ng>.news>.news_cont>li{background: #FFFFFF; width: 218px; height: 338px; border-right: 1px solid #cfcfcf; float: left;}
.content>.ng>.news>.news_cont>li:hover>a>p>span{ color: #3bc03b;}
.content>.ng>.news>.news_cont>li>a{ text-align: center; display: block; width: 100%;}
.content>.ng>.news>.news_cont>li>a>img{ height: 150px; display: block; margin: 0 auto; margin-top: 48px; margin-bottom: 40px;}
.content>.ng>.news>.news_cont>li>a>p{ font-size: 16px; color: #666666; height: 50px;}
.content>.ng>.news>.news_cont>li>a>p>span{ display: block; line-height: 26px;}
.content>.ng>.news>.news_cont>li>a>span{ display: block; margin-top: 10px; font-size: 16px; font-weight: bold; color: #ff9900; }
.content>.ng>.news>.advertisement>a{ float: right;}
.content>.ng>.news>.advertisement>a>img{ display: block; margin-top: -50px;}
.content>.ng>.mask{ margin-top: 60px;}
.content>.ng>.mask>.mask_title{ border-bottom: 2px solid #0099ff; margin-bottom: 6px;}
.content>.ng>.mask>.mask_title>span:nth-child(1){ color: #0099FF; font-size: 30px; line-height: 32px;}
.content>.ng>.mask>.mask_title>span:nth-child(2){ margin-left: 28px; color: #0099FF; font-size: 30px; line-height: 32px;}
.content>.ng>.mask>.mask_title>span:nth-child(3){ margin-left: 24px; color: #CCCCCC; font-size: 24px; line-height: 32px;}
.content>.ng>.mask>.mask_title>a{ float: right; font-size: 18px; color: #0099FF;}
.content>.ng>.mask>.mask_cont>.advertising{ float: left; margin-right: 6px;}
.content>.ng>.mask>.mask_cont>.advertising>a>img{ width: 281px; height: 451px;}
.content>.ng>.mask>.mask_cont>.mask_list{ position: relative; overflow: hidden;}
.content>.ng>.mask>.mask_cont>.mask_list a{ display: block; border: 1px solid #f6f6f6;}
.content>.ng>.mask>.mask_cont>.mask_list a:hover{ color: #000000; border: 1px solid #0099ff;}
.content>.ng>.mask>.mask_cont>.mask_list>ul{width: 100%; height: 453px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li{ overflow: hidden;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1){top: 0; left: 0; width: 453px; position: absolute; border: 1px solid #d7d7d7; height: 180px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1)>a{ width: 451px; height: 178px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li>a{ overflow: hidden;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li>a>img{ height: 160px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1)>a>p{ font-size: 16px; width: 224px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1)>a>img{ margin-top: 8px; display: block; float: right;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1)>a>p>span{ display: block;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(1)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(2){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 454px; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(2)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(2)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(2)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(2)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(3){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 683px; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(3)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(3)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(3)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(3)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(4){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 0; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(4)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(4)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(4)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(4)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(5){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 227px; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(5)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(5)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(5)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(5)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6){top: 271px; left: 454px; width: 457px; position: absolute; border: 1px solid #d7d7d7; height: 178px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6)>a{ width: 455px; height: 176px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6)>a>p{ font-size: 16px; width: 224px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6)>a>img{ margin-top: 8px; display: block; float: right;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6)>a>p>span{ display: block;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.mask>.mask_cont>.mask_list>ul>li:nth-child(6)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}


.content>.ng>.eye{ margin-top: 60px; clear: both;}
.content>.ng>.eye>.eye_title{ border-bottom: 2px solid #fa94ad; margin-bottom: 6px;}
.content>.ng>.eye>.eye_title>span:nth-child(1){ color: #fa94ad; font-size: 30px; line-height: 32px;}
.content>.ng>.eye>.eye_title>span:nth-child(2){ margin-left: 28px; color: #fa94ad; font-size: 30px; line-height: 32px;}
.content>.ng>.eye>.eye_title>span:nth-child(3){ margin-left: 24px; color: #CCCCCC; font-size: 24px; line-height: 32px;}
.content>.ng>.eye>.eye_title>a{ float: right; font-size: 18px; color: #fa94ad;}
.content>.ng>.eye>.eye_cont>.advertising{ float: left; margin-right: 6px;}
.content>.ng>.eye>.eye_cont>.advertising>a>img{ width: 281px; height: 451px;}
.content>.ng>.eye>.eye_cont>.eye_list{ position: relative; overflow: hidden;}
.content>.ng>.eye>.eye_cont>.eye_list a{ display: block; border: 1px solid #f6f6f6;}
.content>.ng>.eye>.eye_cont>.eye_list a:hover{ color: #000000; border: 1px solid #fa94ad;}
.content>.ng>.eye>.eye_cont>.eye_list>ul{width: 100%; height: 453px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li{ overflow: hidden;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1){top: 0; left: 0; width: 453px; position: absolute; border: 1px solid #d7d7d7; height: 180px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1)>a{ width: 451px; height: 178px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li>a{ overflow: hidden;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li>a>img{ height: 160px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1)>a>p{ font-size: 16px; width: 304px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1)>a>img{ margin-top: 8px; display: block; float: right; margin-right: 50px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1)>a>p>span{ display: block;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(1)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(2){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 454px; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(2)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(2)>a>img{ margin-top: 15px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(2)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(2)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(2)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(3){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 683px; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(3)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(3)>a>img{ margin-top: 15px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(3)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(3)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(3)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(4){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 0; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(4)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(4)>a>img{ margin-top: 15px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(4)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(4)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(4)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(5){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 227px; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(5)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(5)>a>img{ margin-top: 15px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(5)>a>span{ line-height: 24px; display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(5)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(5)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6){top: 271px; left: 454px; width: 457px; position: absolute; border: 1px solid #d7d7d7; height: 178px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6)>a{ width: 455px; height: 176px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6)>a>p{ font-size: 16px; width: 224px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6)>a>img{ margin-top: 8px; display: block; float: right; margin-right: 50px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6)>a>p>span{ display: block;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.eye>.eye_cont>.eye_list>ul>li:nth-child(6)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.latex{ margin-top: 60px;}
.content>.ng>.latex>.latex_title{ border-bottom: 2px solid #339999; margin-bottom: 6px;}
.content>.ng>.latex>.latex_title>span:nth-child(1){ color: #339999; font-size: 30px; line-height: 32px;}
.content>.ng>.latex>.latex_title>span:nth-child(2){ margin-left: 28px; color: #339999; font-size: 30px; line-height: 32px;}
.content>.ng>.latex>.latex_title>span:nth-child(3){ margin-left: 24px; color: #CCCCCC; font-size: 24px; line-height: 32px;}
.content>.ng>.latex>.latex_title>a{ float: right; font-size: 18px; color: #339999;}
.content>.ng>.latex>.latex_cont>.advertising{ float: left; margin-right: 6px;}
.content>.ng>.latex>.latex_cont>.advertising>a>img{ width: 281px; height: 451px;}
.content>.ng>.latex>.latex_cont>.latex_list{ position: relative; overflow: hidden;}
.content>.ng>.latex>.latex_cont>.latex_list a{ display: block; border: 1px solid #f6f6f6;}
.content>.ng>.latex>.latex_cont>.latex_list a:hover{ color: #000000; border: 1px solid #339999;}
.content>.ng>.latex>.latex_cont>.latex_list>ul{width: 100%; height: 453px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li{ overflow: hidden;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1){top: 0; left: 0; width: 453px; position: absolute; border: 1px solid #d7d7d7; height: 180px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a{ width: 451px; height: 178px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a>img{ margin-top: 15px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li>a{ overflow: hidden;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li>a>img{ height: 160px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a>p{ font-size: 16px; width: 180px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a>img{ margin-top: 8px; display: block; float: right;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a>p>span{ display: block;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(1)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(2){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 454px; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(2)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(2)>a>img{ margin-top: 15px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(2)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(2)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(2)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(3){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 683px; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(3)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(3)>a>img{ margin-top: 15px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(3)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(3)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(3)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(4){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 0; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(4)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(4)>a>img{ margin-top: 15px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(4)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(4)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(4)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(5){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 227px; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(5)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(5)>a>img{ margin-top: 15px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(5)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(5)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(5)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6){top: 271px; left: 454px; width: 457px; position: absolute; border: 1px solid #d7d7d7; height: 178px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6)>a{ width: 455px; height: 176px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6)>a>p{ font-size: 16px; width: 180px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6)>a>img{ margin-top: 8px; display: block; float: right;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6)>a>p>span{ display: block;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.latex>.latex_cont>.latex_list>ul>li:nth-child(6)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.cream{ margin-top: 60px;}
.content>.ng>.cream>.cream_title{ border-bottom: 2px solid #9d80db; margin-bottom: 6px;}
.content>.ng>.cream>.cream_title>span:nth-child(1){ color: #9d80db; font-size: 30px; line-height: 32px;}
.content>.ng>.cream>.cream_title>span:nth-child(2){ margin-left: 28px; color: #9d80db; font-size: 30px; line-height: 32px;}
.content>.ng>.cream>.cream_title>span:nth-child(3){ margin-left: 24px; color: #CCCCCC; font-size: 24px; line-height: 32px;}
.content>.ng>.cream>.cream_title>a{ float: right; font-size: 18px; color: #9d80db;}
.content>.ng>.cream>.cream_cont>.advertising{ float: left; margin-right: 6px;}
.content>.ng>.cream>.cream_cont>.advertising>a>img{ width: 281px; height: 451px;}
.content>.ng>.cream>.cream_cont>.cream_list{ position: relative; overflow: hidden;}
.content>.ng>.cream>.cream_cont>.cream_list a{ display: block; border: 1px solid #f6f6f6;}
.content>.ng>.cream>.cream_cont>.cream_list a:hover{ color: #000000; border: 1px solid #9d80db;}
.content>.ng>.cream>.cream_cont>.cream_list>ul{width: 100%; height: 453px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li{ overflow: hidden;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1){top: 0; left: 0; width: 453px; position: absolute; border: 1px solid #d7d7d7; height: 180px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a{ width: 451px; height: 178px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a>img{ margin-top: 15px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li>a{ overflow: hidden;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li>a>img{ height: 160px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a>p{ font-size: 16px; width: 180px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a>img{ margin-top: 8px; display: block; float: right; margin-right: 20px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a>p>span{ display: block;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(1)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(2){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 454px; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(2)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(2)>a>img{ margin-top: 15px; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(2)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(2)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(2)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(3){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 683px; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(3)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(3)>a>img{ margin-top: 15px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(3)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(3)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(3)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(4){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 0; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(4)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(4)>a>img{ margin-top: 15px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(4)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(4)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(4)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(5){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 227px; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(5)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(5)>a>img{ margin-top: 15px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(5)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(5)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(5)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6){top: 271px; left: 454px; width: 457px; position: absolute; border: 1px solid #d7d7d7; height: 178px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6)>a{ width: 455px; height: 176px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6)>a>p{ font-size: 16px; width: 180px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6)>a>img{ margin-top: 8px; display: block; float: right; margin-right: 20px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6)>a>p>span{ display: block;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.cream>.cream_cont>.cream_list>ul>li:nth-child(6)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.water{ margin-top: 60px;}
.content>.ng>.water>.water_title{ border-bottom: 2px solid #fe7649; margin-bottom: 6px;}
.content>.ng>.water>.water_title>span:nth-child(1){ color: #fe7649; font-size: 30px; line-height: 32px;}
.content>.ng>.water>.water_title>span:nth-child(2){ margin-left: 28px; color: #fe7649; font-size: 30px; line-height: 32px;}
.content>.ng>.water>.water_title>span:nth-child(3){ margin-left: 24px; color: #CCCCCC; font-size: 24px; line-height: 32px;}
.content>.ng>.water>.water_title>a{ float: right; font-size: 18px; color: #fe7649;}
.content>.ng>.water>.water_cont>.advertising{ float: left; margin-right: 6px;}
.content>.ng>.water>.water_cont>.advertising>a>img{ width: 281px; height: 451px;}
.content>.ng>.water>.water_cont>.water_list{ position: relative; overflow: hidden;}
.content>.ng>.water>.water_cont>.water_list a{ display: block; border: 1px solid #f6f6f6;}
.content>.ng>.water>.water_cont>.water_list a:hover{ color: #000000; border: 1px solid #fe7649;}
.content>.ng>.water>.water_cont>.water_list>ul{width: 100%; height: 453px;}
.content>.ng>.water>.water_cont>.water_list>ul>li{ overflow: hidden;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1){top: 0; left: 0; width: 453px; position: absolute; border: 1px solid #d7d7d7; height: 180px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a{ width: 451px; height: 178px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a>img{ margin-top: 15px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.water>.water_cont>.water_list>ul>li>a{ overflow: hidden;}
.content>.ng>.water>.water_cont>.water_list>ul>li>a>img{ height: 160px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a>p{ font-size: 16px; width: 200px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a>img{ margin-top: 8px; display: block; float: right; margin-right: 20px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a>p>span{ display: block;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(1)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(2){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 454px; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(2)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(2)>a>img{ margin-top: 15px; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(2)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(2)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(2)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(3){ position: absolute; width: 228px; height: 270px; border: 1px solid #d7d7d7; top: 0; left: 683px; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(3)>a{ width: 226px; height: 268px; text-align: center;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(3)>a>img{ margin-top: 15px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(3)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(3)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(3)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(4){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 0; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(4)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(4)>a>img{ margin-top: 15px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(4)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(4)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(4)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(5){ position: absolute; width: 226px; height: 268px; border: 1px solid #d7d7d7; top: 181px; left: 227px; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(5)>a{ width: 224px; height: 266px; text-align: center;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(5)>a>img{ margin-top: 15px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(5)>a>span{ display: block; margin: 0 auto; font-size: 16px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(5)>a>span:nth-child(3){ font-size: 16px; color: #FF9900; text-align: center; }
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(5)>a>span:nth-child(3)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6){top: 271px; left: 454px; width: 457px; position: absolute; border: 1px solid #d7d7d7; height: 178px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6)>a{ width: 455px; height: 176px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6)>a>p{ font-size: 16px; width: 200px; display: block; float: left; margin-top: 50px; padding-left: 4px; color: #666666;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6)>a>img{ margin-top: 8px; display: block; float: right; margin-right: 20px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6)>a>p>span{ display: block;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6)>a>p>span:nth-child(1){ color: #666666;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6):hover>a>p>span:nth-child(1){ color: #000000;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6)>a>p>span:nth-child(2){ width: 140px; border-top: 1px solid #3bc03b; color: #ff9900; font-size: 18px;}
.content>.ng>.water>.water_cont>.water_list>ul>li:nth-child(6)>a>p>span:nth-child(2)>span{ font-size: 12px; color: #999999; text-decoration: line-through;}

.content>.ng>.service{ margin-top: 60px; overflow: hidden;}
.content>.ng>.service>li{ float: left; width: 240px;}
.content>.ng>.service>li>a>img{ display: block; float: left;}
.content>.ng>.service>li>div{ margin-top: 3px; float: left;}
.content>.ng>.service>li>div>h2>a{ margin-left: 4px; line-height: 20px; margin-top: 5px; color: #5a9321; font-size: 18px;}
.content>.ng>.service>li>div>p{ margin-left: 4px; line-height: 16px; color: #999999; font-size: 16px;}
</style>