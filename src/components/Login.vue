<template>
		<div class="content">
			<div class="bg">
				<div class="ng">to
					<div class="login">
						<div class="chan">
							<button :class="isLogin ? 'show' : ''" @click="isLogin = true">登录</button>
							<button :class="isLogin ? '' : 'show'" @click="isLogin = false">免费注册</button>
						</div>
						<form class="login" v-show="isLogin">
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
						<form class='register' v-show="!isLogin">
								<div class="cont">
								<div>
									<label>
										<span>
											<img :src="require('@/assets/name.png')" />
										</span>
										<input type="text" placeholder="请输入用户名" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="require('@/assets/lock.png')" />
										</span>
										<input type="password" placeholder="请输入密码" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="require('@/assets/lock.png')" />
										</span>
										<input type="password" placeholder="请再次输入密码" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="require('@/assets/email.png')" />
										</span>
										<input type="text" placeholder="请输入邮箱" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="require('@/assets/moblie.png')" />
										</span>
										<input type="text" placeholder="请输入手机号码" />
									</label>
									<a href="javascript:;">获取验证码</a>
								</div>
								<div>
									<label>
										<span>
											<img :src="require('@/assets/verify.png')" />
										</span>
										<input type="text" placeholder="请输入手机获取的验证码" />
									</label>
								</div>
								
								<div class="read">
									<div class="checkbox">
										<input type="checkbox" id="checkbox" checked="checked" />
										<label for="checkbox">
											<span>我已阅读并同意<span>《加西妮用户服务条例》</span></span>
										</label>
									</div>
								</div>
								<a href="javascript:;">立即注册</a>
							</div>
						
						</form>
					</div>
				</div>
					
			</div>
			
		</div>
</template>
<script>
import { login } from "../common/Api";
import { mapActions } from 'vuex';
import { USERINFO } from '../store/modules/user';
export default {
    data(){
        return {
			isLogin: this.$route.path == '/login',
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
			this._login({username, password});
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
.content>.bg>.ng>.login>.chan>button{ line-height: 58px; font-size: 18px; text-align: center; display: block; float: left; width: 200px;color: white; background: #207920;}
.content>.bg>.ng>.login>.chan>.show{ color: #207920; background: white; border-style: none;}
.login>.cont>div{ overflow: hidden; width: 300px; margin: 0 auto;}
.login>.cont>div:nth-child(1){ margin-top: 60px;}
.login>.cont>div:nth-child(2){ margin-top: 30px;}
.login>.cont>div>label>span{ display: block; float: left; width: 50px; height: 50px;}
.login>.cont>div>label>input{ font-size: 14px; display: block; float: left; width: 229px; height: 48px; border: 1px solid #CCCCCC; border-left: none; padding-left: 10px; padding-right: 10px;}
.login>.cont>.read{ margin-top: 14px;}
.login>.cont>.read>.checkbox{ position: relative;}
.login>.cont>.read>.checkbox>label{ cursor: pointer; display: block; width: 280px; height: 15px; position: absolute; z-index: 10; background: url(../assets/draw_box.png) no-repeat; margin-top: -18px;} 
.login>.cont>.read>.checkbox>input{ visibility: hidden;}
.login>.cont>.read>.checkbox>input[type=checkbox]:checked+label{ position: absolute; background: url(../assets/draw.png) no-repeat 0 0;}
.login>.cont>.read>.checkbox>label>span{ margin-left: 24px; display: block; float: left; margin-top: -6px; font-size: 14px; color: #999999;}
.login>.cont>.read>.checkbox>a{ font-size: 14px; float: right;}
.login>.cont>button{display: block; margin: 0 auto; width: 300px; height: 50px; color: white; line-height: 50px; text-align: center; background: #339933; font-size: 30px; margin-top: 30px; margin-bottom: 30px;}
.login>.cont>.line{ overflow: hidden; margin-top: 40px;}
.login>.cont>.line>b:nth-child(1){ margin-top: 14px; float: left; display: block; width: 74px; border-top: 1px solid #CCCCCC;}
.login>.cont>.line>b:nth-child(3){ margin-top: 14px; float: right; display: block; width: 74px; border-top: 1px solid #CCCCCC;}
.login>.cont>.line>span{ margin-left: 13px; float: left; font-size: 14px; color: #CCCCCC; }
.login>.cont>.other{ margin-top: 30px; margin-bottom: 40px;}
.login>.cont>.other>a:nth-child(1){ display: block; float: left; margin-top: 6px; margin-left: 10px;}
.login>.cont>.other>a:nth-child(2){ display: block; float: left; margin-left: 70px;}
.login>.cont>.other>a:nth-child(3){ display: block; float: right;}
.register>.cont>div{ overflow: hidden; width: 300px; margin: 0 auto; margin-top: 10px;}
.register>.cont>div:nth-child(1){ margin-top: 30px;}
.register>.cont>div>label>span{ display: block; float: left; width: 50px; height: 50px;}
.register>.cont>div>label>input{ font-size: 14px; display: block; float: left; width: 229px; height: 48px; border: 1px solid #CCCCCC; border-left: none; padding-left: 10px; padding-right: 10px;}
.register>.cont>div:nth-child(5){ position: relative;}
.register>.cont>div:nth-child(5)>label>input{ width: 155px; padding-right: 84px;}
.register>.cont>div:nth-child(5)>a{ display: block; position: absolute; font-size: 14px; color: #339933; text-decoration: underline; right: 10px; top: 12px;}
.register>.cont>.read{ margin-top: 6px;}
.register>.cont>.read>.checkbox{ position: relative;}
.register>.cont>.read>.checkbox>label{ cursor: pointer; display: block; width: 280px; height: 15px; position: absolute; z-index: 10; background: url(../assets/draw_box.png) no-repeat; margin-top: -18px;} 
.register>.cont>.read>.checkbox>input{ visibility: hidden;}
.register>.cont>.read>.checkbox>input[type=checkbox]:checked+label{ position: absolute; background: url(../assets/draw.png) no-repeat 0 0;}
.register>.cont>.read>.checkbox>label>span{ margin-left: 24px; display: block; float: left; margin-top: -6px; font-size: 14px; color: #666666;}
.register>.cont>.read>.checkbox>label>span>span{ color: #207920;}
.register>.cont>a{display: block; margin: 0 auto; width: 300px; height: 50px; color: white; line-height: 50px; text-align: center; background: #339933; font-size: 30px; margin-top: 10px; margin-bottom: 30px;}

</style>