import { defineConfig, RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
export default defineConfig([
  {
    input: 'src/module1/module1.ts',
    plugins: [typescript({ declaration: false, declarationDir: undefined })],
    output: [
      {
        format: 'es',
        //dir: 'dist/module1',
        file: 'dist/module1/module1.esm.js',
      },
      {
        format: 'cjs',
        file: 'dist/module1/module1.cjs.js',
      },
      {
        format: 'es',
        file: 'dist/module1/module1.esm.min.js',
        plugins: [terser()],
      },
    ],
  },
  {
    input: 'src/module2/module2.ts',
    plugins: [typescript({ declaration: false, declarationDir: undefined })],
    output: [
      {
        format: 'es',
        //dir: 'dist/module1',
        file: 'dist/module2/module2.esm.js',
      },
      {
        format: 'cjs',
        file: 'dist/module2/module2.cjs.js',
      },
      {
        format: 'es',
        file: 'dist/module2/module2.esm.min.js',
        plugins: [terser()],
      },
    ],
  },
]);
