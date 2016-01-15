
var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint');


gulp.task('default', function () {
    runsequence('lint', 'jscs');
});

gulp.task('lint', function () {
    gulp.src('**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function () {
    return gulp.src('**/*.js')
        .pipe(jscs());
});

