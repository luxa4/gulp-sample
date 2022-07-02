import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

export default function html() {
  return gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(fileInclude())
    .pipe(webpHtmlNosvg())
    .pipe(versionNumber({
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': ['css', 'js']
      },
      'output': {
        'file': 'gulp/version.json'
      }
    }))
    .pipe(gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
