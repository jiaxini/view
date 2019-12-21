<template>
		<div class="content">
			<div class="bg">
				<div class="ng">
					<div class="register">
						<div class="chan">
							<a href="login.html">登录</a>
							<a href="register.html">免费注册</a>
						</div>
						<form>
								<div class="cont">
								<div>
									<label>
										<span>
											<img :src="pic.name" />
										</span>
										<input type="text" placeholder="请输入用户名" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="pic.lock" />
										</span>
										<input type="password" placeholder="请输入密码" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="pic.lock" />
										</span>
										<input type="password" placeholder="请再次输入密码" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="pic.email" />
										</span>
										<input type="text" placeholder="请输入邮箱" />
									</label>
								</div>
								<div>
									<label>
										<span>
											<img :src="pic.phone" />
										</span>
										<input type="text" placeholder="请输入手机号码" />
									</label>
									<a href="javascript:;">获取验证码</a>
								</div>
								<div>
									<label>
										<span>
											<img :src="pic.verify" />
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
export default {
    data(){
        return {
            pic: {
                name : require("@/assets/register/name.png"),
                lock : require("@/assets/register/lock.png"),
                email : require("@/assets/register/email.png"),
                phone : require("@/assets/register/phone.png"),
                verify : require("@/assets/register/verify.png")
            }
        }
    }
}
</script>
<style scoped>
.content{ overflow: hidden;}
.content>.bg{ height: 670px; background: url(../assets/register/bg.png) no-repeat center; background-size: cover;}
.content>.bg>.ng{ position: relative;}
.content>.bg>.ng>.register{ background: white; position: absolute; right: 0; top: 60px; width: 400px;}
.content>.bg>.ng>.register>.chan{ overflow: hidden; margin-bottom: 20px; border-top: 2px solid #207920;}
.content>.bg>.ng>.register>.chan>a{ line-height: 58px; font-size: 18px; text-align: center; display: block; float: left; width: 200px;}
.content>.bg>.ng>.register>.chan>a:nth-child(1){ color: white; background: #207920;}
.content>.bg>.ng>.register>.chan>a:nth-child(2){ color: #207920;}
.content>.bg>.ng>.register>form>.cont>div{ overflow: hidden; width: 300px; margin: 0 auto; margin-top: 10px;}
.content>.bg>.ng>.register>form>.cont>div:nth-child(1){ margin-top: 30px;}
.content>.bg>.ng>.register>form>.cont>div>label>span{ display: block; float: left; width: 50px; height: 50px;}
.content>.bg>.ng>.register>form>.cont>div>label>input{ font-size: 14px; display: block; float: left; width: 229px; height: 48px; border: 1px solid #CCCCCC; border-left: none; padding-left: 10px; padding-right: 10px;}
.content>.bg>.ng>.register>form>.cont>div:nth-child(5){ position: relative;}
.content>.bg>.ng>.register>form>.cont>div:nth-child(5)>label>input{ width: 155px; padding-right: 84px;}
.content>.bg>.ng>.register>form>.cont>div:nth-child(5)>a{ display: block; position: absolute; font-size: 14px; color: #339933; text-decoration: underline; right: 10px; top: 12px;}

.content>.bg>.ng>.register>form>.cont>.read{ margin-top: 6px;}
.content>.bg>.ng>.register>form>.cont>.read>.checkbox{ position: relative;}
.content>.bg>.ng>.register>form>.cont>.read>.checkbox>label{ cursor: pointer; display: block; width: 280px; height: 15px; position: absolute; z-index: 10; background: url(../assets/register/draw_box.png) no-repeat; margin-top: -18px;} 
.content>.bg>.ng>.register>form>.cont>.read>.checkbox>input{ visibility: hidden;}
.content>.bg>.ng>.register>form>.cont>.read>.checkbox>input[type=checkbox]:checked+label{ position: absolute; background: url(../assets/register/draw.png) no-repeat 0 0;}
.content>.bg>.ng>.register>form>.cont>.read>.checkbox>label>span{ margin-left: 24px; display: block; float: left; margin-top: -6px; font-size: 14px; color: #666666;}
.content>.bg>.ng>.register>form>.cont>.read>.checkbox>label>span>span{ color: #207920;}
.content>.bg>.ng>.register>form>.cont>a{display: block; margin: 0 auto; width: 300px; height: 50px; color: white; line-height: 50px; text-align: center; background: #339933; font-size: 30px; margin-top: 10px; margin-bottom: 30px;}

</style>