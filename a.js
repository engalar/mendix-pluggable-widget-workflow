import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'node_modules/react-draggable/build/cjs/cjs.js',
  output: {
    dir: 'output',
    format: 'amd'
  },
  plugins: [commonjs({
    ignore: id => [/^mendix($|\/)/, /^react($|\/)/, /^react-dom($|\/)/, /^big.js$/].some(value => new RegExp(value).test(id))
  })]
};