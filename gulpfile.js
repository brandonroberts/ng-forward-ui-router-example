var gulp = require('gulp');
var app = require('./package.json');
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var stringify = require('stringify');
var history = require('connect-history-api-fallback');

function handleError(error) {
  console.log("Error: " + error.message);
  this.emit('end');
}

gulp.task('default', ['connect', 'bundle'], function() {
  gulp.watch(['./app/**/*.js', './app/**/*.html', './app/views/**'], ['bundle']);
});

gulp.task('bundle', ['style'], function() {
    browserify({ debug: true })
      .transform(babelify.configure({stage: 0}))
      .transform(stringify(['.html']))
      .require('./app/index.js', { entry: true})
      .bundle()
      .on("error", handleError)
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .on("error", handleError)
      .pipe(gulp.dest('./dist/'));
});

gulp.task('style', function() {
    return gulp.src([
            './app/views/index.html'
          ])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8080,
    middleware: function(connect, opt) {
      return [
        history()
      ]
    }
  });
});