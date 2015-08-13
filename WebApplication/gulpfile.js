/// <binding />
//requires definitions
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');

//tasks definitions
gulp.task('compile-ts', function () {
    var tsResult = gulp.src('TS/*.ts')
      .pipe(ts({
          experimentalAsyncFunctions: true,
          noImplicitAny: true,
          target: "ES6",
          typescript: require('typescript')
      }));
    return tsResult.js.pipe(gulp.dest('TS'));
});

gulp.task('compile-ts-babel', function () {
    return gulp.src('TS/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts({
        experimentalAsyncFunctions: true,
        noImplicitAny: true,
        target: "ES6",
        typescript: require('typescript'),
        removeComments: true
    }))
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('TS'));
});