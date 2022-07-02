import gulp from 'gulp';

export default function copy() {
  return gulp.src(app.path.src.files)
    .pipe(gulp.dest(app.path.build.files));
};
