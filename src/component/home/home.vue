<template>
    <article>
        <!-- 轮播图 -->
        <mt-swipe :auto="10000">
            <mt-swipe-item v-for="item in lunbos" v-bind:key="item.url">
                <router-link v-bind:to="item.url">
                    <img v-bind:src="item.img">
                </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">首页</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/news/list">
                    <span class="mui-icon mui-icon-chat"></span>
                    <div class="mui-media-body">热点新闻</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/photo/list/0">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">关于我们</div>
                </router-link>
            </li>
        </ul>
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
            this.axios.get(this.api.getLunbo)
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
