<template>
		<div class="content">
			<div class="ng">
				<ul class="left"> 
					<li>
						<a href="user.html">
							<span>我的加西妮</span>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<span>个人资料</span>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<span>修改密码</span>
						</a>
					</li>
					<li class="default">
						<a href="address.html">
							<span>收货地址</span>
						</a>
					</li>
					<li>
						<a href="order.html">
							<span>我的订单</span>
						</a>
					</li>
				</ul>
				
				<div class="right">
					<div class="new">
						<h1>新增收货地址</h1>
						<form>
							<div>
								<b>*</b>
								<span>所在地区</span>
								<select>
									<option>广东省</option>
									<option>广东省</option>
									<option>广东省</option>
								</select>
								<select>
									<option>广州市</option>
									<option>广州市</option>
									<option>广州市</option>
								</select>
								<select>
									<option>天河区</option>
									<option>天河区</option>
									<option>天河区</option>
								</select>
							</div>
							
							<div>
								<b>*</b>
								<span>详细地址</span>
								<textarea cols="43" rows="2" placeholder="请填写详细的收货地址，例如街道名称，门牌号码，楼层信息等。"></textarea>
							</div>
							
							<div>

								<span>邮政编码</span>
								<input type="text" placeholder="如不清楚邮递区号，请填写000000" />
							</div>
							
							<div>
								<b>*</b>
								<span>收货人姓名</span>
								<input type="text" placeholder="长度不超过25个字符" />
							</div>
							
							<div>
								<b>*</b>
								<span>手机号码</span>
								<input type="text" placeholder="电话号码、手机号码必须填写一项" />
							</div>
							
							<div>
								<span>电话号码</span>
								<input type="text" placeholder="区号" />
								<i>-</i>
								<input type="text" placeholder="电话号码" />
								<i>-</i>
								<input type="text" placeholder="分机号" />
							</div>
							
							<h2>
								<span class="checkbox">
									 <input type="checkbox" value="" id="checkbox" name="" checked="checked" />
									 <label for="checkbox"></label>
									 <span>设为默认地址</span>
								</span>
							</h2>
							<h3><input type="button" value="保存"></input></h3>
						</form>
					</div>					
				
					<div class="history">
						<h1>
							历史地址
							<span>（可保留4条）</span>
						</h1>	
						<div class="history_box">
							<div class="box_title">
								<div>姓名</div>
								<div>所在地区</div>
								<div>详细地址</div>
								<div>邮政编码</div>
								<div>联系电话</div>
								<div>操作</div>
								<div>是否默认</div>
							</div>
							<ul class="box_cont">
								<li class="on">
									<div>张三</div>
									<div>广东省广州市天河区</div>
									<div>大观南路26号长盛商务大厦多迪公司</div>
									<div>510000</div>
									<div>13888888888</div>
									<div><a href="javascript:;">修改</a> / <a class="remove" href="javascript:;">删除</a></div>
									<div><span class="default">默认地址</span></div>
									<div>常用</div>
								</li>
								<li>
									<div>张三</div>
									<div>广东省广州市天河区</div>
									<div>大观南路26号长盛商务大厦多迪公司</div>
									<div>510000</div>
									<div>13888888888</div>
									<div><a href="javascript:;">修改</a> / <a class="remove" href="javascript:;">删除</a></div>
									<div><span class="default">设为默认</span></div>
									<div>常用</div>
								</li>
								<li>
									<div>张三</div>
									<div>广东省广州市天河区</div>
									<div>大观南路26号长盛商务大厦多迪公司</div>
									<div>510000</div>
									<div>13888888888</div>
									<div><a href="javascript:;">修改</a> / <a class="remove" href="javascript:;">删除</a></div>
									<div><span class="default">设为默认</span></div>
									<div>常用</div>
								</li>
								<li>
									<div>张三</div>
									<div>广东省广州市天河区</div>
									<div>大观南路26号长盛商务大厦多迪公司</div>
									<div>510000</div>
									<div>13888888888</div>
									<div><a href="javascript:;">修改</a> / <a class="remove" href="javascript:;">删除</a></div>
									<div><span class="default">设为默认</span></div>
									<div>常用</div>
								</li>
							</ul>
						</div>
					</div>
				</div>			
			</div>
			
		</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.content{ overflow: hidden;}
