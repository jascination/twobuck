var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');

// Static Server + watching less/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./public"
    });

    gulp.watch("public/less/*.less", ['less']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src("public/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);