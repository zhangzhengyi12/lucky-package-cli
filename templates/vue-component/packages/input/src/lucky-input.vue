<template>
  <div>
    你的试验场
    <input type="text" :class="size" v-model="value" />
  </div>
</template>

<script>
// 示例组件
// 注意大小写
export default {
  name: 'LuckyInput',
  props: {
    size: String
  },
  data () {
    return {
      value: 'AABB'
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  color: #333;
  font-size: 14px;
}
</style>
