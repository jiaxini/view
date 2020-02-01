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
						<li v-for="recommend in recommends" :key='recommend.Id'>
							<a href="pro_details.html">
								<img :src="recommend.Pic" /> 
								<p>{{recommend.Title}}</p>
								<span>￥{{recommend.Price}}</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="news">
					<ol class="news_title">
						<li :class="newsSelected.num == item.Id ? 'active' : ''" v-for='item in news' :key="item.Id">{{item.Name}}</li>
					</ol>
					<ul class="news_cont show">
						<li v-for="product in newsSelected.products" :key="product.Id">
							<a href="pro_details.html">
								<img :src="product.Pic" />
								<p>
									<span>{{product.Title}}</span>
									<span>嫩粉色 30ml</span>
								</p>
								<span>￥{{product.Price}}</span>
							</a>
						</li>
					</ul>
					<div class="advertisement">
						<a href="pro_details.html">
							<img :src="newsSelected.cover" />
						</a>
					</div>
				</div>

				<div class="mask" v-for="floor in floors" :key='floor.Id'>
					<div class="mask_title">
						<span>{{floor.Num}}F</span>
						<span>{{floor.Name}}</span>
						<span>{{floor.Ename}}</span>
						<a href="shop_list.html">进入专区 ></a>
					</div>
					<div class="mask_cont">
						<div class="advertising">
							<a href="pro_details.html"><img :src="floor.Cover" /></a>
						</div>
						<div class="mask_list">
							<ul>
								<li v-for="product in floor.Products" :key='product.Id'>
									<a href="pro_details.html">
										<p>
											<span>{{product.Title}}</span>
											<span>￥{{product.Price}}</span>
										</p>
										<img :src="product.Pic" />
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
import { G } from '@/common/Http';
import { recommend, floor, news } from '@/common/Api'
export default {
    name: 'Index',
    data:() => {
         return {
			recommends:[],
			floors: [],
			news:[],
			newsSelected: {
				num: 1,
				products: [],
				cover: ''
			},
			pic:{
				tb1: require('@/assets/index/tb1.png'),
				tb2: require('@/assets/index/tb2.png'),
				tb3: require('@/assets/index/tb3.png'),
				tb4: require('@/assets/index/tb4.png'),
				tb5: require('@/assets/index/tb5.png'),
			}
			
        }
	},
	components: {Banner},
	created(){

	},
	mounted(){
		recommend.then(data => {
			if(data.status == 200){
				this.recommends = data.data
			}
		})
		floor.then(data => {
			if(data.status == 200){
				this.floors = data.data
			}
		})
		news.then(data =>{
			if(data.status == 200){
				this.news = data.data
				this.newsSelected.products = data.data[1].Products
				this.newsSelected.cover = data.data[1].Cover
			}
		})
	}
}
</script>
<style scoped>
.content>.ng>.today{ margin-top: 60px; margin-left: -1px; position: relative; width: 100%; border-top: 1px solid #cfcfcf; border-bottom: 1px solid #cfcfcf;}
.content>.ng>.today>.caption{ width: 93px; height: 115px; position: absolute; top: 0; left: 0; background: url('../assets/index/bt1.png');}
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
.content>.ng>.news>.news_cont>li>a>span{ display: block; margin-top: 10px;padding-top: 10px; font-size: 16px; font-weight: bold; color: #ff9900; }
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

.content>.ng>.service{ margin-top: 60px; overflow: hidden;}
.content>.ng>.service>li{ float: left; width: 240px;}
.content>.ng>.service>li>a>img{ display: block; float: left;}
.content>.ng>.service>li>div{ margin-top: 3px; float: left;}
.content>.ng>.service>li>div>h2>a{ margin-left: 4px; line-height: 20px; margin-top: 5px; color: #5a9321; font-size: 18px;}
.content>.ng>.service>li>div>p{ margin-left: 4px; line-height: 16px; color: #999999; font-size: 16px;}
</style>