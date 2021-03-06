/* vue.config.js */
const configs = require("./config");

// 用于做相应的 merge 处理
const merge = require("webpack-merge");
// 根据环境判断使用哪份配置
const cfgObj = {
  production: configs.build.env,
  development: configs.dev.env,
  stage: configs.stage.env
};
const cfg = cfgObj[process.env.NODE_ENV];
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  baseUrl: "ga",
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      let name = "process.env";

      // 使用 merge 保证原始值不变
      args[0][name] = merge(args[0][name], cfg);

      return args;
    });
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_lib", resolve("src/common"))
      .set("_com", resolve("src/components"))
      .set("_img", resolve("src/images"));
  }
};
