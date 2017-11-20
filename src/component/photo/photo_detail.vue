<template>
    <article>
        <!-- 使用mui的卡片视图布局, 注意: 卡片视图都是flex, 这里把他改成block -->
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>{{ photoDetail.title }}</h4>
                <p class="mui-ellipsis">
                    <span>创建时间: {{ photoDetail.add_time | date }}</span>
                    <span>点击数: {{ photoDetail.click }}</span>
                </p>
            </div>
            <!-- 使用mui的图文表格布局 -->
            <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4"
                    v-for="item in photoThumList" v-bind:key="item.src">
                    <img class="mui-media-object" v-bind:src="item.src" v-preview="item.src">
                </li>
		    </ul>
            <!-- content内容中含有html标签, 要让它正常展示, 必须使用v-html -->
            <div class="mui-card-footer">{{ photoDetail.content }}</div>
        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoDetail: {},
            photoThumList: []
        };
    },

    methods: {
        // 获取图片详情
        getPhotoDetail() {
            this.axios.get(this.api.photoD + this.id)
            .then( rsp => this.photoDetail = rsp.data.message[0] )
        },

        // 获取图片缩略图
        getphotoThumList() {
            this.axios.get(this.api.photoT + this.id)
            .then( rsp => this.photoThumList = rsp.data.message )
        }
    },

    created() {
        this.getPhotoDetail();
        this.getphotoThumList();
    }
}
</script>

<style scoped>
.mui-card-header, .mui-card-footer {
    display: block;
}
.mui-card h4 {
    font-size: 14px;
}
</style>