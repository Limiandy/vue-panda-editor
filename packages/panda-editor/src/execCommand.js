/**
 * execCommand 指令集，document.execCommand 指令集已废弃
 * aCommandName <命令名> DOMString
 * aShowDefaultUI <是否展示用户界面> Boolean
 * aValueArgument <可选参数，例如，图像上传的URL地址> null
 */

const execCommand = function(aCommandName, aShowDefaultUI, aValueArgument) {
  aShowDefaultUI === true ? aShowDefaultUI : false;
  aValueArgument ? aValueArgument : null;
  const commandName = getCommand(aCommandName);
  if (!commandName) {
    return false;
  }
  const key = Object.keys(methods).filter(item => item === commandName)[0];
  methods[key]();
};

const getCommand = function(commandName) {
  const commands = [
    "backColor",
    "bold",
    "ClearAuthenticationCache",
    "contentReadOnly",
    "copy",
    "createLink",
    "insertParagraph"
  ];
  const isCommand = commands.filter(item => commandName === item)[0];
  if (!isCommand) {
    return false;
  }
  return isCommand;
};

const methods = {
  backColor: function() {},
  /**
   * 在编辑器根节点下，插入p元素
   * 获得选区与光标，如果光标不在根节点下，调整光标到根节点下最后位置，插入元素
   */
  insertParagraph: function() {
    const selection = getSelection();
    const range = selection.getRangeAt(0);
    const root = document.querySelector("#editor");
    let node = selection.focusNode;
    while (node.parentNode !== document.documentElement) {
      if (node === root) {
        break;
      } else {
        node = node.parentNode;
      }
    }
    if (node.lastChild) {
      range.selectNode(node.lastChild);
    }
    range.collapse();
    const p = document.createElement("p");
    p.innerHTML = "<br>";
    range.insertNode(p);
    range.setStart(p, 0);
    range.setEnd(p, 0);
  }
};

export default execCommand;
