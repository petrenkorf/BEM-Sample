var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var livereload = require('gulp-livereload')

gulp.task('stylus', function () {
	return gulp.src('./stylus/*.styl')
						 .pipe(stylus())
						 .pipe(gulp.dest('./css'))
						 .pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(['./stylus/*.styl'], gulp.series('stylus'));
});
