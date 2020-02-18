var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require("gulp-concat");
var cleanCSS = require('gulp-clean-css');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var sass = require("gulp-sass");
var rewriteCSS = require('gulp-rewrite-css');
var autoprefixer = require('gulp-autoprefixer');

function scss(done) {
  gulp.src("./src/assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    //.pipe(cleanCSS())
    .pipe(rewriteCSS({ destination: "./src/assets/build" }))
    .pipe(autoprefixer({grid:"autoplace"}))
    .pipe(sourcemaps.write())
    .pipe(concat("all.css"))
    .pipe(gulp.dest("./src/assets/build"));
  done();
}



// Watch files
function watchFiles() {
  gulp.watch("./src/assets/scss/**/*.scss", scss);
}

exports.scss = scss;
exports.watch = watchFiles;
