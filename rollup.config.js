import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import alias from '@rollup/plugin-alias';
const extensions = [".ts"];

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      format: "umd",
      file: "dist/index.js",
      name: "vueUse",
    },
    {
      format: "esm",
      file: "dist/index.esm.js",
    },
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: "bundled", extensions, }),
    alias({
      entries: [
        { find: '@/', replacement: './src/' },
      ]
    })
    // terser()
  ],
});
