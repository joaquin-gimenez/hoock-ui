  const gulp = require('gulp'); 
  const watch = require('gulp-watch'); 
  const combine = require('gulp-scss-combine');
  const concat = require('gulp-concat');

  // gulp.task('combine-scss', ()=>gulp.src('assets/scss/**')  // define a source files
  //     .pipe(combine())   // combine them based on @import and save it to stream
  //     .pipe(concat('styles.css')) // concat the stream output in single file
  //     .pipe(gulp.dest('assets/css'))  // save file to destination.
  // );

  // gulp.watch([
  //   'assets/scss/*.scss',
  //   function() {
  //     gulp.src('assets/scss/**')  // define a source files
  //     .pipe(combine())   // combine them based on @import and save it to stream
  //     .pipe(concat('styles.css')) // concat the stream output in single file
  //     .pipe(gulp.dest('assets/css'))  // save file to destination.
  //   }
  // ])

  gulp.task('combine-scss', function() {
    return watch('assets/scss/**', function() {
    gulp.src('assets/scss/main.scss')
      .pipe(gulp.dest('assets/css'))  // save file to destination.
    })
    }
  );