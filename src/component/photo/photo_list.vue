<template>
    <article>
        <!-- 使用mui的列表布局 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <router-link v-bind:to="{ name: 'pl', params: { id: 0 } }">全部</router-link>
            </li>
            <li v-for="item in photoCategoryList" v-bind:key="item.id"
                class="mui-table-view-cell">
                <router-link v-bind:to="{ name: 'pl', params: { id: item.id } }">{{ item.title }}</router-link>    
            </li>
        </ul>

        <!-- 使用mui的卡片视图布局 -->
        <div class="mui-card" v-for="item in photoList" v-bind:key="item.id">
            <router-link v-bind:to="{ name: 'pd', params: { id: item.id } }">
                <div class="mui-card-header mui-card-media" v-bind="{ style: `height:40vw;background-image:url(${item.img_url})` }"></div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>{{ item.title }}</p>
                        <p style="color: #333;">{{ item.zhaiyao }}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            photoCategoryList: [],
            photoList: []
        };
    },

    methods: {
        // 获取图片分类列表
        getPhotoCategoryList() {
            this.axios.get(this.api.photoC)
            .then( rsp => this.photoCategoryList = rsp.data.message );
        },

        // 获取图片列表, 需要使用分类ID来获取指定的图片列表
        getPhotoList() {
            this.axios.get(this.api.photoL + this.$route.params.id)
            .then( rsp => this.photoList = rsp.data.message );
        }
    },

    // 在组件初始化完毕后执行一次
    created() {
        this.getPhotoCategoryList();
        this.getPhotoList();
    },

    watch: {

        // 监听url的变化, 变化后拿到新的id, 
        // 调用接口发送请求修改photoList数据
        $route() {
            this.getPhotoList();
        }
    }
}
</script>

<style lang="less" scoped>
.mui-table-view {
    overflow: hidden;
    li {
        float: left;
        color: deepskyblue;
    }
}

.mui-card-header, .mui-card-header {
    display: block;
}
</style>