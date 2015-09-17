var gulp = require('gulp');
var shell = require('gulp-shell');
var mochaSelenium = require('gulp-mocha-selenium');

gulp.task('default', function () {

  shell.task('webdriver-manager start &', {quiet: true})();
    console.log('Starting webdriver...');

    setTimeout(function () {
      console.log('Starting tests...');

      return gulp.src('test/**/*-test.js', {read: false})
        .pipe(mochaSelenium({
          browserName: 'chrome',
          reporter: 'spec'
        }));

    }, 4500);

});
