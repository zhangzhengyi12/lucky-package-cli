<template>
  <div>
    你的试验场
    <input type="text" v-model="value" />
  </div>
</template>

<script>
// 示例组件
// 注意大小写
export default {
  name: 'LuckyInput',
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
