import path from "node:path";
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"), // Use __dirname we defined above
    clean: true,
    publicPath: '/restaurant-page/',
  },
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    watchFiles: ["./src/template.html"],
    // Added static setting so dev server can see your public folder locally
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new CopyPlugin({
      patterns: [
        // This copies public/images into docs/images
        { from: "public", to: "" }, 
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        }
      },
    ],
  },
};