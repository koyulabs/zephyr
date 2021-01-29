import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import babel from '@rollup/plugin-babel';

import packageJson from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      // sourcemap: true
    }
  ],
  plugins: [
    external(),
    peerDepsExternal(),
    resolve(),
    typescript(),
    babel({
      extensions: [".js", ".jsx", ".ts", "tsx"],
      babelHelpers: "runtime",
      exclude: '**/node_modules/**',
      plugins: [['@babel/transform-runtime']]
    }),
    commonjs()
  ],
  external: Object.keys(packageJson.peerDependencies || {})
};