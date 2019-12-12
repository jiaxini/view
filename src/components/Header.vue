<template>
    <div>
        <div class="top">
            <div class="ng">
                <div class="left">
					<img :src="pic.index" />
					<span>加西妮首页</span>
					<span>欢迎来到加西妮商城</span>
					<span><a href="login.html">请登录</a></span>
					<span><a href="register.html">免费注册</a></span>
				</div>
                <div class="right">
					<div class="select">
						<a href="user.html">我的加西妮</a>
						<img :src="pic.down" />
						<dd>
							<dl><a href="javascript:;">我的加西妮</a></dl>
							<dl><a href="javascript:;">我的加西妮</a></dl>
							<dl><a href="javascript:;">我的加西妮</a></dl>
						</dd>
					</div>
					<a href="shop_cart.html">
						<img :src="pic.cart1" />
						<span>购物车0件</span>
					</a>
					<a href="javascript:;"> 
						<img :src="pic.bookmarks" />
						<span>收藏夹</span>
					</a>
				</div>
            </div>
        </div>
        <div class="middle">
            <div class="ng">
				<div class="logo">
					<a href="index.html"><img :src="pic.logo" /></a>
				</div>
				<div class="search_box">
                    <div class="search">
                        <input type="text" placeholder="搜索你想要的护肤商品" />
                        <a href="javascript:;">搜索</a>
                    </div>
                    <ul>
                        <li>
                            <a href="shop_list.html">BB霜</a>
                            <span>|</span>
                        </li>	
                        <li>
                            <a href="shop_list.html">洁面乳</a>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="shop_list.html">乳液</a>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="shop_list.html">眼膜</a>
                            <span>|</span>
                        </li>
                        <li>
                            <a href="shop_list.html">洗面奶</a>
                            <span>|</span>
                        </li>	
                        <li>
                            <a href="shop_list.html">面霜</a>
                            <span>|</span>
                        </li>	
                        <li>
                            <a href="shop_list.html">面膜</a>
                        </li>
                    </ul>		
		        </div>
			    <div class="shop_cart_box">
                    <div class="shop_cart">
                        <a href="shop_cart.html">
                            <span class="num">0</span>
                            <img :src="pic.cart2" />
                            <span>我的购物车 ></span>
                        </a>							
                    </div>
			    </div>				
			</div>
        </div>
        <div class="navbar">
            <div class="ng">
				<div class="menu">
					<div class="menu_title" @click="show()">
						全部商品分类
						<span></span>
                    </div>
					<ul v-if="item">
                        <li v-for="(item, index) of items" :key="index" >
                            {{item.name}}{{index}}
                        </li>
					</ul>
				</div>
				<div class="bar">
					<a class="on" href="index.html">首页</a>
					<a href="shop_list.html">精选商品</a>
					<a href="javascript:;">促销专区</a>
					<a href="javascript:;">礼品专区</a>
					<a href="javascript:;">积分商城</a>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    methods:{
        show: () => this.item = !this.item
    },
    data(){
        return {
            item: true,
            pic: {
                index: require('@/assets/index/index.png'),
                down: require('@/assets/index/down.png'),
                bookmarks: require('@/assets/index/Bookmarks.png'),
                logo: require('@/assets/LOGO.png'),
                cart1: require('@/assets/index/shop_cart.png'),
                cart2: require('@/assets/index/shop_cart2.png')
            },
            items: [
                {url:'shop_list.html', name: '面膜系列'},						
                {url: "shop_list.html", name :"面霜系列"},
				{url: "shop_list.html", name :"眼霜系列"},
				{url: "shop_list.html", name :"BB霜系列"},
				{url: "shop_list.html", name :"原液系列"},
				{url: "shop_list.html", name :"乳液系列"},
				{url: "shop_list.html", name :"精华素系列"},
				{url: "shop_list.html", name :"洁面乳系列"},
				{url: "shop_list.html", name :"爽肤水系列"},
				{url: "shop_list.html", name :"面部润肤系列"}
            ]
        }

    }
}
</script>
<style scoped>
.top{ height: 30px; background: #efefef;}
.ng{ width: 1200px; margin: 0 auto;}
.middle{ height: 150px;}
.navbar{ background: #339933; height: 40px; }
.top>.ng>.left{ float: left; margin-left: 8px;}
.top>.ng>.left>img{ float: left;margin-top: 6px;}
.top>.ng>.left>span{ line-height: 30px; color: #999999;}
.top>.ng>.left>span:nth-child(2){ margin-left: 5px;}
.top>.ng>.left>span:nth-child(3){ margin-left: 24px;}
.top>.ng>.left>span:nth-child(4){ margin-left: 30px;}
.top>.ng>.left>span:nth-child(5){ margin-left: 14px;}
.top>.ng>.right{ float: right;margin-right: 8px;}
.top>.ng>.right>a{ float: left; color: #999999; line-height: 30px;}
.top>.ng>.right>a{ margin-left: 34px;}
.top>.ng>.right>a:hover{ color: #339933;}
.middle>.ng>.logo>a{float: left; line-height: 150px; }
.middle>.ng>.search_box{ float: left; margin-left: 94px;}
.middle>.ng>.search_box>.search{ margin-top: 48px}
.middle>.ng>.search_box>.search>input{float: left; padding-left: 5px; padding-right: 5px;; width: 350px; height: 36px; border:1px solid #5a9321; background: none;}
.middle>.ng>.search_box>.search>input::-webkit-input-placeholder{ color: #cccccc;}
.middle>.ng>.search_box>.search>input::-moz-input-placeholder{ color: #666666;}
.middle>.ng>.search_box>.search>input::-o-input-placeholder{ color: #666666;}
.middle>.ng>.search_box>.search>input::input-placeholder{ color: #666666;}
.middle>.ng>.search_box>.search>a{ line-height: 38px; text-align: center; float: left; width: 90px; height: 38px; background: #5a9321; color: white; font-size: 18px;}
.middle>.ng>.search_box>ul>li{ display: inline-block; color: #999999; padding-left: 4px; padding-right: 4px;}
.middle>.ng>.search_box>ul>li>a{ margin-right: 5px;}
.middle>.ng>.shop_cart_box{ float: left; margin-left: 170px;}
.middle>.ng>.shop_cart_box>.shop_cart{ margin-top: 48px; width: 166px; height: 36px; border: 1px solid #ff9933; position: relative;}
.middle>.ng>.shop_cart_box>.shop_cart>a>.num{left: 120px; top: -22px; line-height: 30px; text-align: center; color: white; width: 30px; height: 30px; display: block; position: absolute; background: require('@/assets/index/shop_cart_num.png');}
.middle>.ng>.shop_cart_box>.shop_cart>a{ font-size: 18px; color: #ff9933; line-height: 36px;}
.middle>.ng>.shop_cart_box>.shop_cart>a>img{ margin-left: 8px; float: left; margin-top: 5px;}
.middle>.ng>.shop_cart_box>.shop_cart>a>span{ margin-left: 12px; float: left;}
.navbar>.ng{position: relative;}
.navbar>.ng>.menu{cursor: pointer; width: 266px; height: 50px; background: require('@assets/index/menu.png'); position: absolute; top: -10px;}
.navbar>.ng>.menu>.menu_title{width: 266px; height: 40px; line-height: 40px; cursor: pointer; position: absolute; bottom: 0; text-align: center; font-size: 18px; color: white;}
.navbar>.ng>.menu>.menu_title>span{position: absolute; bottom: 10px; width: 15px; height: 15px; display: block; float: right; background: require('@/assets/index/right2.png') no-repeat; right: 15px;}
.navbar>.ng>.menu:hover>.menu_title>span{position: absolute; bottom: 5px; width: 15px; height: 15px; display: block; float: right; background: require('@/assets/index/down2.png') no-repeat; right: 20px;}
.navbar>.ng>.menu>ul{z-index: 12; display: none; width: 249px; position: absolute; top: 50px; left: 9px;}
.navbar>.ng>.menu>ul>li{ background: #FFFFFF; width: 249px; height: 60px; line-height: 60px; text-align: center; position: relative;}
.navbar>.ng>.menu>ul>li>a{display: block; font-size: 20px; color: #666666;}
.navbar>.ng>.menu>ul>li>a>span{position: absolute; bottom: 20px; width: 15px; height: 15px; display: block; float: right; background: require('@/assets/index/right.png') no-repeat; right: 7px;}
.navbar>.ng>.menu>ul>li:hover{ background: #52c837;}
.navbar>.ng>.menu>ul>li:hover>a{ color: white;}
.navbar>.ng>.menu>ul>li:hover>a>span{position: absolute; bottom: 20px; width: 15px; height: 15px; display: block; float: right; background: require('@/assets/index/right2.png') no-repeat; right: 7px;}
.navbar>.ng>.bar{margin-top: 10px; width: 700px; margin-left: 306px;}
.navbar>.ng>.bar>a{display: block; float: left; font-size: 18px; text-align: center; width: 140px; height: 40px; line-height: 40px; color: white;}
.navbar>.ng>.bar>a.on{ background: #268926;}
.navbar>.ng>.bar>a:hover{ background: #268926;}
</style>