.content>.ng{ margin-top: 30px;}
.content>.ng>.left{ margin-right: 30px; margin-left: 10px; float: left; width: 150px; background: white;}
.content>.ng>.left>li{ width: 150px; height: 160px;text-align: center;}
.content>.ng>.left>li.default{ background: #ff9933;}
.content>.ng>.left>li.default>a>span{ color: white;}
.content>.ng>.left>li:hover>a>span{ color: white;}
.content>.ng>.left>li>a{ display: block; width: 100%; height: 160px;}
.content>.ng>.left>li:nth-child(4)>a>img{ display: none;} 
.content>.ng>.left>li:nth-child(4)>a>img:nth-child(2){ display: block;}
.content>.ng>.left>li>a>span{ display: block; font-size: 16px; color: #333333; padding-top: 100px;}
.content>.ng>.left>li:nth-child(1){ background: url(../assets/address/add1.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(1):hover{ background: url(../assets/address/add11.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(2){ background: url(../assets/address/add2.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(2):hover{ background: url(../assets/address/add22.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(3){ background: url(../assets/address/add3.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(3):hover{ background: url(../assets/address/add33.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(4){ background: url(../assets/address/add44.png) no-repeat center; background-position:50% 40%, center; background-color: #ff9933;}
.content>.ng>.left>li:nth-child(4):hover{ background: url(../assets/address/add44.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(5){ background: url(../assets/address/add5.png) no-repeat center; background-position:50% 40%, center}
.content>.ng>.left>li:nth-child(5):hover{ background: url(../assets/address/add55.png) no-repeat center; background-color: #ff9933; background-position:50% 40%, center}

.content>.ng>.right{ overflow: hidden; background: white; padding-bottom: 12px;}
.content>.ng>.right>.new>h1{ padding-left: 24px; border-left: 5px solid #339933; font-size: 16px; color: #333333; line-height: 18px; margin-top: 20px;}
.content>.ng>.right>.new>form>div{ margin-top: 20px; margin-left: 30px; overflow: hidden;}
.content>.ng>.right>.new>form>div>b{ color: #ff9933; margin-right: 13px;}
.content>.ng>.right>.new>form>div>span{ color: #000000; font-size: 16px; margin-right: 33px;}
.content>.ng>.right>.new>form>div>select{ margin-right: 18px; padding-left: 10px; -webkit-appearance: none; border: 1px solid #999999; width: 98px; height: 28px; color: #CCCCCC; background: url(../assets/address/down.png) no-repeat 80px;}
.content>.ng>.right>.new>form>div>select>option{padding-top: 10px;}
.content>.ng>.right>.new>form>div>textarea{ padding: 10px; resize: none;}
.content>.ng>.right>.new>form>div:nth-child(2)>b{ float: left; margin-top: 22px;}
.content>.ng>.right>.new>form>div:nth-child(2)>span{ float: left; margin-top: 16px; margin-left: 4px;} 
.content>.ng>.right>.new>form>div:nth-child(2)>textarea{ margin-left: 4px; float: left;}
.content>.ng>.right>.new>form>div:nth-child(2)>textarea::-webkit-input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div:nth-child(2)>textarea::-moz-input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div:nth-child(2)>textarea::-o-input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div:nth-child(2)>textarea::input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div:nth-child(3)>span{ margin-left: 26px;}
.content>.ng>.right>.new>form>div>input{ width: 218px; height: 28px; padding: 0 10px;}
.content>.ng>.right>.new>form>div>input::-webkit-input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div>input::-moz-input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div>input::-o-input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div>input::input-placeholder{ color: #cccccc;}
.content>.ng>.right>.new>form>div:nth-child(4)>span{ margin-right: 17px;}
.content>.ng>.right>.new>form>div:nth-child(6)>span{ margin-left: 26px;}
.content>.ng>.right>.new>form>div:nth-child(6)>input:nth-child(2){ width: 58px;}
.content>.ng>.right>.new>form>div:nth-child(6)>input:nth-child(4){ width: 98px;}
.content>.ng>.right>.new>form>div:nth-child(6)>input:nth-child(6){ width: 78px;}
.content>.ng>.right>.new>form>div:nth-child(6)>i{ color: #999999; margin: 0 10px;}
.content>.ng>.right>.new>form>h2{ overflow: hidden;}
.content>.ng>.right>.new>form>h2>.checkbox{ margin-left: 157px; margin-top: 14px; display: block; position: relative; float: left; cursor: pointer;}
.content>.ng>.right>.new>form>h2>.checkbox>label{ display: block; width: 15px; height: 15px; cursor: pointer; position: absolute; z-index: 10; background: url(../assets/address/draw_box.png) no-repeat; margin-top: -15px;}
.content>.ng>.right>.new>form>h2>.checkbox>input{ visibility: hidden;}
.content>.ng>.right>.new>form>h2>.checkbox>input[type=checkbox]:checked+label{ position: absolute; background: url(../assets/address/draw.png) no-repeat 0 0;}  
.content>.ng>.right>.new>form>h2>.checkbox>span{ float: left; font-size: 14px; color: #999999; margin-top: 2px; margin-left: 25px;}
.content>.ng>.right>.new>form>h3>input[type=button]{ color: white; border: none; background: #ff9933; font-size: 18px; width: 100px; height: 40px; cursor: pointer; margin-left: 157px; margin-top: 20px;}

.content>.ng>.right>.history>h1{ margin-top: 35px; padding-left: 24px; line-height: 18px; margin-bottom: 6px; border-left: 5px solid #339933; font-size: 16px; color: #333333;}
.content>.ng>.right>.history>h1>span{ font-size: 12px; color: #333333;}
.content>.ng>.right>.history>.history_box{ margin-left: 24px; width: 960px;}
.content>.ng>.right>.history>.history_box>.box_title{ background: #e2e2e2; overflow: hidden; line-height: 30px;}
.content>.ng>.right>.history>.history_box>.box_title>div{ margin-right: 38px; text-align: center; float: left; font-size: 16px; color: #333333;}
.content>.ng>.right>.history>.history_box>.box_title>div:nth-child(1){ width: 60px;}
.content>.ng>.right>.history>.history_box>.box_title>div:nth-child(2){ width: 90px;}
.content>.ng>.right>.history>.history_box>.box_title>div:nth-child(3){ width: 180px;}
.content>.ng>.right>.history>.history_box>.box_title>div:nth-child(4){ width: 70px;}
.content>.ng>.right>.history>.history_box>.box_title>div:nth-child(5){ width: 96px;}
.content>.ng>.right>.history>.history_box>.box_title>div:nth-child(6){ width: 90px;}
.content>.ng>.right>.history>.history_box>.box_cont{ overflow: hidden; border: 1px solid #CCCCCC; }
.content>.ng>.right>.history>.history_box>.box_cont>li{ overflow: hidden; margin-right: -60px; border-bottom: 1px solid #CCCCCC; }
.content>.ng>.right>.history>.history_box>.box_cont>li:last-child{ border-bottom: none;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div{ line-height: 48px; margin-right: 38px; text-align: center; float: left; font-size: 14px; color: #333333;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(1){ width: 60px;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(2){ text-align: left; width: 90px; line-height: 24px;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(3){ text-align: left; width: 180px; line-height: 24px;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(4){ width: 70px;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(5){ width: 96px;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(6){ width: 90px;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(6)>a{ text-decoration: underline;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(7){ margin-right: 20px;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(7)>span{ cursor: pointer; margin-top: 10px; text-decoration: underline; color: #ff9933;}
.content>.ng>.right>.history>.history_box>.box_cont>li>div:nth-child(8){display: none; color: #669933; float: right; margin-right: 80px;}
.content>.ng>.right>.history>.history_box>.box_cont>li:nth-child(1)>div:nth-child(8){display: block;}

.content>.ng>.right>.history>.history_box>.box_cont>li.on>div:nth-child(7)>span{ text-decoration: none; margin-left: -10px; cursor: pointer; display: block; width: 80px; height: 30px; line-height: 30px; text-align: center; color: white; background: #ff9933;}

</style>