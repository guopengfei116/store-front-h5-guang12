<template>
    <article>
        <!-- 使用mui的卡片视图布局, 注意: 卡片视图都是flex, 这里把他改成block -->
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>{{ newsDetail.title }}</h4>
                <p class="mui-ellipsis">
                    <span>创建时间: {{ newsDetail.add_time | date }}</span>
                    <span>点击数: {{ newsDetail.click }}</span>
                </p>
            </div>
            <!-- content内容中含有html标签, 要让它正常展示, 必须使用v-html -->
            <div class="mui-card-footer" v-html="newsDetail.content"></div>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            newsDetail: {}
        };
    },

    methods: {
        // 获取新闻详情, 注意这里接口返回的是一个数组, 我们需要通过下标那新闻详情对象
        getNewsDetail() {
            this.axios.get(this.api.getND + this.$route.params.id)
            .then( rsp => this.newsDetail = rsp.data.message[0] )
        }
    },

    created() {
        this.getNewsDetail();
    }
}
</script>

<style scoped>
article {
    overflow: hidden;
}
.mui-card-header, .mui-card-footer {
    display: block;
}
</style>