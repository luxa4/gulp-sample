import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  path,
  gulp,
  plugins
};

// import tasks
import copy from './gulp/tasks/copy.js';
import delDist from './gulp/tasks/delDist.js';
import html from './gulp/tasks/html.js';
import server from './gulp/tasks/server.js';

function watcher() {
  gulp.watch(app.path.watch.files, copy);
  gulp.watch(app.path.watch.html, html);
}

const mainTask = gulp.parallel(copy, html);

// Scenarios
const dev = gulp.series(delDist, mainTask, gulp.parallel(server, watcher));
const prod = gulp.series(mainTask, watcher);

gulp.task('default', dev);
gulp.task('build', prod);


// const concat = require('gulp-concat');
//
// task('concat', function() {
//   return src('src/*.js')
//     .pipe(concat('all.js'))
//     .pipe(dest('dist'));
// });
//
//
// const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');
//
// task('sass', function() {
//   return src('src/sass/*.sass')
//     .pipe(sass())
//     .pipe(autoprefixer({
//       cascade: false,
//     }))
//     .pipe(cleanCSS({ compatibility: 'ie8' }))
//     .pipe(dest('dist/css'));
// });
//
//
// const clean = require('gulp-clean');
//
// task('clean', function() {
//   return src('dist/**/*', { read: false })
//     .pipe(clean());
// });
//
//
// const imagemin = require('gulp-imagemin');
//
// task('imagemin', function() {
//   return src('src/images/*')
//     .pipe(imagemin())
//     .pipe(dest('dist/images'));
// });
//
// task('watching', function() {
//   watch(['src/**/*'], series('clean'));
// });
//
//
// exports.default = parallel('watching');
