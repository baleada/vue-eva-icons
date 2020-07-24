import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

const plugins = [
  vue(),
  babel({
    exclude: 'node_modules/**'
  }),
  resolve(),
]

export default [
  {
    input: 'src/index.js',
    output: { dir: 'lib', format: 'esm' },
    plugins,
  },
]
