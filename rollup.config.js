import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const production = process.env.NODE_ENV === 'production';

export default {
  entry: 'src/index.js',
  dest: `dist/dutier-logger${production ? '.min' : ''}.js`,
  format: 'umd',
  moduleName: 'Logger',
  sourceMap: true,
  banner: `/**
  * @name dutier
  * @description Logger for Dutier.
  * @author Luis Vinícius
  * @email luis@uilabs.me
  */`,
  plugins: [
    babel()
  ]
    .concat(production ? [
      uglify()
    ] : [])
}