<template>
  <div id="app">
    <label for="title">请输入标题：</label>
    <input id="title" type="text" />
    <panda-editor></panda-editor>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  padding-top: 15px;
}
</style>
