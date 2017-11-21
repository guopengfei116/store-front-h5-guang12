<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" @click="sub">-</button>
        <input class="mui-input-numbox" type="number" v-model="val">
        <button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
    </div>
</template>

<script>
export default {
    props: [ 'initVal' ],

    data() {
        return {
            val: this.initVal || 0  // 优先使用父指定的默认值, 父不指定默认为0
        };
    },

    methods: {
        // 减减, 最小值为0
        sub() {
            this.val > 0 && this.val--;
        },
        
        // 加加, 最大值不限
        add() {
            this.val++;
        }
    },

    watch: {
        // 值发生变化就通过事件的方式传给父 
        val() {
            this.$emit('change', this.val);
        }
    }
}
</script>

<style scoped>

</style>