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
import css from './gulp/tasks/css.js';
import js from './gulp/tasks/js.js';
import image from './gulp/tasks/image.js';
import ftp from './gulp/tasks/ftp.js';

function watcher() {
  gulp.watch(app.path.watch.files, copy);
  gulp.watch(app.path.watch.html, html);
  gulp.watch(app.path.watch.css, css);
  gulp.watch(app.path.watch.js, js);
  gulp.watch(app.path.watch.image, image);
}

const mainTask = gulp.parallel(copy, html, css, js, image);

// Scenarios
const dev = gulp.series(delDist, mainTask, gulp.parallel(server, watcher));
const prod = gulp.series(mainTask, watcher);
const deployFtp = gulp.series(delDist, mainTask, ftp);

gulp.task('default', dev);
gulp.task('build', prod);
gulp.task('ftp', deployFtp);
