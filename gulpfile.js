var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require("gulp-concat");
var cleanCSS = require('gulp-clean-css');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var sass = require("gulp-sass");
var rewriteCSS = require('gulp-rewrite-css');
var autoprefixer = require('gulp-autoprefixer');
const htmlPartial = require('gulp-html-partial');

function scss(done) {
  gulp.src("./src/assets/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    //.pipe(cleanCSS())
    .pipe(rewriteCSS({ destination: "./src/assets/build" }))
    .pipe(autoprefixer({ grid: "autoplace" }))
    .pipe(sourcemaps.write())
    .pipe(concat("all.css"))
    .pipe(gulp.dest("./src/assets/build"));
  done();
}

function html(done) {

  gulp.src(['./src/html/*.html'])
    .pipe(htmlPartial({
      basePath: './src/html/partials/'
    }))
    .pipe(gulp.dest('./src'));
  done();
}



// Watch files
function watchFiles() {
  gulp.watch("./src/assets/scss/**/*.scss", scss);
  gulp.watch("./src/html/*.html", html);
}

exports.scss = scss;
exports.watch = watchFiles;
exports.html = html;
