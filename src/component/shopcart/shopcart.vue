<template>
  <article class="shopcart-list">

    <!-- 商品列表 -->
    <div class="goods" v-for="item in buyGoodsList" v-bind:key="item.id">
      <mt-switch class="switch" v-model="item.isSelected"></mt-switch> 
      <img class="img" v-bind:src="item.thumb_path">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{ item.title }}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{ item.sell_price }}</li>
            <li>
              <!-- 公共的数字输入框, 修改商品数量需要拿到id与子传给父的值, 所以这里需要使用()传参, $event就代表子传父的数据 -->
              <app-numbox v-bind:initVal="goodsBuyData[item.id]" @change="modifyBuyData(item.id, $event)"></app-numbox>
            </li>
            <li>
              <a href="javascript:void(0)" @click="delGoods(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品{{ buyTotal }}件,总价:￥品{{ buyPriceTotal }}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary">付 款</mt-button>
      </div>
    </div>

  </article>
</template>

<script>
import storage from '../../js/storage.js';

export default {
  data() {
    return {
      goodsBuyData: storage.get('goodsBuyData'),
      buyGoodsList: []
    }
  },

  methods: {
    // 获取购物车列表数据
    getBuyGoodsList() {
      let ids = Object.keys(storage.get('goodsBuyData')).join(',');
      this.axios.get(this.api.shopcL + ids)
      .then( 
        rsp => {
          // 给每个商品补充一个isSelected属性, 默认值为true
          rsp.data.message.forEach(goods => goods.isSelected = true);
          this.buyGoodsList = rsp.data.message;
        }
      );
    },

    // 修改购买数据
    modifyBuyData(id, val) {
      this.goodsBuyData[id] = val;
      console.log(this.goodsBuyData)
    },

    // 删除商品
    delGoods(id) {
      this.$delete(this.goodsBuyData, id);
      this.buyGoodsList = this.buyGoodsList.filter(v => v.id != id);
    }
  },

  created() {
    this.getBuyGoodsList();
  },

  computed: {
    // 总数
    buyTotal() {
      return this.buyGoodsList.reduce((sum, goods) => {
        // reduce方法每次把上一次的sum结果传递进来, 供我们继续累加,
        // 如果商品为选中状态我们就累加, 否则原物传递到下一次计算
        return goods.isSelected? sum + this.goodsBuyData[goods.id] : sum
      }, 0);
    },

    // 总价
    buyPriceTotal() {
      return this.buyGoodsList.reduce((sum, goods) => {
        // reduce方法每次把上一次的sum结果传递进来, 供我们继续累加,
        // 如果商品为选中状态我们就累加, 否则原物传递到下一次计算
        return goods.isSelected? sum + this.goodsBuyData[goods.id] * goods.sell_price : sum
      }, 0);
    }
  },

  watch: {
    // 监听商品数量的变化, 实时存储的本地storage
    goodsBuyData: {
      handler() {
        storage.set('goodsBuyData', this.goodsBuyData);
      },
      // 深度监听对象的变化, 这样vue每次会比较子属性的值
      deep: true
    }
  }
};
</script>

<style lang="less">
  .shopcart-list {
    .goods {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      height: 102px;
      display: flex;
      padding: 5px;
      .switch {
        flex: 0 0 52px;
      }
      .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
      }
      .inforight {
        margin-left: 5px;
        flex: 1;
      }
      .inforight ul {
        padding-left: 0px;
      }
      .inforight li {
        list-style: none;
        display: inline-block;
      }
      .inforight h4 {
        color: #0094ff;
        font-size: 14px;
      }
      .bottom li:first-child {
        color: red;
        margin-right: 5px;
      }
      .bottom li:last-child {
        margin-left: 5px;
      }
    }
    .total {
      height: 84px;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 5px 14px;
      ul {
		    padding-left: 0px;
		    margin: 14px 0;
		    li {
		      list-style: none;
		      font-size: 14px;
		    }
		  }
		  &_val {
		  	flex: 1;
		  }
		  &_btn {
		  	flex: 0 0 60px;
	      margin: 18px 0 0 0;
		  }
    }
  }
</style>
