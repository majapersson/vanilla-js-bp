import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/scripts/index.js",
  output: {
    file: "public/assets/scripts/index.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs()
  ]
};
