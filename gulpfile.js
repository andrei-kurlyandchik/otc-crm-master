let gulp = require('gulp');
let stylus = require('gulp-stylus');
let pug = require('gulp-pug');
let uglify = require('gulp-uglify');
let cssnano = require('gulp-cssnano');
let imagemin = require('gulp-imagemin');
let plumber = require('gulp-plumber');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let babel = require('gulp-babel');
let del = require('del');

const paths = {
    styles: {
        src: 'src/stylus/common.styl',
        dest: 'public/css/'
    },
    scripts: {
        src: 'src/js/common.js',
        dest: 'public/js/'
    },
    cssLibs:{
        src: 'src/stylus/vendor/**/*.css',
        dest: 'public/css/vendor/'
    },
    jsLibs:{
        src: 'src/js/vendor/**/*.js',
        dest: 'public/js/vendor/'
    },
    images:{
        src: 'src/img/**/*',
        dest: 'public/img/'
    },
    fonts:{
        src: 'src/fonts/**/*',
        dest: 'public/fonts/'
    },
    templates:{
        src: 'src/templates/*.pug',
        dest: 'public/'
    }
};

function templates() {
    return gulp.src(paths.templates.src)
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(paths.templates.dest));
}

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest));
}

function cssLibs() {
    return gulp.src(paths.cssLibs.src)
        .pipe(plumber())
        .pipe(cssnano())
        .pipe(gulp.dest(paths.cssLibs.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src, { sourcemaps: true })
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
}

function jsLibs() {
    return gulp.src(paths.jsLibs.src)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsLibs.dest));
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}, {removeUselessStrokeAndFill: false}]
        }))
        .pipe(gulp.dest(paths.images.dest));
}

function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.fonts.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch('src/stylus/**/*.styl', styles);
    gulp.watch(paths.cssLibs.src, cssLibs);
    gulp.watch(paths.jsLibs.src, jsLibs);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch('src/templates/**/*.pug', templates);
}

function clean() {
    return del(['public']);
}

let build = gulp.series(clean,
    gulp.parallel(templates, styles, cssLibs, scripts, jsLibs, images, fonts)
);

gulp.task('build', build);

gulp.task('dev', gulp.series(build, watch));
