import gulp from 'gulp';
import fileInclude from 'gulp-file-include';

export default function html() {
  return gulp.src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(gulp.dest(app.path.build.html));
};
