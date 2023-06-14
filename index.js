const path = require("path");

module.exports = (options = {}) => ({
  name: "vuepress-plugin-code-copy",
  define() {
    const {
      selector = 'div[class*="language-"] pre',
      copyText = "Copy code",
      tip: { time = 3000, content = "copy success", title = "Tips", width = 270 } = {},
      change,
      visibleTip = true,
    } = options;
    return {
      selector,
      copyText,
      time,
      content,
      title,
      width,
      change,
      visibleTip,
    };
  },
  clientRootMixin: path.resolve(__dirname, "clientRootMixin.js"),
  enhanceAppFiles: [path.resolve(__dirname, "appFile.js")],
});
