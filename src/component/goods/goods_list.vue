<template>
  <article>
    <ul class="mui-table-view mui-grid-view">
      <!-- 商品详情 -->
      <li v-for="item in goodsList" v-bind:key="item.id"
       class="mui-table-view-cell mui-media mui-col-xs-6">
      	<router-link v-bind:to="{ name: 'gd', params: { id: item.id } }">
	        <div class="mui-card">
	          <!-- 商品图片 -->
	          <div class="mui-card-header">
	          	<img v-bind:src="item.img_url" alt="" />
	          </div>
	          <!-- 商品描述 -->
	          <div class="mui-card-footer ">
	            <p class="mui-ellipsis-2">{{ item.title }}</p>
	          </div>
	          <!-- 商品价格 -->
	          <div class="mui-card-content">
	            <p class="price">
	            	<span>￥{{ item.sell_price }}</span>
	            	<s>￥{{ item.market_price }}</s>
	            </p>
	            <p class="tip">
	            	<span>热卖中</span>
	            	<span>剩余{{ item.stock_quantity }}件</span>
	            </p>
	          </div>
	        </div>
        </router-link>
      </li>
    </ul>
    <!-- 加载更多 -->
    <button v-on:click="loadMore()"
      class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加载更多</button>
  </article>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      pageIndex: 1,
      isEmpty: false   // 后台数据是否为空
    };
  },

  methods: {
    // 获取商品列表, 需要一个pageindex查询字符串, 用来指定页码
    getGoodsList() {
      if(!this.isEmpty) {
        this.axios.get(`${this.api.goodsL}?pageindex=${this.pageIndex}`)
        .then((rsp) => {

          // 这里请求回来的数据使用...符号拆分得到每一个对象, 单独push到goodsList列表
          this.goodsList.push(...rsp.data.message);

          // 如果请求回来的数据为空, 那么下次就不要再请求了
          if(rsp.data.message.length == 0) {
            this.isEmpty = true;
          }
        });
      }
    },

    // 加载下一页数据
    loadMore() {
      this.pageIndex++;
      this.getGoodsList();
    }
  },

  created() {
    this.getGoodsList();
  }

};
</script>

<style lang="less" scoped>
  .goods-list {
  	.mui-card {
  		box-shadow: 0px 0px 4px rgba(0, 0, 0, .3);
  	}
  	.mui-card-header {
  		padding: 8px;
  		/*height: 100px;*/
  		img {
  			width: 100%;
  			height: 100%;
  		}
  	}
    .mui-card-content {
      text-align: center;
      .price {
        margin-bottom: 4px;
        color: #000;
        span {
          color: red;
        }
      }
      .tip {
        overflow: hidden;
        padding: 0 8px;
        font-size: 12px;
        span:first-child {
          float: left;
        }
        span:last-child {
          float: right;
        }
      }
    }
  }
</style>