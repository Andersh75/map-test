import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import replace from "rollup-plugin-replace"
// import scss from "rollup-plugin-scss"

export default {
  input: `./src/index.js`,
  output: {
    file: `./public/bundle.js`,
    name: `MyModule`,
    format: `iife`,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(`production`),
    }),
    resolve(),
    commonjs(),
    // scss(),
  ],
}
