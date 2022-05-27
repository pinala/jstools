import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { name } from './package.json'
import commonjs from 'rollup-plugin-commonjs'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/lib')
}
export default [{
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
    // commonjs(),
    // nodeResolve(),
    typescript(),
    // babel({
    //   runtimeHelpers: true,
    //   exclude: 'node_modules/**',
    //   extensions: [...DEFAULT_EXTENSIONS, '.ts']
    // }),
    terser(),
  ],
}, {
  input: paths.input,
  output: [{
    name,
    file: path.join(paths.output, 'index.d.ts'),
    format: 'es'
  }],
  plugins: [
    dts(),
  ],
}]