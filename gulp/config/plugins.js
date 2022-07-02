import replace from 'gulp-replace';
import plumber from 'gulp-plumber'; // обработка ошибок
import notify from 'gulp-notify'; // показ сообщений
import browsersync from 'browser-sync'; // локальный сервер

export const plugins = {
  replace,
  plumber,
  notify,
  browsersync
};
