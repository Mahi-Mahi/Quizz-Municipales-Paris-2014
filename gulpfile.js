/* global require */
/* global process */
"use strict";

var gulp = require('gulp');

var spawn = require('child_process').spawn;
var gutil = require('gulp-util');
var bower = require('gulp-bower');

var autoprefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var sass = require('gulp-ruby-sass');

var clean = require('gulp-clean');

gulp.task('watch', function() {

    gulp.watch('data/import.rb', function() {
        var child = spawn("data/import.rb", [], {
            cwd: process.cwd()
        }),
            stdout = '',
            stderr = '';

        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function(data) {
            stdout += data;
            gutil.log(data);
        });
        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function(data) {
            stderr += data;
            gutil.log(gutil.colors.red(data));
            gutil.beep();
        });
        child.on('close', function(code) {
            gutil.log("Done with exit code", code);
        });
    });

    gulp.watch('app/styles/*.scss', function() {
        gulp.run('sass');
    });

});

// Sass
gulp.task('sass', function() {
    return gulp.src(['app/styles/*.scss'])
        .pipe(sass({
            compass: true
        }))
        .pipe(autoprefix())
        .pipe(csso())
        .pipe(gulp.dest('app/css'));
});

// Bower
gulp.task('bower', function() {
    gulp.src('app/vendor', {
        read: false
    })
        .pipe(clean());
    bower()
        .pipe(gulp.dest('app/vendor/'));
});

gulp.task('clean', function() {
    gulp.src(['app/vendor', 'app/css'], {
        read: false
    })
        .pipe(clean());

});