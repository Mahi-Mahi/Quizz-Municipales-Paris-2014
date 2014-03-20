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

var rjs = require('gulp-requirejs');

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

// Clean
gulp.task('clean', function() {
    gulp.src(['app/vendor', 'app/css', 'data/data.json'], {
        read: false
    })
        .pipe(clean());

});

// data
gulp.task('data-watch', function() {

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

});
gulp.task('data', function() {
    gulp.src(['data/data.json'])
        .pipe(gulp.dest('app/data'));
});

// requirejs
gulp.task('requirejsBuild', function() {
    rjs({
        baseUrl: 'app/js/app.js',
        out: 'app/dist.js',
        shim: {
            // standard require.js shim options
        },
        // ... more require.js options
    })
        .pipe(gulp.dest('./deploy/')); // pipe it to the output DIR
});

// default
gulp.task('default', ['sass', 'data']);

// setup
gulp.task('setup', ['clean', 'bower', 'default']);

// watch
gulp.task('watch', function() {
    gulp.watch('app/styles/*.scss', function() {
        gulp.run('sass');
    });
});