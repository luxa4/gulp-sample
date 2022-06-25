const { task, src, dest, watch, parallel, series} = require('gulp')

const uglify = require('gulp-uglify');

task('compress', function () {
    return src('src/*.js')
        .pipe(uglify())
        .pipe(dest('dist')
    );
});

