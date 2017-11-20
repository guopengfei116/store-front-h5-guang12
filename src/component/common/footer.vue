<template>
    <footer>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                <span class="mui-tab-label">商品购买</span>
            </router-link>
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
        <i></i>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
i {
    display: block;
    height: 50px;
}
</style>