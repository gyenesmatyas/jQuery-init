const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scc into css
function style(){
    // vind mijn scss file
    return gulp.src('./scss/**/*.scss')
    // compile deze file
        .pipe(sass().on('error',sass.logError))
    // bepaal waar de nieuwe file moet komen
        .pipe(gulp.dest('./css'))
    // stream changes to all browsers
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload); 
    gulp.watch('./js/**/*js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;