// "use strict";

// const { resolve } = require("path");

// module.exports = {
//   entry: ["babel-polyfill", "./app/main"],
//   output: {
//     path: __dirname,
//     filename: "./public/bundle.js"
//   },
//   mode: "development",
//   context: __dirname,
//   devtool: "source-map",
//   resolve: {
//     extensions: [".js", ".jsx"]
//   },
//   module: {
//     rules: [
//       {
//         test: /jsx?$/,
//         include: resolve(__dirname, "./app"),
//         loader: "babel-loader"
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   }
// };

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: [
    "@babel/polyfill", // enables async-await
    "./app/main.js"
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
