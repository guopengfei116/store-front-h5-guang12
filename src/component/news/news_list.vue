<template>
    <article>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" 
                v-for="item in newsList" v-bind:key="item.id">
                <router-link v-bind="{ to: `/news/detail/${item.id}` }">
                    <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
                    <div class="mui-media-body">
                        <h4 class="mui-ellipsis">{{ item.title }}</h4>
                        <p class="mui-ellipsis">
                            <span>创建时间: {{ item.add_time | date }}</span>
                            <span>点击数: {{ item.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </article>
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