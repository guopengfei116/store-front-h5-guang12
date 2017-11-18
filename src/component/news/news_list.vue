<template>
    <ul>
        <li v-for="item in newsList" v-bind:key="item.id">
            <router-link v-bind="{ to: `/news/detail/${item.id}` }">
                <p>{{ item.zhaiyao }}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {

    data() {
        return {
            newsList: []
        };
    },

    methods: {
        // 获取新闻列表数据
        getNewsList() {
            this.axios.get(this.api.getNL)
            .then( rsp => this.newsList = rsp.data.message )
        }
    },

    // 上来就调用接口初始化数据
    created() {
        this.getNewsList();
    }
}
</script>

<style scoped>

</style>