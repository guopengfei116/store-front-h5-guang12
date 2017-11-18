<template>
    <article>
        <!-- 轮播图 -->
        <mt-swipe :auto="10000">
            <mt-swipe-item v-for="item in lunbos" v-bind:key="item.url">
                <a v-bind:href="item.url">
                    <img v-bind:src="item.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
    </article>
</template>

<script>
export default {
    data() {
        return {
            lunbos: []
        }
    },

    methods: {
        // 请求数据, 成功后把数据存储到lunbos中
        getLunbo() {
            this.axios.get('http://vue.studyit.io/api/getlunbo')
            .then( rep => this.lunbos = rep.data.message );
        }
    },

    // 组件初始化完毕后, 自动调用接口获取数据渲染轮播图
    created() {
        this.getLunbo();
    }
}
</script>

<style lang="less" scoped>
@height: 260px;
article {
    height: @height;
    img {
        height: @height;
    }
}
</style>
