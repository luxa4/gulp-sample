import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';


export default function image() {
  return gulp.src(app.path.src.image)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: 'Image',
      message: 'Error: <%= error.message %>'
    })))
    .pipe(app.plugins.newer(app.path.build.image))
    .pipe(webp())
    .pipe(gulp.dest(app.path.build.image))
    .pipe(gulp.src(app.path.src.image))
    .pipe(app.plugins.newer(app.path.build.image))
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      optimizationLevel: 3 // from 0 to 7

    }))
    .pipe(gulp.dest(app.path.build.image))
    .pipe(gulp.src(app.path.src.svg))
    .pipe(gulp.dest(app.path.build.image))
    .pipe(app.plugins.browsersync.stream());
};
