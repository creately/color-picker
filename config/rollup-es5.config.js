import sourcemaps from 'rollup-plugin-sourcemaps';

const pkg = require('../package.json');

export default {
  input: `./dist/ngx-color-picker.js`,
  output: {
    file: `${pkg.module}`,
    format: 'es',
    sourcemap: true
  },
  plugins: [
    sourcemaps()
  ]
}
