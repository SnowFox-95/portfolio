global.$ = {
  // Пакеты
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
  sass: require("gulp-sass")(require("sass")),
  del: require("del"),
  webpack: require("webpack-stream"),

  //Конфигурация
  path: require("./config/path.js"),
  app: require("./config/app.js"),
};

// Задачи

const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

// Наблюдение
// Раскомментируй нужные наблюдатели и закомментируй ненужные
const watcher = () => {
  //$.gulp.watch($.path.html.watch, task.html);
  $.gulp.watch($.path.pug.watch, task.pug);
  //$.gulp.watch($.path.css.watch, task.css);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.font.watch, task.font);
};

// Раскомментируй нужные задачи и закомментируй ненужные
const bulid = $.gulp.series(
  task.clear,
  $.gulp.parallel(
    task.pug,
    /*task.css,
    task.html, */
    task.scss,
    task.js,
    task.img,

    task.font
  )
);

const dev = $.gulp.series(bulid, $.gulp.parallel(watcher, task.server));

//Задачи
// Раскомментируй нужные экспорты и закомментируй ненужные
exports.html = task.html;
exports.css = task.css;
exports.pug = task.pug;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;

exports.font = task.font;

//Сборка
exports.default = $.app.isProd ? bulid : dev;
