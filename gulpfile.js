const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.*").on('change', browserSync.reload);
<<<<<<< HEAD
    watch("./sass/**/*.sass", serveSass);
};

function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

exports.serve = bs;
=======
};

function serveSass() {
    return src("./src/sass/*.sass")
        .pipe(sass())
        .pipe(dest("./src/css"))
        .pipe(browserSync.stream());
};

function cssMin() {
    src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'));
};

exports.serve = bs;
// exports.build = parallel()
>>>>>>> a031665f3c47fcc7be094ee70dead7acb395bf21
