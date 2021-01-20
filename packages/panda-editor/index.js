import pandaEditor from "./src/index.vue";

pandaEditor.install = Vue => {
  Vue.component(pandaEditor.name, pandaEditor);
};

export default pandaEditor;
