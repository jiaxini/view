<template>
		<div class="content">
			<div class="bg">
				<div class="ng">
					<div class="login">
						<div class="chan">
							<a href="login.html">登录</a>
							<a href="register.html">免费注册</a>
						</div>
						<form>
							<div class="cont">
								<div>
									<label>
										<span>
											<img :src="require('@/assets/name.png')" />
										</span>
										<input type="text" placeholder="请输入用户名" v-model="username" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="require('@/assets/lock.png')" />
										</span>
										<input type="password" placeholder="请输入密码" v-model="password" />
									</label>
								</div>
								<div class="read">
									<div class="checkbox">
										<input type="checkbox" id="checkbox" checked="checked" />
										<label for="checkbox">
											<span>自动登录</span>
										</label>
										<a href="javascript:;">忘记密码？</a>
									</div>
								</div>
								<button @click="login" type="button">登录</button>
								
								<div class="line">
									<b></b>
									<span>使用第三方账号登录</span>
									<b></b>
								</div>
								<div class="other">
									<a href="javascript:;"><img :src="require('@/assets/QQ.png')" /> </a>
									<a href="javascript:;"><img :src="require('@/assets/wx.png')" /> </a>
									<a href="javascript:;"><img :src="require('@/assets/wb.png')" /> </a>
								</div>
							</div>
						
						</form>
					</div>
				</div>
					
			</div>
			
		</div>
</template>
<script>
import { P } from '../common/Http';
import { login } from "../common/Api";
import { mapActions } from 'vuex';
import { USERINFO } from '../store/modules/user';
export default {
    data(){
        return {
			username: '',
			password: ''
        }
	},
	methods: {
		...mapActions({
			_login: USERINFO
		}),
		login(){
			let username = this.username
			let password = this.password
			if(!username){
				console.error("username con`t be empty")
				return
			}
			if(!password){
				console.error("password con`t be empty")
				return
			}
			this._login({url:login,user:{username, password}});
			this.$router.push("/")
		},
	}
	
}
</script>
<style scoped>
.content{ overflow: hidden;}
.content>.bg{ height: 670px; background: url(../assets/bg.png) no-repeat center; background-size: cover;}
.content>.bg>.ng{ position: relative;}
.content>.bg>.ng>.login{ background: white; position: absolute; right: 0; top: 60px; width: 400px;}
.content>.bg>.ng>.login>.chan{ overflow: hidden; margin-bottom: 20px; border-top: 2px solid #207920;}
.content>.bg>.ng>.login>.chan>a{ line-height: 58px; font-size: 18px; text-align: center; display: block; float: left; width: 200px;}
.content>.bg>.ng>.login>.chan>a:nth-child(2){ color: white; background: #207920;}
.content>.bg>.ng>.login>.chan>a:nth-child(1){ color: #207920;}
.content>.bg>.ng>.login>form>.cont>div{ overflow: hidden; width: 300px; margin: 0 auto;}
.content>.bg>.ng>.login>form>.cont>div:nth-child(1){ margin-top: 60px;}
.content>.bg>.ng>.login>form>.cont>div:nth-child(2){ margin-top: 30px;}
.content>.bg>.ng>.login>form>.cont>div>label>span{ display: block; float: left; width: 50px; height: 50px;}
.content>.bg>.ng>.login>form>.cont>div>label>input{ font-size: 14px; display: block; float: left; width: 229px; height: 48px; border: 1px solid #CCCCCC; border-left: none; padding-left: 10px; padding-right: 10px;}
.content>.bg>.ng>.login>form>.cont>.read{ margin-top: 14px;}
.content>.bg>.ng>.login>form>.cont>.read>.checkbox{ position: relative;}
.content>.bg>.ng>.login>form>.cont>.read>.checkbox>label{ cursor: pointer; display: block; width: 280px; height: 15px; position: absolute; z-index: 10; background: url(../assets/register/draw_box.png) no-repeat; margin-top: -18px;} 
.content>.bg>.ng>.login>form>.cont>.read>.checkbox>input{ visibility: hidden;}
.content>.bg>.ng>.login>form>.cont>.read>.checkbox>input[type=checkbox]:checked+label{ position: absolute; background: url(../assets/register/draw.png) no-repeat 0 0;}
.content>.bg>.ng>.login>form>.cont>.read>.checkbox>label>span{ margin-left: 24px; display: block; float: left; margin-top: -6px; font-size: 14px; color: #999999;}
.content>.bg>.ng>.login>form>.cont>.read>.checkbox>a{ font-size: 14px; float: right;}
.content>.bg>.ng>.login>form>.cont>button{display: block; margin: 0 auto; width: 300px; height: 50px; color: white; line-height: 50px; text-align: center; background: #339933; font-size: 30px; margin-top: 30px; margin-bottom: 30px;}
.content>.bg>.ng>.login>form>.cont>.line{ overflow: hidden; margin-top: 40px;}
.content>.bg>.ng>.login>form>.cont>.line>b:nth-child(1){ margin-top: 14px; float: left; display: block; width: 74px; border-top: 1px solid #CCCCCC;}
.content>.bg>.ng>.login>form>.cont>.line>b:nth-child(3){ margin-top: 14px; float: right; display: block; width: 74px; border-top: 1px solid #CCCCCC;}
.content>.bg>.ng>.login>form>.cont>.line>span{ margin-left: 13px; float: left; font-size: 14px; color: #CCCCCC; }
.content>.bg>.ng>.login>form>.cont>.other{ margin-top: 30px; margin-bottom: 40px;}
.content>.bg>.ng>.login>form>.cont>.other>a:nth-child(1){ display: block; float: left; margin-top: 6px; margin-left: 10px;}
.content>.bg>.ng>.login>form>.cont>.other>a:nth-child(2){ display: block; float: left; margin-left: 70px;}
.content>.bg>.ng>.login>form>.cont>.other>a:nth-child(3){ display: block; float: right;}
</style>