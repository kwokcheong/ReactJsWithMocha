require("@babel/polyfill");
require("@babel/register")({
    ignore: [
      /node_modules\/(?!(ol)\/)/
    ],

    presets : ["react-app"],
    plugins : [
        "@babel/plugin-transform-modules-commonjs",
        "inline-react-svg",
    ],
    extensions: [".es6", ".es", ".jsx", ".js", ".mjs"],

    // Setting this to false will disable the cache.
    cache: false,
  });
