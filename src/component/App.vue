<template>
  <main>
      <p>{{ msg }}</p>
  </main>
</template>

<script>
// 这里vue要求我们对外暴漏一个组件的配置项
// 这里因为template已经在上面独立编写了,vue-loader到时候会帮我们处理,所以配置项中就不用写template了
export default {
    data() {
        return {
            msg: '测试vue文件是否可用'
        }
    }
}
</script>

<style>
p {
    font-size: 30px;
    color: red;
}
</style>
