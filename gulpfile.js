const { task, src, dest, watch, parallel, series } = require('gulp')

const uglify = require('gulp-uglify');

task('compress', function () {
    return src('src/*.js')
        .pipe(uglify())
        .pipe(dest('dist')
    );
});

const concat = require('gulp-concat');

task('concat', function() {
    return src('src/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('dist'));
});

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

task('sass', function () {
    return src('src/sass/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css'));
});


const clean = require('gulp-clean');

task('clean', function () {
    return src('dist/**/*', {read: false})
        .pipe(clean());
});


const imagemin = require('gulp-imagemin');

task('imagemin', function () {
    return src('src/images/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
});

