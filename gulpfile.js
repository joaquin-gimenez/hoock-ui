  const gulp = require('gulp'); 
  const watch = require('gulp-watch'); 
  const combine = require('gulp-scss-combine');
  const concat = require('gulp-concat');
  const sass = require('gulp-sass');

  sass.compiler = require('node-sass');


  // gulp.task('combine-scss-watch', function() {
  //   return watch('assets/scss/**', function() {
  //   gulp.src('assets/scss/main.scss')
  //     .pipe(gulp.dest('assets/css'))  // save file to destination.
  //   })
  //   }
  // );

  gulp.task('sass', function () {
    return gulp.src('./assets/scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./assets/css'));
  });
   
  gulp.task('sass:watch', function () {
    gulp.watch('./assets/scss/*.scss', gulp.series('sass'));
  });

  // gulp.task('combine-scss', ()=>gulp.src('assets/scss/*')  // define a source files
  //     .pipe(concat('styles.css')) // concat the stream output in single file
  //     .pipe(gulp.dest('assets/css'))  // save file to destination.
  // );