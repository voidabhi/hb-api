
var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    tape = require('tape'),
    spec = require('tap-spec'),
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

gulp.task('test', function() {
    return gulp.src(paths.serverTests, {
            read: false
        })
        .pipe(tape.createStream())
        .pipe(spec())
        .pipe(process.stdout);
});

