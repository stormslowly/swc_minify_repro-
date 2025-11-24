// Rspack configuration for TypeScript project
const path = require("path");
const rspack = require("@rspack/core");

module.exports = {
  // 定义项目的入口文件
  entry: {
    main: "./src/main.ts",
  },

  // 定义输出配置
  output: {
    // 输出目录
    path: path.resolve(__dirname, "dist"),
    // 输出文件名格式
    filename: "[name].js",
    // 清理输出目录
    clean: true,
    // 配置模块导出格式
    library: {
      type: "commonjs",
    },
  },

  // 模块解析配置
  resolve: {
    // 支持的文件扩展名
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    // 别名配置，方便导入
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // 模块规则配置
  module: {
    rules: [
      {
        // 处理TypeScript文件
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: false,
                  decorators: true,
                },
                target: "es6",
                loose: false,
                minify: {
                  compress: false,
                  mangle: false,
                },
              },
              sourceMaps: true,
            },
          },
        ],
      },
    ],
  },

  // 开发工具配置
  devtool: "source-map",
  optimization: {
    moduleIds: "named",
    minimize: true,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        minimizerOptions: {
          minify: true,
          mangle: false,
          ecma: 2016,
          beautify: false,
          compress: false,
        },
      }),
    ],
  },
  // 模式配置
  mode: "development",
};
