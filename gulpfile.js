// including Gulp
var gulp = require('gulp');

// to generate the plugin
gulp.task('default', function(){
    return gulp.src('./app/*.scss')
        .pipe(gulp.dest('./dist/'));
});