import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';


export const path = {
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/**/*.*`
  }, // пути до файлов, за которыми следить
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: ''
};
