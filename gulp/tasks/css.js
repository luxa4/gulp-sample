import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss';

const sass = gulpSass(dartSass);

export default function css() {
  return gulp.src(app.path.src.css, { sourcemaps: true })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: 'SASS',
      message: 'Error: <%= error.message %>'
    })))
    .pipe(sass())
    .pipe(groupCssMediaQueries())
    .pipe(webpcss({
      webpClass: '.webp',
      noWebpClass: '.no-webp'
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    }))
  //  Чтобы увидеть не сжатый файл
    .pipe(gulp.dest(app.path.build.css))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};
