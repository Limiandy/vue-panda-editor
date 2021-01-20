<template>
  <transition name="fade">
    <div class="pop" :class="posn" v-show="show">{{ text }}</div>
  </transition>
</template>

<script>
export default {
  name: "toolbar-pop",
  props: ["text", "show", "pos"],
  computed: {
    posn() {
      if (this.pos === "right") {
        return "right";
      }
      if (this.pos === "top") {
        return "top";
      }
      if (this.pos === "center") {
        return "center";
      }
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./keyframes.css";
.pop {
  position: absolute;
  z-index: 100;
  padding: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  font-weight: 400;
  border-radius: 5px;
}
.right {
  top: 2px;
  left: calc(100% + 16px);
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 5px solid rgba(0, 0, 0, 0.8);
    border-bottom: 5px solid transparent;
    position: absolute;
    top: 12px;
    left: -5px;
  }
}
.top {
  bottom: calc(100% + 10px);
  left: -35%;
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 100%;
    left: 40%;
  }
}
.center {
  bottom: calc(100% + 10px);
  left: -3px;
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 100%;
    left: 40%;
  }
}
</style>
