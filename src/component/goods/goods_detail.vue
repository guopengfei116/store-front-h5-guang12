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
          <div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus">-</button>
          	<input class="mui-input-numbox" type="number">
          	<button class="mui-btn mui-btn-numbox-plus">+</button>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		    <mt-navbar value="tab-container2">
			  <mt-tab-item id="tab-container1">商品评论</mt-tab-item>
			  <mt-tab-item id="tab-container2">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
		    <mt-tab-container value="tab-container2">
			  <mt-tab-container-item id="tab-container1">
			    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>

  </article>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbos: [],
      goodsPrice: {}
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
    }
  },

  created() {
    this.getGoodsThumList();
    this.getGoodsPrice();
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