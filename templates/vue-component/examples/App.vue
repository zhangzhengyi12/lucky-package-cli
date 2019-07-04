<template>
  <div id="app">
    <!-- 你的试验场 -->
    <lucky-input />
  </div>
</template>

<script>
import LuckyInput from '../packages/lucky-input'

export default {
  name: 'app',
  components: { LuckyInput }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
