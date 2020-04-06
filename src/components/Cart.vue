<template>
  <div class="content">
    <div class="ng">
      <div class="now">
        <img :src="pic.now" />
      </div>
      <div class="box">
        <div class="box_title">
          <div>
            <span>
              <input type="checkbox" id="all" class="all" />
              <label for="all">
                <span>全选</span>
              </label>
            </span>
          </div>
          <div>商品信息</div>
          <div>单价</div>
          <div>数量</div>
          <div>小计</div>
          <div>操作</div>
        </div>
        <ul class="box_cont">
          <li v-for="item in selects" :key="item.id">
            <div class="checkbox">
              <span>
                <input type="checkbox" id="checkbox1" class="check" />
                <label for="checkbox1"></label>
              </span>
            </div>
            <div>
              <a href="pro_details.html">
                <img :src="item.cover" />
              </a>
              <div>
                <p>
                  <a href="pro_details.html">{{item.title}}</a>
                </p>
                <span>{{item.spec}}</span>
              </div>
            </div>
            <div class="pri">￥{{item.price}}</div>
            <div class="amount">
              <span>
                <i class="reduce">-</i>
                <input type="text" maxlength="2" :value="item.number" />
                <i class="add">+</i>
              </span>
            </div>
            <div class="tot">￥{{item.price * item.number}}</div>
            <div>
              <a href="javascript:;" class="remove">删除</a>
              <a href="javascript:;">移入收藏夹</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="box_foot">
        <div class="foot_l">
          已选商品
          <span id="shuliang">0</span>件
        </div>
        <div class="foot_r">
          <span>运费：￥0.00</span>
          <span>合计：</span>
          <span class="tol">￥0.00</span>
          <router-link to="confirm">结 算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pic: {
        now: require("@/assets/shop_cart/now.png")
      },
      selects: [
        {
          id: "",
          title: "温碧泉盈润保湿洁面乳150g 深层清洁补水洗面奶",
          price: "299.00",
          number: 1,
          cover: require("@/assets/shop_cart/pro1.png"),
          spec: "规格：150g"
        }
      ]
    };
  }
};
</script>
<style scoped>
.content {
  overflow: hidden;
}
.content > .ng {
  margin-top: 30px;
}
.content > .ng > .box {
  border: 1px solid #cccccc;
}
.content > .ng > .box > .box_title {
  overflow: hidden;
  border-bottom: 1px solid #cccccc;
  background: #efefef;
}
.content > .ng > .box > .box_title > div {
  text-align: center;
  float: left;
  font-size: 16px;
  color: #333333;
  line-height: 58px;
  margin-right: 50px;
}
.content > .ng > .box > .box_title > div > span {
  display: block;
  position: relative;
  float: left;
  cursor: pointer;
  margin-left: 18px;
}
.content > .ng > .box > .box_title > div > span > label {
  display: block;
  width: 70px;
  height: 20px;
  position: absolute;
  z-index: 10;
  background: url(../assets/shop_cart/draw_box.png) no-repeat;
  top: 18px;
  cursor: pointer;
}
.content > .ng > .box > .box_title > div > span > input {
  visibility: hidden;
}
.content
  > .ng
  > .box
  > .box_title
  > div
  > span
  > input[type="checkbox"]:checked
  + label {
  position: absolute;
  background: url(../assets/shop_cart/draw.png) no-repeat 0 0;
}
.content > .ng > .box > .box_title > div > span > label > span {
  margin-left: 25px;
  float: left;
  font-size: 16px;
  color: #333333;
  margin-top: -18px;
}
.content > .ng > .box > .box_title > div:nth-child(1) {
  width: 90px;
  margin-right: 15px;
}
.content > .ng > .box > .box_title > div:nth-child(2) {
  width: 410px;
}
.content > .ng > .box > .box_title > div:nth-child(3) {
  width: 100px;
}
.content > .ng > .box > .box_title > div:nth-child(4) {
  width: 110px;
}
.content > .ng > .box > .box_title > div:nth-child(5) {
  width: 110px;
}
.content > .ng > .box > .box_title > div:nth-child(6) {
  width: 110px;
}
.content > .ng > .box > .box_cont {
  overflow: hidden;
  background: #ffffff;
  margin-bottom: -1px;
}
.content > .ng > .box > .box_cont > li {
  overflow: hidden;
  border-bottom: 1px solid #cccccc;
}
.content > .ng > .box > .box_cont > li > div {
  text-align: center;
  float: left;
  font-size: 14px;
  color: #333333;
  margin-right: 50px;
}
.content > .ng > .box > .box_cont > li > div > span {
  display: block;
  position: relative;
  float: left;
  margin-left: 18px;
}
.content > .ng > .box > .box_cont > li > div > span > label {
  display: block;
  width: 70px;
  height: 20px;
  position: absolute;
  z-index: 10;
  background: url(../assets/shop_cart/draw_box.png) no-repeat;
  top: 55px;
  cursor: pointer;
}
.content > .ng > .box > .box_cont > li > div > span > input {
  visibility: hidden;
}
.content
  > .ng
  > .box
  > .box_cont
  > li
  > div
  > span
  > input[type="checkbox"]:checked
  + label {
  position: absolute;
  background: url(../assets/shop_cart/draw.png) no-repeat 0 0;
}
.content > .ng > .box > .box_cont > li > div:nth-child(1) {
  width: 90px;
  margin-right: 15px;
}
.content > .ng > .box > .box_cont > li > div:nth-child(2) {
  width: 410px;
}
.content > .ng > .box > .box_cont > li > div:nth-child(2) > a > img {
  margin-bottom: 22px;
  display: block;
  float: left;
  margin-top: 22px;
  margin-right: 18px;
}
.content > .ng > .box > .box_cont > li > div:nth-child(2) > div {
  float: left;
}
.content > .ng > .box > .box_cont > li > div:nth-child(2) > div > p {
  width: 265px;
  line-height: 24px;
  text-align: left;
  margin-top: 35px;
}
.content > .ng > .box > .box_cont > li > div:nth-child(2) > div > p > a {
  color: #333333;
}
.content > .ng > .box > .box_cont > li > div:nth-child(2) > div > p > a:hover {
  color: #339933;
}
.content > .ng > .box > .box_cont > li > div:nth-child(2) > div > span {
  display: block;
  line-height: 30px;
  text-align: left;
  color: #666666;
}
.content > .ng > .box > .box_cont > li > div:nth-child(3) {
  width: 100px;
  padding-top: 55px;
}
.content > .ng > .box > .box_cont > li > div:nth-child(4) {
  width: 110px;
}
.content > .ng > .box > .box_cont > li > div:nth-child(5) {
  width: 110px;
  padding-top: 55px;
  color: #ff9900;
}
.content > .ng > .box > .box_cont > li > div:nth-child(6) {
  width: 110px;
  padding-top: 50px;
}
.content > .ng > .box > .box_cont > li > div:nth-child(6) > a {
  display: block;
  line-height: 20px;
  color: #333333;
}
.content > .ng > .box > .box_cont > li > div:nth-child(6) > a:hover {
  color: #339933;
}
.content > .ng > .box > .box_cont > li > .amount > span {
  margin-top: 60px;
  display: block;
}
.content > .ng > .box > .box_cont > li > .amount > span > i {
  line-height: 18px;
  text-align: center;
  float: left;
  width: 18px;
  height: 18px;
  border: 1px solid #cccccc;
  cursor: pointer;
}
.content > .ng > .box > .box_cont > li > .amount > span > input {
  float: left;
  visibility: visible;
  border: none;
  width: 28px;
  height: 18px;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
  text-align: center;
  color: #666666;
}
.content > .ng > .box_foot {
  overflow: hidden;
  margin-top: 16px;
  border: 1px solid #cccccc;
  background: #efefef;
}
.content > .ng > .box_foot > .foot_l {
  float: left;
  font-size: 16px;
  line-height: 78px;
  margin-left: 20px;
}
.content > .ng > .box_foot > .foot_l > span {
  font-size: 20px;
  color: #ff9900;
}
.content > .ng > .box_foot > .foot_r {
  line-height: 78px;
  float: right;
}
.content > .ng > .box_foot > .foot_r > span:nth-child(1) {
  font-size: 14px;
  margin-right: 15px;
}
.content > .ng > .box_foot > .foot_r > span:nth-child(2) {
  font-size: 16px;
}
.content > .ng > .box_foot > .foot_r > span:nth-child(3) {
  font-size: 24px;
  color: #ff9900;
  margin-right: 20px;
}
.content > .ng > .box_foot > .foot_r > a {
  display: block;
  float: right;
  width: 148px;
  line-height: 83px;
  text-align: center;
  font-size: 36px;
  background: #ff9933;
  color: white;
}
</style>