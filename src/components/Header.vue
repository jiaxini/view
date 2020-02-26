<template>  
    <div>
        <div class="top">
            <div class="ng">
                <div class="left">
					<img :src="require('@/assets/home.png')" />
					<span>加西妮首页</span>
					<span>欢迎来到加西妮商城</span>
                    <span v-show="!user.name">
					    <span><router-link to="login">请登录</router-link></span>
					    <span><router-link to="register">免费注册</router-link></span>
                    </span>
				</div>
                <div class="right">
					<div v-show="user.name" class="select" @mouseenter="flag.select = true" @mouseleave="flag.select = false">
						<span>{{ user.name }}</span >
						<img :src="require('@/assets/down.png')" />
						<dd v-show="flag.select">
							<dl><router-link to="user">个人中心</router-link></dl>
							<dl><router-link to="user">收货地址</router-link></dl>
							<dl><router-link to="user">我的订单</router-link></dl>
						</dd>
					</div>
					<router-link to="cart">
						<img :src="require('@/assets/shop_cart.png')" />
						<span>购物车0件</span>
					</router-link>
					<a href="javascript:;"> 
						<img :src="require('@/assets/bookmarks.png')" />
						<span>收藏夹</span>
					</a>
				</div>
            </div>
        </div>
        <div class="middle">
            <div class="ng">
				<div class="logo">
					<a href="index.html"><img :src="require('@/assets/LOGO.png')" /></a>
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
                            <img :src="require('@/assets/shop_cart2.png')" />
                            <span>我的购物车 ></span>
                        </a>							
                    </div>
			    </div>				
			</div>
        </div>
        <div class="navbar">
            <div class="ng">
				<div class="menu" @mouseenter="flag.menu = true" @mouseleave="flag.menu = false">
					<div class="menu_title" @click="show()">
						全部商品分类
						<span></span>
                    </div>
					<ul v-if="item" v-show="flag.menu">
                        <li v-for="(item, index) of items" :key="index" >
                            <a href="">{{item.name}}<span></span></a>
                        </li>
					</ul>
				</div>
				<div class="bar">
					<a class="on" href="index.html">首页</a>
					<router-link to="shop">精选商品</router-link>
					<a href="javascript:;">促销专区</a>
					<a href="javascript:;">礼品专区</a>
					<a href="javascript:;">积分商城</a>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { USERINFO } from '../store/modules/user'
export default {
    name: 'Header',
    computed: {
        ...mapGetters({
            user: USERINFO
        })
    },
    methods:{
        show: () => this.item = !this.item
    },
    data:() => {
        return {
            flag: {
                select: false,
                menu: false
            },
            item: true,
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
.top{ height: 30px; background: #efefef; width: 100%;}
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

.top>.ng>.right>.select{ line-height: 30px; float: left; position: relative; padding: 0 10px; display: block; z-index: 10;}
.top>.ng>.right>.select:hover{ background: white;}
.top>.ng>.right>.select:hover>a{ color: #339933;}
.top>.ng>.right>.select>dd{ margin-left: -10px; top: 30px; position: absolute; width: 93px; text-align: center; background: white;}
.top>.ng>.right>.select>dd>dl>a{ display: block; width: 93px; text-align: center;}

.middle{ height: 150px;}
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
.middle>.ng>.shop_cart_box>.shop_cart>a>.num{left: 120px; top: -22px; line-height: 30px; text-align: center; color: white; width: 30px; height: 30px; display: block; position: absolute; background: require('@/assets/shop_cart_num.png')}
.middle>.ng>.shop_cart_box>.shop_cart>a{ font-size: 18px; color: #ff9933; line-height: 36px;}
.middle>.ng>.shop_cart_box>.shop_cart>a>img{ margin-left: 8px; float: left; margin-top: 5px;}
.middle>.ng>.shop_cart_box>.shop_cart>a>span{ margin-left: 12px; float: left;}
.navbar{ background: #339933; height: 40px; }
.navbar>.ng{position: relative;}
.navbar>.ng>.menu{cursor: pointer; width: 266px; height: 50px; background: url('../assets/menu.png'); position: absolute; top: -10px;}
.navbar>.ng>.menu>.menu_title{width: 266px; height: 40px; line-height: 40px; cursor: pointer; position: absolute; bottom: 0; text-align: center; font-size: 18px; color: white;}
.navbar>.ng>.menu>.menu_title>span{position: absolute; bottom: 10px; width: 15px; height: 15px; display: block; float: right; background: url('../assets/right2.png') no-repeat; right: 15px;}
.navbar>.ng>.menu:hover>.menu_title>span{position: absolute; bottom: 5px; width: 15px; height: 15px; display: block; float: right; background: url('../assets/down2.png') no-repeat; right: 20px;}
.navbar>.ng>.menu>ul{z-index: 12; width: 249px; position: absolute; top: 50px; left: 9px;}
.navbar>.ng>.menu>ul>li{ background: #FFFFFF; width: 249px; height: 60px; line-height: 60px; text-align: center; position: relative;}
.navbar>.ng>.menu>ul>li>a{display: block; font-size: 20px; color: #666666;}
.navbar>.ng>.menu>ul>li>a>span{position: absolute; bottom: 20px; width: 15px; height: 15px; display: block; float: right; background: url('../assets/right.png') no-repeat; right: 7px;}
.navbar>.ng>.menu>ul>li:hover{ background: #52c837;}
.navbar>.ng>.menu>ul>li:hover>a{ color: white;}
.navbar>.ng>.menu>ul>li:hover>a>span{position: absolute; bottom: 20px; width: 15px; height: 15px; display: block; float: right; background: url('../assets/right2.png') no-repeat; right: 7px;}
.navbar>.ng>.bar{margin-top: 10px; width: 700px; margin-left: 306px;}
.navbar>.ng>.bar>a{display: block; float: left; font-size: 18px; text-align: center; width: 140px; height: 40px; line-height: 40px; color: white;}
.navbar>.ng>.bar>a.on{ background: #268926;}
.navbar>.ng>.bar>a:hover{ background: #268926;}

.banner{ position: relative; height: 600px; width: 100%; text-align: center; z-index: 1; overflow: hidden; box-shadow: 0 10px 10px #666666;-webkit-box-shadow:inset 0 10px 10px #666666;  
  -moz-box-shadow:inset 0 10px 10px #666666;  }
.banner>.hd{ width: 100%; position: absolute; text-align: center; bottom: 12px; z-index: 11;}
.banner>.hd>ul{ display: inline-block;}
.banner>.hd>ul>li{ top: 0; border-radius: 50%; display: inline; margin: 0 5px; cursor: pointer; background: #8dd070;}
.banner>.hd>ul>li.on{ background: #339933;}
.banner>.bd{ text-align: center; position: absolute; width: 100%; height: 600px; z-index: 0;}
.banner>.bd>ul>li{ width: 100%; height: 600px; position: absolute;overflow: hidden;}
.banner>.bd>ul>li>a{ width: 1920px; height: 600px; position: absolute; left: 50%; margin-left: -960px;}
.banner>.bd>ul>li>a>img{ display: block; margin: 0 auto; height: 600px;} 
</style>