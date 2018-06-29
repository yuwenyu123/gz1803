const gulp = require('gulp');
const connect = require('gulp-connect');
gulp.task('server', function(){
    connect.server({
        root: './src/',
        port: 81,
        livereload: true
    })
})

gulp.task('default', ['server']);