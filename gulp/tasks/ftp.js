import util from 'gulp-util';
import vinylFtp from 'vinyl-ftp';
import gulp from 'gulp';
import { configFtp } from '../config/ftp.js';

export default function fto() {
  configFtp.log = util.log;
  const ftpConnect = vinylFtp.create(configFtp);
  return gulp.src(`${app.path.buildFolder}/**/*.*`)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: 'FTP',
      message: 'Error: <%= error.message %>'
    })))
    .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};
