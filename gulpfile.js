
'use strict';

const gulp =            require('gulp'),
    watch =             require('gulp-watch'),
    prefixer =          require('gulp-autoprefixer'),
    uglify =            require('gulp-uglify'),
    sass =              require('gulp-sass'),
    rigger =            require('gulp-rigger'),
    cssmin =            require('gulp-minify-css'),
    browserSync =       require("browser-sync"),
    babel  =            require("gulp-babel"),
    reload =            browserSync.reload;

var path = {

    build: {
        html: "dist/",
        js: "dist/js/",
        sass: "dist/css/",
        media: "dist/static/",
        fonts: "dist/fonts/"
    },

    src: {
        html: "src/*.html",
        js: "src/js/main.js",
        vendor: "src/js/vendor.js",
        media: "src/static/**/*.*",
        sass: "src/sass/*.scss",
        cssVendor: "src/sass/vendor/*.css",
        fonts: "src/fonts/**/*.*",
    },

    watch:{
        html: "src/**/*.html",
        js: "src/js/**/*.js",
        sass: "src/sass/**/*.scss",
        css: "src/sass/**/*.css",
        media: "src/static/**/*.*",
        fonts: "src/fonts/**/*.*"
    },

    clean: "./dist"

};

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: false,
    host: "localhost",
    port: 8000,
    logPrefix: "uds_bolerplate_"
};


gulp.task("html:dev",function(){
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task("vendor:dev",function(){
   gulp.src(path.src.vendor)
       .pipe(rigger())
       .pipe(gulp.dest(path.build.js))
       .pipe(reload({stream: true}));
});

gulp.task('babel:dev', function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(babel({
            presets: ['es2015', 'stage-3']
        }))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}))
});

gulp.task('babel:prod', function () {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(babel({
            presets: ['es2015', 'stage-3']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}))
});


gulp.task('sass:dev', function () {
    gulp.src(path.src.sass)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.sass))
        .pipe(reload({stream: true}));
});

gulp.task('cssVendor:dev', function () {
    gulp.src(path.src.cssVendor)
        .pipe(gulp.dest(path.build.sass))
        .pipe(reload({stream: true}));
});

gulp.task('sass:prod', function () {
    gulp.src(path.src.sass)
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.sass))
        .pipe(reload({stream: true}));
});

gulp.task('media:dev', function () {
    gulp.src(path.src.media)
        .pipe(gulp.dest(path.build.media))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:dev', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('dev', [
    'html:dev',
    'babel:dev',
    'vendor:dev',
    'sass:dev',
    'cssVendor:dev',
    'fonts:dev',
    'media:dev'
]);

gulp.task('prod', [
    'html:dev',
    'babel:prod',
    'vendor:dev',
    'sass:prod',
    'cssVendor:prod',
    'fonts:dev',
    'media:dev'
]);



gulp.task("watch",function(){
    watch([path.watch.html],function(event, cb){
        gulp.start("html:dev");
    });
    watch([path.watch.sass], function(event, cb) {
        gulp.start('sass:dev');
    });
    watch([path.watch.sass], function(event, cb) {
        gulp.start('cssVendor:dev');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('babel:dev');
    });
    watch([path.watch.media], function(event, cb) {
        gulp.start('media:dev');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:dev');
    });
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('develop', ['dev', 'webserver', 'watch']);
gulp.task('production', ['prod']);
