import gulp from 'gulp';
import connect from 'gulp-connect';

gulp.task('server', ['build'], () => {

    connect.server({
        root: './dest/app',
        livereload: true
    });

    gulp.watch('./src/**/*.+(js|html)', ['build', 'reload']);

});

gulp.task('reload', () => {

    gulp.src('./src/index.html')
        .pipe(connect.reload());

})
