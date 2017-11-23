import storage from '../js/storage.js';

export default {

    // 定义状态, 相当于组件的data
    // 区别是这里的数据共享, 那都可以通过$store.state.属性名的方式使用
    state: {
        // 从localStorage中取出购买数据进行共享
        goodsBuyData: storage.get('goodsBuyData')
    },

    // 定义计算属性, 相当于组件的computed
    getters: {
        // 计算购买总数
        getBuyTotal(state) {
            // 先拿到每个商品数量, 然后使用reduce累加起来
            return Object.values(state.goodsBuyData).reduce((sum, v) => sum + v, 0);
        }
    },

    // 定义修改方法, 相当于组件的methods
    mutations: {
        // 修改单个商品的购买数量
        upBuyData(state, params) {
            // 拿到id与新数量, 修改goodsBuyData
            // 然后把修改后的goodsBuyData存储到本地storage
            state.goodsBuyData[params.id] = params.total;
            storage.set('goodsBuyData', state.goodsBuyData);
        }
    }
};

