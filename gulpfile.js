const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");

gulp.task('default', function() {
    gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('minify', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename(function (path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest('dist/'))
});