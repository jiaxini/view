<template>
 			<div class="banner">
				<div class="hd">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="bd">
					<ul>
						<li><a href="pro_details.html"><img :src="pic.banner" /> </a></li>
						<li><a href="pro_details.html"><img :src="pic.banner2" /> </a></li>
						<li><a href="pro_details.html"><img :src="pic.banner3" /> </a></li>
					</ul>
				</div>
			</div> 
</template>

<script>
export default {
    name: 'Banner',
    data: () => {
        return {
            pic: {
                banner: require('@/assets/index/banner.png'),
                banner1: require('@/assets/index/banner2.png'),
                banner2: require('@/assets/index/banner3.png'),
            }
        }
    }
}
</script>

<style scoped>
.banner{ position: relative; height: 600px; width: 100%; text-align: center; z-index: 1; overflow: hidden; box-shadow: 0 10px 10px #666666;-webkit-box-shadow:inset 0 10px 10px #666666;  
  -moz-box-shadow:inset 0 10px 10px #666666;  }
.banner>.hd{ width: 100%; position: absolute; text-align: center; bottom: 12px; z-index: 11;}
.banner>.hd>ul{ display: inline-block;}
.banner>.hd>ul>li{ top: 0; width: 20px; height: 20px; border-radius: 50%; display: inline; float: left; margin: 0 5px; cursor: pointer; background: #8dd070;}
.banner>.hd>ul>li.on{ background: #339933;}
.banner>.bd{ text-align: center; position: absolute; width: 100%; height: 600px; z-index: 0;}
.banner>.bd>ul>li{ width: 100%; height: 600px; position: absolute;overflow: hidden;}
.banner>.bd>ul>li>a{ width: 1920px; height: 600px; position: absolute; left: 50%; margin-left: -960px;}
.banner>.bd>ul>li>a>img{ display: block; margin: 0 auto; height: 600px;}
</style>