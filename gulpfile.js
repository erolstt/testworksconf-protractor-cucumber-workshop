/*global -$ */
'use strict';
// generated on 2015-08-05 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var del = require('del');
var fs = require('fs');
var mkdirp = require('mkdirp');
var reload = browserSync.reload;

gulp.task('styles', function () {
  return gulp.src('app/assets/styles/main.css')
    .pipe($.sourcemaps.init())
    .pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('html', ['styles'], function () {
  var assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/**/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('app/assets/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/assets/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'fonts'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/assets/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/assets/styles/**/*.css', ['styles']);
  gulp.watch('app/assets/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

/*************** E2E setup *************/
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

gulp.task('protractor-report', generateProtractorHtmlReport);

gulp.task('clean-protractor-report', function (done) {
  var dir = 'reports/';
  if (fs.existsSync(dir)) {
    del(dir + '**/*', done);
  } else {
    mkdirp(dir, done);
  }
});

/***************Duplicated for windows OS*************/
gulp.task('protractorwin', ['clean-protractor-report', 'default', 'webdriver-update'], runProtractor);

gulp.task('e2ewin', ['protractorwin'], generateProtractorHtmlReport);
/***************Duplicated for windows OS*************/

gulp.task('protractor', ['clean-protractor-report', 'webdriver-update'], runProtractor);

gulp.task('e2e', ['protractor'], generateProtractorHtmlReport);

function runProtractor(done) {
  gulp.src('e2e/features/**/*.feature')
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js'
    }))
    .on('error', function (err) {
      $.util.log(err.message);
      done();
    })
    .on('end', function () {
      done();
    });
}

function generateProtractorHtmlReport() {
  return gulp.src('reports/cucumber-test-results.json')
    .pipe($.protractorCucumberHtmlReport({
      dest: 'reports'
    }))
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
    });
}
