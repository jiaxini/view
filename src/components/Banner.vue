<template>
 	<div class="banner" @mouseenter="stop()" @mouseleave="show()">
		<div class="hd">
			<ul>
				<li @click="currentIndex = banner.id" :class="currentIndex == banner.id ? 'on' : ''" v-for="banner in banners" :key='banner.id'></li>
			</ul>
		</div>
		<div class="bd">
			<ul>
				<li v-show="currentIndex == banner.id" v-for="banner in banners" :key="banner.id"><a href="pro_details.html"><img :src="banner.img" :alt="banner.title" /></a></li>
			</ul>
		</div>
	</div> 
</template>

<script>
import { banner } from '../common/Api';
export default {
    name: 'Banner',
    data: () => {
        return {
			banners: [],
			setintervalId: null,
			currentIndex: 0
        }
    },
	mounted() {
		banner.then(d => {
			this.banners = d.data
		})
		this.show();
	},
	methods: {
		show: function(){
			this.setintervalId = setInterval(()=>{
				if(this.currentIndex == 3){
					this.currentIndex = 1;
				}else{
					this.currentIndex++;
				}
			}, 3000);
		},
		stop: function(){
			clearInterval(this.setintervalId);
		}
	}
}
</script>

<style scoped>
.banner{ position: relative; height: 600px; width: 100%; text-align: center; z-index: 1; overflow: hidden; box-shadow: 0 10px 10px #666666;-webkit-box-shadow:inset 0 10px 10px #666666;  
  -moz-box-shadow:inset 0 10px 10px #666666;  }
.banner>.hd{ width: 100%; position: absolute; text-align: center; bottom: 12px; z-index: 11;}
.banner>.hd>ul{ display: inline-block;}
.banner>.hd>ul>li{ top: 0; border-radius: 50%;height: 20px; width: 20px; display: inline-block; margin: 0 5px; cursor: pointer; background: #8dd070;}
.banner>.hd>ul>li.on{ background: #339933; }
.banner>.bd{ text-align: center; position: absolute; width: 100%; height: 600px; z-index: 0;}
.banner>.bd>ul>li{ width: 100%; height: 600px; position: absolute;overflow: hidden;}
.banner>.bd>ul>li>a{ width: 1920px; height: 600px; position: absolute; left: 50%; margin-left: -960px;}
.banner>.bd>ul>li>a>img{ display: block; margin: 0 auto; height: 600px;}
</style>