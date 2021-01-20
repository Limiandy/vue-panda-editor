<template>
  <div class="edit-content">
    <toolbar></toolbar>
    <div
      id="editor"
      class="area"
      contenteditable="true"
      spellcheck="false"
      @keydown.stop="agent_keyup($event)"
      @focus="_focus()"
      @blur="_blur()"
    ></div>
  </div>
</template>

<script>
import Toolbar from "./toolbar/index.vue";
import execCommand from "./execCommand";
export default {
  name: "panda-editor",
  components: { Toolbar },
  data() {
    return {};
  },
  mounted() {
    /**
     * 1. 获取选区
     * 2. 获取指针
     * 4. 回车事件的浏览器兼容处理，统一为插入 p 元素
     * 5. 默认事件劫持代理
     * 6. 用户行为劫持代理
     */
    /**
     * API 参考：
     * range：https://developer.mozilla.org/zh-CN/docs/Web/API/Range
     * selection：https://developer.mozilla.org/zh-CN/docs/Web/API/Selection#Browser_compatibility
     */
    /**
     * 方法参考：
     * document.createRange()
     * window.getSelection()
     * appendChild()
     * insertBefore()
     * insertBefore() + nextSibling
     * replaceChild()
     */
    /**
     * 需要代理的用户行为
     * 1. 用户单击文本域 -> 第一次单击时，插入 p 标签，并移动选区到 p 标签，插入光标
     * 2. 用户按下enter键 -> 换行并插入新的 p 标签，移动选区，插入光标
     */
    /**
     * 遇到的问题：
     * 1. 动态添加的节点样式指定不生效的问题 已解决，问题原因：使用了scoped
     */
    this.init();
  },
  methods: {
    /**
     * 用户单击行为劫持
     * 1. 当用户单击时，判断文本域中是否有节点，如果有，什么也不做，如果没有则添加一个p元素
     */
    /**
     * 用户按键行为劫持
     * 1. 用户按下 return/enter 键，浏览器默认会添加 p || div || br ，统一处理，插入 p 标签
     */
    agent_keyup(e) {
      const keyCode = e.keyCode;
      console.log(keyCode);
      /**
       * 劫持 return/enter 按键
       */
      if (keyCode === 13) {
        e.preventDefault();
        execCommand("insertParagraph");
        return false;
      }
      /**
       * 劫持退格键 如果是最后一个 p 元素，不能删除最后的这个 p 元素
       * 实现方法：
       * 如果按下 退格键后，文本域中没有任何元素了，则向文本域中重新添加一个 p 节点
       */
      if (keyCode === 8) {
        e.preventDefault();
        console.log(e);
        return false;
      }
      /**
       * 劫持 Tab 键
       */
      if (keyCode === 9) {
        e.preventDefault();
        return false;
      }
    },
    _focus() {
      console.log("focus");
    },
    _blur() {
      console.log("blur");
    },
    init() {
      const edit = document.querySelector("#editor");
      setTimeout(() => {
        edit.focus();
        execCommand("insertParagraph");
      }, 0);
    }
  }
};
</script>

<style lang="scss">
.edit-content {
  width: 100%;
  height: 100%;
}
.area {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  width: 100%;
  height: calc(100% - 40px);
  padding: 40px 40px 80px;
  &:focus {
    outline: none;
  }
  p {
    margin: 0 0 25px;
    word-break: break-word;
  }
}
</style>
