const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    //config就是webpack大对象
    config.resolve.alias
      .set("@/", path.resolve(__dirname, "src/"))
      .set("~/", path.resolve(__dirname));
  },
};
