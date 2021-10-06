const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:8082/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devtool: "source-map",
  devServer: {
    port: 8082,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "root", // NB: Vi gir appen et navn
      filename: "remoteEntry.js",
      // NB: Vi setter opp applikasjoner vi skal bruke/importere som "remotes"
      remotes: {
        navigation: "navigation@http://localhost:8080/remoteEntry.js",
        productlist: "productlist@http://localhost:8081/remoteEntry.js",
      },
      /**
       * NB:
       * Vi eksponerer/eksporterer komponenter og state.
       * Kan importeres som "root/atoms", "root/selectors" og "root/item"
       */
      exposes: {
        "./atoms": "./src/state/atoms",
        "./selectors": "./src/state/selectors",
        "./item": "./src/types/Item",
      },
      // NB: Alle libs vi vil dele på tvers av appene
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        recoil: {
          singleton: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
