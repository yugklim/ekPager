var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});
var jasmine = require('gulp-jasmine');
var concat = require('gulp-concat');
var karma = require('karma').server;


gulp.task('tests', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});


gulp.task('scripts', function(){
  //combine all js files of the app
  gulp.src(['./app/**/*_test.js','./app/**/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(gulp.dest('./build'));
});


gulp.task('css', function(){
  gulp.src('./app/**/*.css')
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('vendorJS', function(){
  //concatenate vendor JS files
  gulp.src(['!./bower_components/**/*.min.js',
    './bower_components/**/*.js'])
    .pipe(plugins.concat('lib.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function(){
  //concatenate vendor CSS files
  gulp.src(['!./bower_components/**/*.min.css',
    './bower_components/**/*.css'])
    .pipe(plugins.concat('lib.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-index', function() {
  gulp.src('./app/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
  gulp.watch([
    'build/**/*.html',
    'build/**/*.js',
    'build/**/*.css'
  ], function(event) {
    return gulp.src(event.path)
      .pipe(plugins.connect.reload());
  });
  gulp.watch('./app/**/*_test.js',['tests']);
  gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
  gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
  gulp.watch('./app/**/*.css',['css']);
  gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('watch_js_only',function(){
  gulp.watch('./app/**/*.js',['tests']);
});


gulp.task('default',['tests','connect','scripts','templates','css','copy-index','vendorJS','vendorCSS','watch']);
gulp.task('t',['tests', 'watch_js_only']);
