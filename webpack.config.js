const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development", //开发环境
  entry: path.resolve(__dirname, "./src/main.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/, // ts or tsx
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: ["\\.vue$"], // 编译.vue文件中的ts
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      title: "Admin Webpack",
    }),
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, "./dist"),
    port: 8080,
    // publicPath: "/"
    static: {
      directory: path.join(__dirname, "publick"),
    },
  },
};
