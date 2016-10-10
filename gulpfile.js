var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');
var order = require('gulp-order');

gulp.task('scripts', function () {
  var cfe = gulp.src('src/*.coffee')
    .pipe(coffee());

  var js = gulp.src('src/*.js');

  return es.merge(cfe, js)
  .pipe(order([
    "first.js",
    "second.js"
    
  ]))
  .pipe(concat('src.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.{js,coffee}', ['scripts'])
})
