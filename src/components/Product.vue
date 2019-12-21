<template>
		<div class="content">
			<div class="ng">
				<div class="pro">
					<div class="norm">
						<a href="index.html">化妆品首页</a>
						<span>></span>
						<a href="shop_list.html">洁面乳</a>
						<span>></span>
						<a href="pro_details.html">温碧泉盈润保湿洁面乳150G 深层清洁补水洗面奶</a>
					</div>
					
					<div class="pro_show">
						<ul class="big">
							<li><img :src="pic.pro_s1" /> </li>
							<li><img :src="pic.pro_s2" /> </li>
							<li><img :src="pic.pro_s3" /> </li>
							<li><img :src="pic.pro_s4" /> </li>
						</ul>
						<ul class="small">
							<li class="on"><img :src="pic.pro_s1" /> </li>
							<li><img :src="pic.pro_s2" /> </li>
							<li><img :src="pic.pro_s3" /> </li>
							<li><img :src="pic.pro_s4" /> </li>
						</ul>
						
						<div>
							<div>商品编号：2131321321</div>
							<div>
								<a href="javascript:;">
									<img :src="pic.sare" />
									<span>分享</span>
								</a>
								<a href="javascript:;">
									<img :src="pic.heart" />
									<span>收藏</span>
								</a>
							</div>
						</div>
					</div>
					
					<div class="pro_details">
						<h1>温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶</h1>
						<p>深入毛孔，吸出油脂，清除皮肤垃圾；丰富矿物元素，为肌肤增添营养动力；水润保湿，嫩肤提亮，细致毛孔，去黄提亮，深层清洁，打造平滑水嫩美即。</p>
						<div class="price">
							<b>￥</b>
							<b>299.00 </b>
							<span> ￥599.00</span>
						</div>
						<div class="freight">
							<span>运费：</span>
							<span>北京  朝阳区</span>
							<span>至</span>
							<select>
								<option>广东</option>
								<option>广西</option>
								<option>福建</option>
							</select>
							<span>免运费</span>
						</div>
						<div class="servise">
							<span>服务：</span>
							<p>
								<span>由  加西妮  发货，并提供售后支持。</span>
							<span>支付成功后，24小时内发货。</span>
							</p>
							
						</div>
						<div class="size">
							<span>尺码：</span>
							<a href="javascript:;">150g</a>
						</div>
						<div class="num">
							<span>数量：</span>
							<div>
								<b class="reduce">-</b>
								<input type="text"  maxlength="2" value="1" />
								<b class="add">+</b>
							</div>
							<p>库存：21355件</p>
						</div>
						<div class="button">
							<router-link to="confirm">立即购买</router-link>
							<router-link to="cart">加入购物车</router-link>
						</div>
					</div>
				</div>
				
				<div class="box">
					<div class="left">
						<div class="recommend">
							<h1>商家推荐</h1>
							<ul>
								<li>
									<a href="pro_details.html">
										<img :src="pic.list_pro_1" />
										<span>¥51.00</span>
										<p>韩束墨菊深度保湿氨基酸洁面乳150ml</p>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.list_pro_2" />
										<span>¥51.00</span>
										<p>绿茶精萃保湿洁面膏 150ml</p>
									</a>
								</li>
							</ul>
						</div>
						<div class="recommend">
							<h1>热卖商品</h1>
							<ul>
								<li>
									<a href="pro_details.html">
										<img :src="pic.list_pro_3" />
										<span>¥51.00</span>
										<p>珀莱雅水动力温和保湿洁面乳 </p>
										<p>洗面奶女士保湿补水深层清洁防敏感 </p>
									</a>
								</li>
								<li>
									<a href="pro_details.html">
										<img :src="pic.list_pro_4" />
										<span>¥51.00</span>
										<p>清润葡萄籽保湿护肤套装（洁面膏125ml+膜力水）</p>
									</a>
								</li>
							</ul>
						</div>
					</div>	
					
					<div class="right">
						<div class="comment">
							<div class="comment_title">
								点评商品
							</div>
							<div class="comment_cont">
								<div>
									<img :src="pic.user" />
									<span>昵称已被占用</span>
								</div>
								<div>
									<textarea cols="74" rows="10" placeholder="请输入评论内容"></textarea>
									<a href="javascript:;">
										<img :src="pic.smile" />
									</a>
									<a href="javascript:;">
										<img :src="pic.pic" />
									</a>
									<div class="radio">
										<a href="javascript:;">提交评论</a>
										<span>
											<input type="radio" id="radio1" name="radio" checked />
											<label for="radio1"><span>好评</span></label>
										</span>
										<span>
											<input type="radio" id="radio2" name="radio" />
											<label for="radio2"><span>中评</span></label>
										</span>
										<span>
											<input type="radio" id="radio3" name="radio" />
											<label for="radio3"><span>差评</span></label>
										</span>

									</div>
								</div>
							</div>
						</div>
						
						<div class="title">
							<div class="choice click">商品详情</div>
							<div class="choice">规格参数</div>
							<div class="choice">包装清单</div>
							<div class="choice">商品评论<span>(51351)</span></div>
							<div class="choice">售后保障</div>
							<div></div>
						</div>
						<div class="case show">
							<div class="pro_box">
								<h1>品牌：<span>温碧泉</span></h1>
								<ul>
									<li>
										<span>商品名称：洗颜专科洁面乳</span>
										<span>产地：日本  </span>
										<span>功效：补水 保湿 深层清洁</span>
									</li>
									<li>
										<span>商品编号：188078</span>  										
										<span>分类：洁面乳  </span>
										<span>起泡程度：泡沫  </span>
									</li>
									<li>
										<span>商品毛重：150.00g</span>
										<span>性别：女   </span>
										<span>适合肤质：任何肤质</span>
									</li>
									<li>
										<span>商品产地：日本产品</span>
										<span>质地：乳状   </span>
										
									</li>
								</ul>
							</div>
							<div class="pro_brand">
								<img :src="pic.show" />
							</div>
							
							<div class="green">
								累计评价 42513
							</div>
							<div class="case_top">
								<div class="case_tl">
									<span>与描述相符</span>
									<b>4.9</b>
									<img :src="pic.star" />
								</div>
								<div class="case_tm">
									<p>
										<span>好评（98%）</span>
										<img :src="pic.good" />
									</p>
									<p>
										<span>中评（1%）</span>
										<img :src="pic.medium" />
									</p>
									<p>
										<span>差评（1%）</span>
										<img :src="pic.medium" />
									</p>
								</div>
								<div class="case_tr">
									<div class="text_l">大家都在写：</div>
									<div class="text_r">
										<a href="javascript:;">很划算</a>
										<a href="javascript:;">超值</a>
										<a href="javascript:;">补水效果特别好</a>
										<a href="javascript:;">味道好闻</a>
										<a href="javascript:;">包装好</a>
										<a href="javascript:;">服务好</a>
										<a href="javascript:;">保湿滋润</a>
										<a href="javascript:;">物流慢</a>
									</div>
								</div>
							</div>
							<div class="case_bottom">
								<div class="discuss">
									<div class="choice click">全部评价</div>
									<div class="choice">图片(4253)</div>
									<div class="choice">追评(413)</div>
									<div></div>
								</div>
								<ul class="discuss_cont show">
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												东西收到了，大爱，包装很好，快递也快，闻着也超好闻，真是太喜欢了，早就想买瓷肌的产品了，可是显贵，这是搞活动买的，，非常喜欢，喜欢的赶紧下手吧!!!
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v1" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												用了一下，发现还不错，不油腻，不紧绷，味道很好闻，包装特别好，好严实，物流快快的。还是一次愉快的购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v1" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<div>
												<a href="javascript:;"><img :src="pic.pic1" /> </a>
												<a href="javascript:;"><img :src="pic.pic2" /> </a>
												<a href="javascript:;"><img :src="pic.pic3" /> </a>
											</div>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												东西收到了，大爱，包装很好，快递也快，闻着也超好闻，真是太喜欢了，早就想买瓷肌的产品了，可是显贵，这是搞活动买的，，非常喜欢，喜欢的赶紧下手吧!!!
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v1" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												用了一下，发现还不错，不油腻，不紧绷，味道很好闻，包装特别好，好严实，物流快快的。还是一次愉快的购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
								</ul>
								<ul class="discuss_cont">
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<div>
												<a href="javascript:;"><img :src="pic.pic1" /> </a>
												<a href="javascript:;"><img :src="pic.pic2" /> </a>
												<a href="javascript:;"><img :src="pic.pic3" /> </a>
											</div>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
								</ul>
								<ul class="discuss_cont">
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
								</ul>
								
								<div class="page">
									<a href="javascript:;"></a>
									<a href="javascript:;">1</a>
									<a class="here" href="javascript:;">2</a>
									<a href="javascript:;">3</a>
									<a href="javascript:;">...</a>
									<a href="javascript:;">60</a>
									<a href="javascript:;">></a>
									
								</div>
							</div>
										
							
						</div>
						<div class="case">
							<div class="other">规格参数</div>
						</div>
						<div class="case">
							<div class="other">包装清单</div>
						</div>
						<div class="case">
							<div class="case_top">
								<div class="case_tl">
									<span>与描述相符</span>
									<b>4.9</b>
									<img :src="pic.star" />
								</div>
								<div class="case_tm">
									<p>
										<span>好评（98%）</span>
										<img :src="pic.good" />
									</p>
									<p>
										<span>中评（1%）</span>
										<img :src="pic.medium" />
									</p>
									<p>
										<span>差评（1%）</span>
										<img :src="pic.medium" />
									</p>
								</div>
								<div class="case_tr">
									<div class="text_l">大家都在写：</div>
									<div class="text_r">
										<a href="javascript:;">很划算</a>
										<a href="javascript:;">超值</a>
										<a href="javascript:;">补水效果特别好</a>
										<a href="javascript:;">味道好闻</a>
										<a href="javascript:;">包装好</a>
										<a href="javascript:;">服务好</a>
										<a href="javascript:;">保湿滋润</a>
										<a href="javascript:;">物流慢</a>
									</div>
								</div>
							</div>
							<div class="case_bottom">
								<div class="case_title">
									<div class="choice click">全部评价</div>
									<div class="choice">图片(4253)</div>
									<div class="choice">追评(413)</div>
									<div></div>
								</div>
								<ul class="case_cont show">
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												东西收到了，大爱，包装很好，快递也快，闻着也超好闻，真是太喜欢了，早就想买瓷肌的产品了，可是显贵，这是搞活动买的，，非常喜欢，喜欢的赶紧下手吧!!!
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v1" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												用了一下，发现还不错，不油腻，不紧绷，味道很好闻，包装特别好，好严实，物流快快的。还是一次愉快的购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v1" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<div>
												<a href="javascript:;"><img :src="pic.pic1" /> </a>
												<a href="javascript:;"><img :src="pic.pic2" /> </a>
												<a href="javascript:;"><img :src="pic.pic3" /> </a>
											</div>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												东西收到了，大爱，包装很好，快递也快，闻着也超好闻，真是太喜欢了，早就想买瓷肌的产品了，可是显贵，这是搞活动买的，，非常喜欢，喜欢的赶紧下手吧!!!
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v1" />
										</div>
									</li>
									<li>
										<div class="li_l">
											<p>
												用了一下，发现还不错，不油腻，不紧绷，味道很好闻，包装特别好，好严实，物流快快的。还是一次愉快的购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
								</ul>
								<ul class="case_cont">
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<div>
												<a href="javascript:;"><img :src="pic.pic1" /> </a>
												<a href="javascript:;"><img :src="pic.pic2" /> </a>
												<a href="javascript:;"><img :src="pic.pic3" /> </a>
											</div>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
								</ul>
								<ul class="case_cont">
									<li>
										<div class="li_l">
											<p>
												非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物。
											</p>
											<span>2016.8.23</span>
										</div>
										<div class="li_m">
											化妆品净含量：150g
										</div>
										<div class="li_r">
											<span>5****4 (匿名)</span>
											<img :src="pic.v5" />
										</div>
									</li>
								</ul>
								
								<div class="page">
									<a href="javascript:;"></a>
									<a href="javascript:;">1</a>
									<a class="here" href="javascript:;">2</a>
									<a href="javascript:;">3</a>
									<a href="javascript:;">...</a>
									<a href="javascript:;">60</a>
									<a href="javascript:;">></a>
									
								</div>
							</div>
						</div>						
						<div class="case">
							<div class="other">售后保障</div>
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
                pro_s1 : require("@/assets/pro_details/pro_s1.png"),
                pro_s2 : require("@/assets/pro_details/pro_s2.png"),
                pro_s3 : require("@/assets/pro_details/pro_s3.png"),
                pro_s4 : require("@/assets/pro_details/pro_s4.png"),
                sare : require("@/assets/pro_details/sare.png"),
                heart : require("@/assets/pro_details/heart.png"),
                list_pro_1 : require("@/assets/shop_list/pro_1.png"),
                list_pro_2 : require("@/assets/shop_list/pro_2.png"),
                list_pro_3 : require("@/assets/shop_list/pro_3.png"),
                list_pro_4 : require("@/assets/shop_list/pro_4.png"),
                user : require("@/assets/pro_details/user.png"),
                smile : require("@/assets/pro_details/smile.png"),
                pic : require("@/assets/pro_details/pic.png"),
                show : require("@/assets/pro_details/show.png"),
                star : require("@/assets/pro_details/star.png"),
                good : require("@/assets/pro_details/good.png"),
                medium : require("@/assets/pro_details/medium.png"),
                v5 : require("@/assets/pro_details/v5.png"),
                v1 : require("@/assets/pro_details/v1.png"),
                pic1 : require("@/assets/pro_details/pic1.png"), 
                pic2 : require("@/assets/pro_details/pic2.png"),
                pic3 : require("@/assets/pro_details/pic3.png")
            }
        }
    }
}
</script>
<style scoped>
.content{ overflow: hidden; }
.content>.ng{ margin-top: 20px;}
.content>.ng>.pro{ overflow: hidden;}
.content>.ng>.pro>.norm{ margin-bottom: 15px; overflow: hidden; font-size: 14px; color: #333333;}
.content>.ng>.pro>.norm>a{ float: left; display: block; color: #333333;} 
.content>.ng>.pro>.norm>a:nth-child(5){ width: 210px; overflow: hidden; text-overflow: ellipsis;  white-space: nowrap;}
.content>.ng>.pro>.norm>a:hover{ color: #339933;}
.content>.ng>.pro>.norm>span{ float: left; display: block; margin: 0 10px;} 
.content>.ng>.pro>.pro_show{float: left; width: 545px; margin-right: 35px; overflow: hidden;}
.content>.ng>.pro>.pro_show>.big{ float: left; position: relative; width: 430px; height: 430px; border: 1px solid #CCCCCC;}
.content>.ng>.pro>.pro_show>.big>li{ width: 430px; height: 430px; position: absolute; cursor: pointer; display: none;} 
.content>.ng>.pro>.pro_show>.big>li:nth-child(1){ display: block;}
.content>.ng>.pro>.pro_show>.big>li>img{ width: 100%; height: 100%;}
.content>.ng>.pro>.pro_show>.small{ float: right; width: 102px; overflow: hidden;}
.content>.ng>.pro>.pro_show>.small>li{ width: 100px; height: 100px; border: 1px solid #CCCCCC; cursor: pointer; margin-bottom: 8px;}
.content>.ng>.pro>.pro_show>.small>li.on{ border: 1px solid #FF9933;}
.content>.ng>.pro>.pro_show>.small>li>img{ width: 100px; height: 100px;}
.content>.ng>.pro>.pro_show>div{ font-size: 14px; margin-top: 4px;}
.content>.ng>.pro>.pro_show>div>div:nth-child(1){ float: left;}
.content>.ng>.pro>.pro_show>div>div:nth-child(2){ float: right;}
.content>.ng>.pro>.pro_show>div>div:nth-child(2)>a{ margin-right: 12px;}
.content>.ng>.pro>.pro_details>div{ font-size: 14px;}
.content>.ng>.pro>.pro_details{ padding-bottom: 11px; padding-left: 20px; padding-top: 10px; overflow: hidden; background: white;}
.content>.ng>.pro>.pro_details>h1{ font-size: 24px; color: #333333;}
.content>.ng>.pro>.pro_details>p{ width: 590px; line-height: 20px;}
.content>.ng>.pro>.pro_details>.price>b:nth-child(1){ font-size: 30px; color: #FF9900;}
.content>.ng>.pro>.pro_details>.price>b:nth-child(2){ font-size: 36px; color: #FF9900;}
.content>.ng>.pro>.pro_details>.price>span{text-decoration: line-through;}
.content>.ng>.pro>.pro_details>.freight>select{ height: 16px; color: #666666; line-height: 16px; width: 48px; border: none;-webkit-appearance: none; background: url(../assets/pro_details/down.png) no-repeat 34px; cursor: pointer;} 
.content>.ng>.pro>.pro_details>.freight>span:nth-child(1){ margin-right: 33px;}
.content>.ng>.pro>.pro_details>.freight>span:nth-child(3){ margin: 0 20px;}
.content>.ng>.pro>.pro_details>.freight>span:last-child{ margin-left: 15px;}
.content>.ng>.pro>.pro_details>.servise{ margin-top: 10px; overflow: hidden;}
.content>.ng>.pro>.pro_details>.servise>span{display: block; float: left; margin-right: 38px;}
.content>.ng>.pro>.pro_details>.servise>p{display: block; width: 220px; float: left;}
.content>.ng>.pro>.pro_details>.servise>p>span{ line-height: 16px; display: block; margin-top: 6px;}
.content>.ng>.pro>.pro_details>.size{overflow: hidden; margin-top: 20px; }
.content>.ng>.pro>.pro_details>.size>span{ margin-right: 38px; float: left;}
.content>.ng>.pro>.pro_details>.size>a{ color: #666666; float: left; width: 58px; height: 28px; line-height: 28px; border: 1px solid #FF9933; text-align: center;}
.content>.ng>.pro>.pro_details>.num{ overflow: hidden; margin-top: 20px;}
.content>.ng>.pro>.pro_details>.num>span{ margin-right: 38px; float: left;}
.content>.ng>.pro>.pro_details>.num>div{ float: left;}
.content>.ng>.pro>.pro_details>.num>div>b{cursor: pointer; float: left; border: 1px solid #CCCCCC; display: block; width: 28px; height: 28px; line-height: 28px; text-align: center;}
.content>.ng>.pro>.pro_details>.num>div>input{ float: left; width: 38px; height: 28px; line-height: 28px; text-align: center; color: #666666; border: none; border-top: 1px solid #CCCCCC; border-bottom: 1px solid #CCCCCC;}
.content>.ng>.pro>.pro_details>.num>p{ float: left; margin-left: 16px;}
.content>.ng>.pro>.pro_details>.button{ margin-top: 20px;}
.content>.ng>.pro>.pro_details>.button>a{ float: left;}
.content>.ng>.pro>.pro_details>.button>a:nth-child(1){ width: 160px; background: #ff9900; text-align: center; display: block; height: 48px; line-height: 48px; color: white;}
.content>.ng>.pro>.pro_details>.button>a:nth-child(2){ margin-left: 27px; width: 158px; background: #fcebce; text-align: center; display: block; height: 46px; line-height: 46px; color: #ff9900; border: 1px solid #FF9900;}

.content>.ng>.box{ overflow: hidden;}
.content>.ng>.box>.left{clear: both; margin-right: 19px; float: left; margin-top: 20px;}
.content>.ng>.box>.left>.recommend{ background: white; margin-top: 30px; width: 278px; border: 1px solid #d2d2d2;}
.content>.ng>.box>.left>.recommend>h1{ font-size: 24px; background: #339933; text-align: center;line-height: 50px; color: white;}
.content>.ng>.box>.left>.recommend>ul{ width: 214px; margin: 0 auto;}
.content>.ng>.box>.left>.recommend>ul>li:nth-child(1){ border-bottom: 1px solid #d2d2d2;}
.content>.ng>.box>.left>.recommend>ul>li{ padding-bottom: 70px;}
.content>.ng>.box>.left>.recommend>ul>li>a>p{text-align: center; font-size: 12px; color: #333333;}
.content>.ng>.box>.left>.recommend>ul>li:hover>a>p{ color: #3BC03B; }
.content>.ng>.box>.left>.recommend>ul>li>a>img{ display: block; margin: 40px auto;}
.content>.ng>.box>.left>.recommend>ul>li>a>span{text-align: center; margin: 0 auto; display: block; color: #ff9900; font-size: 18px;}

.content>.ng>.box>.right{ margin-top: 50px; overflow: hidden;}
.content>.ng>.box>.right>.comment{ border: 1px solid #CCCCCC;}
.content>.ng>.box>.right>.comment>.comment_title{ font-size: 16px; color: #000000; padding-left: 18px; height: 50px; line-height: 50px; border-bottom: 1px solid #CCCCCC; background: #efefef;}
.content>.ng>.box>.right>.comment>.comment_cont{ overflow: hidden; padding-top: 20px; background: white;}
.content>.ng>.box>.right>.comment>.comment_cont>div{ float: left;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(1){ text-align: center; width: 170px;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(1)>img{ display: block; margin: 0 auto; }
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(1)>span{ display: block; font-size: 16px; color: #333333;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2){ position: relative;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>textarea{ resize: none; font-size: 16px; padding: 10px;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>a:nth-child(2){ position: absolute; left: 16px; bottom: 60px; z-index: 10;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>a:nth-child(3){ position: absolute; left: 54px; bottom: 60px; z-index: 10;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>.radio{ margin: 12px 0; overflow: hidden;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>.radio>span{ margin-left: 10px; display: block; float: left; width: 70px; position: relative;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>.radio>a{ display: block; float: right; width: 80px; height: 30px; line-height: 30px; text-align: center; font-size: 16px; background: #FF9900; color: white;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>.radio>span>input{ visibility: hidden;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>.radio>span>label{ cursor: pointer; display: block; width: 70px; height: 20px; position: absolute; z-index: 10; background: url(../assets/pro_details/radio_box.png) no-repeat; top: 0;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>.radio>span>label>span{ display: block; margin-top: -8px; margin-left: 24px; float: left; font-size: 16px; color: #333333;}
.content>.ng>.box>.right>.comment>.comment_cont>div:nth-child(2)>.radio>span>input[type=radio]:checked+label{ position: absolute; background: url(../assets/pro_details/radio.png) no-repeat 0 0;}
.content>.ng>.box>.right>.title{ margin-right: -1px; margin-top: 20px; overflow: hidden; border-left: 1px solid #CCCCCC;}
.content>.ng>.box>.right>.title>div{ cursor: pointer; padding: 0 18px; float: left; border-top: 1px solid #CCCCCC; border-right: 1px solid #CCCCCC; border-bottom: 1px solid #CCCCCC; line-height: 48px; font-size: 16px; background: #efefef;}
.content>.ng>.box>.right>.title>.choice.click{ background: white; border-bottom: 1px solid white; color: #FF9900;}
.content>.ng>.box>.right>.title>.choice:hover{ background: white; border-bottom: 1px solid white; color: #FF9900;}
.content>.ng>.box>.right>.title>div:nth-child(4)>span{ color: #FF9900;}
.content>.ng>.box>.right>.title>div:last-child{ height: 48px; width: 293px; cursor: auto;}
.content>.ng>.box>.right>.case{ display: none;}
.content>.ng>.box>.right>.case.show{ display: block;}
.content>.ng>.box>.right>.case>.pro_box{ background: white; overflow: hidden; border: 1px solid #CCCCCC; border-top: none; font-size: 14px; padding-left: 44px; padding-top: 5px;}
.content>.ng>.box>.right>.case>.pro_box>h1>span{ color: #FF9900;}
.content>.ng>.box>.right>.case>.pro_box>ul{ overflow: hidden;}
.content>.ng>.box>.right>.case>.pro_box>ul>li:nth-child(2){ margin-left: 50px;}
.content>.ng>.box>.right>.case>.pro_box>ul>li{ float: left; width: 200px; margin-bottom: 10px;}
.content>.ng>.box>.right>.case>.pro_box>ul>li>span{ display: block;line-height: 35px; }
.content>.ng>.box>.right>.case>.pro_brand{ border: 1px solid #CCCCCC; overflow: hidden; margin-top: 20px;}
.content>.ng>.box>.right>.case>.pro_brand>img{ width: 100%; height: 100%; display: block;}
.content>.ng>.box>.right>.case>.green{ border: 1px solid #CCCCCC; color: white; font-size: 16px; height: 50px; line-height: 50px; padding-left: 15px; background: #339933; margin-top: 20px;}

.content>.ng>.box>.right>.case>.case_top{ background: white; overflow: hidden; border: 1px solid #CCCCCC; border-top: none; font-size: 14px;}
.content>.ng>.box>.right>.case>.other{ background: white; overflow: hidden; border: 1px solid #CCCCCC; border-top: none; font-size: 14px;height: 100px;}
.content>.ng>.box>.right>.case>.case_top>div{ float: left;}
.content>.ng>.box>.right>.case>.case_top>.case_tl{ text-align: center; width: 150px; height: 150px; }
.content>.ng>.box>.right>.case>.case_top>.case_tl>span{ display: block; color: #333333; margin: 0 auto; line-height: 16px; margin-top: 25px;}
.content>.ng>.box>.right>.case>.case_top>.case_tl>b{ line-height: 66px; font-size: 36px; color: #FF9900; display: block; margin: 0 auto;}
.content>.ng>.box>.right>.case>.case_top>.case_tl>img{ display: block; margin: 0 auto;}
.content>.ng>.box>.right>.case>.case_top>.case_tm{ margin-left: 60px; margin-top: 20px; margin-right: 60px;}
.content>.ng>.box>.right>.case>.case_top>.case_tm>p{color: #333333; margin-bottom: 12px; overflow: hidden;}
.content>.ng>.box>.right>.case>.case_top>.case_tm>p>span{ display: block; float: left;}
.content>.ng>.box>.right>.case>.case_top>.case_tm>p>img{ display: block; float: left; margin-top: 8px;}
.content>.ng>.box>.right>.case>.case_top>.case_tm>p:nth-child(1)>img{ margin-left: 10px;}
.content>.ng>.box>.right>.case>.case_top>.case_tm>p:nth-child(2)>img{ margin-left: 19px;}
.content>.ng>.box>.right>.case>.case_top>.case_tm>p:nth-child(3)>img{ margin-left: 19px;}
.content>.ng>.box>.right>.case>.case_top>.case_tr{ margin-top: 20px;}
.content>.ng>.box>.right>.case>.case_top>.case_tr>div{ float: left;}
.content>.ng>.box>.right>.case>.case_top>.case_tr>.text_l{ font-size: 14px; color: #999999; }
.content>.ng>.box>.right>.case>.case_top>.case_tr>.text_r{ width: 310px; margin-left: 15px;}
.content>.ng>.box>.right>.case>.case_top>.case_tr>.text_r>a{ padding: 0 10px; line-height: 18px; border: 1px solid #FF9900; color: #FF9900; display: inline-block; margin-right: 10px; margin-bottom: 10px;}
.content>.ng>.box>.right>.case>.case_top>.case_tr>.text_r>a:last-child{ border: 1px solid #999999; color: #999999; cursor: auto;}
.content>.ng>.box>.right>.case>.case_bottom{ overflow: hidden;}
.content>.ng>.box>.right>.case>.case_bottom>.case_title{ margin-top: 10px; overflow: hidden; border-left: 1px solid #CCCCCC; margin-right: -1px;}
.content>.ng>.box>.right>.case>.case_bottom>.case_title>div{ cursor: pointer; padding: 0 18px; float: left; border-top: 1px solid #CCCCCC; border-right: 1px solid #CCCCCC; border-bottom: 1px solid #CCCCCC; line-height: 48px; font-size: 16px; background: #efefef;}
.content>.ng>.box>.right>.case>.case_bottom>.case_title>.choice.click{ background: white; border-bottom: 1px solid white; color: #FF9900;}
.content>.ng>.box>.right>.case>.case_bottom>.case_title>.choice:hover{ background: white; border-bottom: 1px solid white; color: #FF9900;}
.content>.ng>.box>.right>.case>.case_bottom>.case_title>div:nth-child(4)>span{ color: #FF9900;}
.content>.ng>.box>.right>.case>.case_bottom>.case_title>div:last-child{ cursor: auto; height: 48px; width: 524px;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont{ background: white; overflow: hidden;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li{ overflow: hidden; border: 1px solid #CCCCCC; border-top: none; padding: 18px; font-size: 14px; }
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>div{ float: left;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_l>p{ line-height: 18px; width: 594px; font-size: 14px; color: #333333;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_l>span{ display: block;color: #CCCCCC;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_m{ padding-top: 15px; margin-left: 15px; color: #999999; margin-right: 20px;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li:nth-child(5)>.li_m{ padding-top: 40px; }
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_r{ text-align: center;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li:nth-child(5)>.li_r{ padding-top: 20px;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_r>
span{ display: block;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_l>div{ overflow: hidden;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_l>div>a{ display: block; float: left; border: 1px solid #CCCCCC; width: 51px; height: 51px; margin-right: 10px; margin-top: 10px;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont>li>.li_l>div>a>img{ width: 100%; height: 100%;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont{ display: none;}
.content>.ng>.box>.right>.case>.case_bottom>.case_cont.show{ display: block;}

.content>.ng>.box>.right>.case>.case_bottom>.discuss_title{ margin-top: 10px; overflow: hidden; border-left: 1px solid #CCCCCC; margin-right: -1px;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_title>div{ cursor: pointer; padding: 0 18px; float: left; border-top: 1px solid #CCCCCC; border-right: 1px solid #CCCCCC; border-bottom: 1px solid #CCCCCC; line-height: 48px; font-size: 16px; background: #efefef;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_title>.choice.click{ background: white; border-bottom: 1px solid white; color: #FF9900;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_title>.choice:hover{ background: white; border-bottom: 1px solid white; color: #FF9900;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_title>div:nth-child(4)>span{ color: #FF9900;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_title>div:last-child{ cursor: auto; height: 48px; width: 524px;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont{ background: white; overflow: hidden;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li{ overflow: hidden; border: 1px solid #CCCCCC; border-top: none; padding: 18px; font-size: 14px; }
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>div{ float: left;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_l>p{ line-height: 18px; width: 594px; font-size: 14px; color: #333333;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_l>span{ display: block;color: #CCCCCC;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_m{ padding-top: 15px; margin-left: 15px; color: #999999; margin-right: 20px;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li:nth-child(5)>.li_m{ padding-top: 40px; }
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_r{ text-align: center;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li:nth-child(5)>.li_r{ padding-top: 20px;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_r>
span{ display: block;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_l>div{ overflow: hidden;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_l>div>a{ display: block; float: left; border: 1px solid #CCCCCC; width: 51px; height: 51px; margin-right: 10px; margin-top: 10px;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont>li>.li_l>div>a>img{ width: 100%; height: 100%;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont{ display: none;}
.content>.ng>.box>.right>.case>.case_bottom>.discuss_cont.show{ display: block;}

.content>.ng>.box>.right>.case>.case_bottom>.page{margin: 20px auto; width: 300px; overflow: hidden;}
.content>.ng>.box>.right>.case>.case_bottom>.page>a{ margin-right: 10px; text-align: center; font-size: 14px; display: block; float: left; width: 25px; height: 25px; border: 1px solid #d2d2d2; color: #666666;}
.content>.ng>.box>.right>.case>.case_bottom>.page>a:hover{ color: #339933; border: 1px solid #339933;}
.content>.ng>.box>.right>.case>.case_bottom>.page>a.here{ background: #669933; color: white; border: none; margin-top: 1px;}

</style>