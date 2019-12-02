const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function bs() {
    serveSass();
    cssMin();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.*").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
};

function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

function cssMin() {
    src('./css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('./css'));
}

exports.serve = bs;