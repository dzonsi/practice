var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');

function styles() {
  return gulp.src('./custom/custom.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename(function(path) {
        path.extname = '.css';
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path) {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify({ message: 'Bootstrap compiled'}));
}

gulp.watch('./custom/*.scss', styles);

exports.default = styles;