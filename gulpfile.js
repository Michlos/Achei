'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
    	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));

});

gulp.task('watch', function () {
	gulp.src('sass/**/*.sass')
		.pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
		.pipe(gulp.dest('css'));
    gulp.watch('sass/**/*.sass', ['css']);   	
        
});