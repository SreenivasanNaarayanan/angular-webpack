import gulp from 'gulp';
import webpack from 'webpack';

const webpackConfig = {
    entry: './src/index.js',
    output: {
        path: './dest/app',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
}

gulp.task('build', callback => {

    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dest/app'));

    webpack(webpackConfig, () => callback());

});
