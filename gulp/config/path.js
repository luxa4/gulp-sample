import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';


export const path = {
  build: {
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`
  },
  src: {
    css: `${srcFolder}/sass/*.sass`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    css: `${srcFolder}/sass/*.sass`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/**/*.*`
  }, // пути до файлов, за которыми следить
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: ''
};
