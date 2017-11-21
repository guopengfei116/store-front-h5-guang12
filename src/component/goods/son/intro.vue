<template>
    <!-- 使用mui的卡片视图进行布局 -->
    <div class="mui-card">
        <div class="mui-card-header">{{ intro.title }}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" v-html="intro.content"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'id' ],

    data() {
        return {
            intro: {}
        };
    },

    methods: {
        // 获取图文介绍, 但是需要由父亲告诉我id
        getIntro() {
            this.axios.get(this.api.goodsD + this.id)
            .then( rsp => this.intro = rsp.data.message[0] );
        }
    },

    created() {
        this.getIntro();
    }
}
</script>

<style scoped>

</style>