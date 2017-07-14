'use strict';

const gulp = require('gulp');
const exec = require('child_process').exec;
const browserSync = require('browser-sync').create();

gulp.task('build', (cb) => {
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('change-watch', ['build'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('watch', () => {

  browserSync.init({
    proxy: 'http://localhost:9092',
    port: 4200
  });

  gulp.watch(["src/**/*.ts", "src/**/*.html", "src/**/*.scss", "src/assest/**/*.json"], ['change-watch']).on('change', function (e) {
    console.log('File ' + e.path + ' has been changed. Compiling.');
  });
});
