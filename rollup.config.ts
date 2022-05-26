import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { name } from './package.json'
import commonjs from 'rollup-plugin-commonjs'
import { DEFAULT_EXTENSIONS } from '@babel/core'
const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/lib')
}
const overrides = {
  compilerOptions: { declaration: true },
  // exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
  includes: ["src/index.ts"]
}
export default {
  input: paths.input,
  output: [{
    name,
    file: path.join(paths.output, 'index.js'),
    format: 'es'
  }, {
    name,
    file: path.join(paths.output, 'index.esm.js'),
    format: 'es'
  }],
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS, '.ts']
    })
  ],
}