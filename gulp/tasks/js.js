import gulp from 'gulp';
import webpack from 'webpack-stream';

export default function js() {
  return gulp.src(app.path.src.js, { sourcemaps: true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: 'JS',
      message: 'Error: <%= error.message %>'
    })))
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
