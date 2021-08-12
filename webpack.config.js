const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".png"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new WebpackPwaManifestPlugin({
      //   name: "Petgram - Tu app de ftoos de mascotas",
      //   shortname: "Petgram 🐶",
      //   description:
      //     "Con Petgram puedes encontrar fotos de animales domésticos my fácilmente",
      //   background_color: "#fff",
      //   theme_color: "#b1a",
      //   icons: [
      //     {
      //       src: path.resolve("src/assets/icon.png"),
      //       sizes: [96, 128, 192, 256, 384, 512],
      //     },
      //   ],
      // }),
      filename: "manifest.webmanifest",
      name: "IntaPlatzi",
      description:
        "Tu app preferida para encontrar esas mascotas que tanto te encantan",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      scope: "/",
      background_color: "#456BD9",
      theme_color: "#456BD9",
      // icons: [
      //   {
      //     src: path.resolve("src/assets/icon.png"),
      //     size: "1024x1024",
      //     purpose: "maskable",
      //     sizes: [96, 128, 192, 256, 384, 512],
      //     destination: path.join("Icons"),
      //     ios: true,
      //   },
      // ],
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          size: "192x192",
          purpose: "any maskable",
          type: "image/png",
        },
        {
          src: path.resolve("src/assets/icon.png"),
          size: "256x256",
          purpose: "any maskable",
          type: "image/png",
        },
        {
          src: path.resolve("src/assets/icon.png"),
          size: "384x384",
          purpose: "any maskable",
          type: "image/png",
        },
        {
          src: path.resolve("src/assets/icon.png"),
          size: "512x512",
          purpose: "any maskable",
          type: "image/png",
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp("https://petgram-danielgzp.vercel.app/"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        // Test declara que extensión de archivos aplicara el loader
        test: /\.(js|jsx|png)$/,
        // Use es un arreglo u objeto donde dices que loader aplicaras
        use: {
          loader: "babel-loader",
        },
        // Exclude permite omitir archivos o carpetas especificas
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 3000,
    open: true,
  },
};
