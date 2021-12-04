
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";


const extensions = ['.js', '.ts'];


export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      format: 'umd',
      file: 'dist/index.js',
    },
    {
      format: 'esm',
      file: 'dist/index.esm.js'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(/*{ plugin options }*/),
    babel({ babelHelpers: 'bundled', extensions }),
    // terser()
  ]
});
