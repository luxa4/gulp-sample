const uglify = require('gulp-uglify');
import { task, src, dest } from 'gulp';


task('compress', function() {
  return src('src/*.js')
    .pipe(uglify())
    .pipe(dest('dist'));
});

