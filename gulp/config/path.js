import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';


export const path = {
  build: {
    ftp: ``,
    font: `${buildFolder}/font/`,
    image: `${buildFolder}/image/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`
  },
  src: {
    font: `${srcFolder}/font`,
    image: `${srcFolder}/image/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/image/**/*.svg`,
    js: `${srcFolder}/js/main.js`,
    css: `${srcFolder}/sass/index.sass`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    image: `${srcFolder}/image/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    js: `${srcFolder}/js/**/*.js`,
    css: `${srcFolder}/sass/index.sass`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`
  }, // пути до файлов, за которыми следить
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: 'test'
};
