// const gulp = require('gulp');
// var sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');

// exports.default = () => (
//     gulp.src('css/styles.scss')
//     .pipe(autoprefixer({
//         browsers: ['last 2 versions'],
//         cascade: false
//     }))
//     .pipe(gulp.dest('dist'))
// );

// 'use strict';
// sass.compiler = require('node-sass');
// gulp.task('sass', function() {
//     return gulp.src('./sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css'));
// });
// gulp.task('sass:watch', function() {
//     gulp.watch('./sass/**/*.scss', ['sass']);
// });


const { src, dest, parallel, series } = require('gulp');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sync = require('gulp-browsersync-inject');
const autoprefix = require('gulp-autoprefixer');

function pugToHtml() {
    return src('*.pug')
        .pipe(pug())
        .pipe(dest('dist'))
}

function autoprefixer() {
    return src('css/styles.scss')
        .pipe(autoprefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
}

function sassToCss() {
    return src('css/*.scss')
        .pipe(scss())
        .pipe(dest('dist'))
}

function browserSync() {
    returnsrc('./dist/index.html')
        .pipe(sync({ port: 3000 }))
        .pipe(dest('dist'));
}

// function minCss() {
//     return src('css/*.scss')
//         .pipe(scss())
//         .pipe(cleanCSS({ compatibility: 'ie8' }))
//         .pipe(dest('dist'))
// }

exports.default = parallel(pugToHtml, series(sassToCss, autoprefix, browserSync));