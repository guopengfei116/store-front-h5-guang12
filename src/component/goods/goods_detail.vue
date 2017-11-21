<template>
  <article class="goods-detail">
    <!-- 轮播图 -->
    <mt-swipe :auto="10000">
      <!-- 我们这个商品缩略图是没有跳转连接的, 不需要router-link -->
      <mt-swipe-item v-for="item in lunbos" v-bind:key="item.src">
        <img v-bind:src="item.src">
      </mt-swipe-item>
    </mt-swipe>

  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{ goodsPrice.title }}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{ goodsPrice.market_price }}</s> <span>销售价: </span> <em>￥{{ goodsPrice.sell_price }}</em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <app-numbox v-bind:initVal="buyCount" @change="getTotal"></app-numbox>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" @click="addShopcart" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡, 利用value的值控制选取那个子元素 -->
      <mt-navbar v-model="navbarSelector">
			  <mt-tab-item id="commont">商品评论</mt-tab-item>
			  <mt-tab-item id="intro">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容, 利用value的值控制选取那个子元素 -->
      <mt-tab-container v-model="navbarSelector">
			  <mt-tab-container-item id="commont">
			    <p>内容1</p>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="intro">
			    <app-intro v-bind:id="id"></app-intro>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>

  </article>
</template>

<script>
import IntroComponent from './son/intro.vue';
import storage from '../../js/storage.js';

export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbos: [],
      goodsPrice: {},
      navbarSelector: 'commont',
      buyCount: 0
    };
  },

  methods: {
    // 获取商品缩略图
    getGoodsThumList() {
      this.axios.get(this.api.goodsT + this.id)
      .then( rsp => this.lunbos = rsp.data.message );
    },

    // 获取商品价格信息
    getGoodsPrice() {
      this.axios.get(this.api.goodsP + this.id)
      .then( rsp => this.goodsPrice = rsp.data.message[0] );
    },

    // 获取最新的购买数量, 并存储起来
    getTotal(total) {
      this.buyCount = total;
    },

    // 加入购物车
    addShopcart() {
      let oldBuyData = storage.get('goodsBuyData') || {};  // 取出旧的值
      oldBuyData[this.id] = this.buyCount;                 // 添加或修改商品的购买记录
      storage.set('goodsBuyData', oldBuyData);             // 把新的数据存起来
    }
  },

  created() {
    this.getGoodsThumList();
    this.getGoodsPrice();
  },

  components: {
    'app-intro': IntroComponent
  }
}
</script>

<style lang="less">
  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
  // 给轮播图加个高度
  .mint-swipe {
    height: 260px;
    background-color: white;
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: 260px;
    }
  }
</style>