// let project_folder = "dist";
// let source_folder = "src";

// let fs = require('fs');

// let path = {
//    build: {
//       html: project_folder + "/",
//       css: project_folder + "/css/",
//       js: project_folder + "/js/",
//       img: project_folder + "/img/",
//       fonts: project_folder + "/fonts/",
//       icon: project_folder + "/icon/",
//       iconconnect: project_folder + "/iconconnect/",
//    },
//    src: {
//       html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
//       css: source_folder + "/scss/slyle.scss",
//       js: source_folder + "/js/script.js",
//       img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
//       fonts: source_folder + "/fonts/*.ttf",
//       icon: source_folder + "/icon/**/*.{woff,ttf,svg,eot}",
//       iconconnect: source_folder + "/iconconnect/icon.css",
//    },
//    watch: {
//       html: source_folder + "/**/*.html",
//       js: source_folder + "/js/**/*.js",
//       css: source_folder + "/scss/**/*.scss",
//       img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
//    },
//    clean: "./" + project_folder + "/"
// }

// let { src, dest } = require('gulp'),
//    gulp = require('gulp'),
//    browsersync = require("browser-sync").create(),
//    fileinclude = require("gulp-file-include"),
//    del = require("del"),
//    scss = require("gulp-sass"),
//    autoprefixer = require("gulp-autoprefixer"),
//    cssMediaQuerie = require("gulp-group-css-media-queries"),
//    cleanCss = require("gulp-clean-css"),
//    rename = require("gulp-rename"),
//    uglifyEs = require("gulp-uglify-es").default,
//    imagemin = require("gulp-imagemin"),
//    webp = require("gulp-webp"),
//    webpHtml = require("gulp-webp-html"),
//    webpCss = require("gulp-webpcss"),
//    svgSprite = require("gulp-svg-sprite"),
//    ttf2woff = require("gulp-ttf2woff"),
//    ttf2woff2 = require("gulp-ttf2woff2"),
//    fonter = require("gulp-fonter");


// function browserSync() {
//    browsersync.init({
//       server: {
//          baseDir: "./" + project_folder + "/"
//       },
//       port: 3000,
//       notify: false
//    })
// }
// function html() {
//    return src(path.src.html)
//       .pipe(fileinclude())
//       .pipe(webpHtml())
//       .pipe(dest(path.build.html))
//       .pipe(browsersync.stream())
// }
// function css() {
//    return src(path.src.css)
//       .pipe(
//          scss({
//             outputStyle: "expanded"
//          })
//       )
//       .pipe(
//          cssMediaQuerie()
//       )
//       .pipe(
//          autoprefixer({
//             overrideBrowserslist: ["last 100 version"],
//             cascade: true
//          })
//       )
//       .pipe(webpCss())
//       .pipe(dest(path.build.css))
//       .pipe(cleanCss())
//       .pipe(
//          rename({
//             extname: ".min.css"
//          })
//       )
//       .pipe(dest(path.build.css))
//       .pipe(browsersync.stream())
// }
// function js() {
//    return src(path.src.js)
//       .pipe(fileinclude())
//       .pipe(dest(path.build.js))
//       .pipe(
//          uglifyEs()
//       )
//       .pipe(
//          rename({
//             extname: ".min.js"
//          })
//       )
//       .pipe(dest(path.build.js))
//       .pipe(browsersync.stream())
// }
// function img() {
//    return src(path.src.img)
//       .pipe(
//          webp({
//             quality: 70
//          })
//       )
//       .pipe(dest(path.build.img))
//       .pipe(src(path.src.img))
//       .pipe(imagemin({
//          interlaced: true,
//          progressive: true,
//          optimizationLevel: 3,
//          svgoPlugins: [{ removeViewBox: false }]
//       })
//       )
//       .pipe(dest(path.build.img))
//       .pipe(browsersync.stream())
// }
// function fonts() {
//    src(path.src.fonts)
//       .pipe(ttf2woff())
//       .pipe(dest(path.build.fonts));
//    return src(path.src.fonts)
//       .pipe(ttf2woff2())
//       .pipe(dest(path.build.fonts));
// };
// function icon() {
//    return src(path.src.icon)
//       .pipe(dest(path.build.icon))
// }
// function iconconnect() {
//    return src(path.src.iconconnect)
//       .pipe(dest(path.build.iconconnect))
// }

// gulp.task('otf2ttf', function () {
//    return gulp.src([source_folder + '/fonts/*otf'])
//       .pipe(fonter({
//          formats: ['ttf']
//       }))
//       .pipe(dest(source_folder + '/fonts/'));
// })
// function fontsStyle() {
//    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
//    if (file_content == '') {
//       fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
//       return fs.readdir(path.build.fonts, function (err, items) {
//          if (items) {
//             let c_fontname;
//             for (var i = 0; i < items.length; i++) {
//                let fontname = items[i].split('.');
//                fontname = fontname[0];
//                if (c_fontname != fontname) {
//                   fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
//                }
//                c_fontname = fontname;
//             }
//          }
//       })
//    }
// }
// function cb() {
// }

// function watchFiles() {
//    gulp.watch([path.watch.html], html);
//    gulp.watch([path.watch.css], css);
//    gulp.watch([path.watch.js], js);
//    gulp.watch([path.watch.img], img);
// }
// function clean() {
//    return del(path.clean);
// }
// let build = gulp.series(clean, gulp.parallel(js, css, html, img, fonts, icon, iconconnect), fontsStyle);
// let watch = gulp.parallel(build, watchFiles, browserSync);

// exports.iconconnect = iconconnect;
// exports.icon = icon;
// exports.fontsStyle = fontsStyle;
// exports.fonts = fonts;
// exports.img = img;
// exports.js = js;
// exports.css = css;
// exports.html = html;
// exports.build = build;
// exports.watch = watch;
// exports.default = watch; 


let project_folder = "dist";
let source_folder = "src";

let fs = require('fs');

let path = {
   build: {
      html: project_folder + "/",
      css: project_folder + "/assets/css/",
      js: project_folder + "/js/",
      // fonts: project_folder + "/assets/fonts/.",
      img: project_folder + "/assets/img/",
      // slick: project_folder + "/assets/slick/",
   },
   src: {
      html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
      css: source_folder + "/assets/css/**/*.css",
      img: source_folder + "/assets/img/**/*.{jpg,png,svg,gif,ico,webp}",
      js: source_folder + "/js/**/*.js",
      // fonts: source_folder + "/assets/fonts/*.ttf",
      // slick: source_folder + "/assets/slick/**/*.*",
      // icon: source_folder / assets / + "/icon/**/*.{woff,ttf,svg,eot}",
      // iconconnect: source_folder / assets / + "/iconconnect/icon.css",
   },
   watch: {
      html: source_folder + "/*.html",
      css: source_folder + "/assets/css/**/*.css",
      js: source_folder + "/js/**/*.js",
      // fonts: source_folder + "assets/fonts/*.ttf",
      img: source_folder + "assets/img/**/*.{jpg,png,svg,gif,ico,webp}",
      // slick: source_folder + "/assets/slick/**/*.*",

   },
   clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
   gulp = require('gulp'),
   browsersync = require("browser-sync").create(),
   fileinclude = require("gulp-file-include"),
   del = require("del"),
   scss = require("gulp-sass"),
   autoprefixer = require("gulp-autoprefixer"),
   cssMediaQuerie = require("gulp-group-css-media-queries"),
   cleanCss = require("gulp-clean-css"),
   rename = require("gulp-rename"),
   uglifyEs = require("gulp-uglify-es").default,
   imagemin = require("gulp-imagemin"),
   webp = require("gulp-webp"),
   webpHtml = require("gulp-webp-html"),
   webpInHtml = require("gulp-webp-in-html"),
   webpCss = require("gulp-webpcss"),
   svgSprite = require("gulp-svg-sprite"),
   ttf2woff = require("gulp-ttf2woff"),
   ttf2woff2 = require("gulp-ttf2woff2"),
   fonter = require("gulp-fonter");


function browserSync() {
   browsersync.init({
      server: {
         baseDir: "./" + project_folder + "/"
      },
      port: 3000,
      notify: false
   })
}
function html() {
   return src(path.src.html)
      .pipe(fileinclude())
      .pipe(webpInHtml())
      .pipe(dest(path.build.html))
      .pipe(browsersync.stream())
}
function css() {
   return src(path.src.css)
      .pipe(
         cssMediaQuerie()
      )
      .pipe(
         autoprefixer({
            overrideBrowserslist: ["last 100 version"],
            cascade: true
         })
      )
      .pipe(webpCss())
      .pipe(dest(path.build.css))
      .pipe(dest(path.build.css))
      .pipe(cleanCss())
      .pipe(
         rename({
            extname: ".min.css"
         })
      )
      .pipe(dest(path.build.css))
      .pipe(browsersync.stream())
}
function js() {
   return src(path.src.js)
      .pipe(fileinclude())
      .pipe(dest(path.build.js))
      .pipe(
         uglifyEs()
      )
      .pipe(
         rename({
            extname: ".min.js"
         })
      )
      .pipe(dest(path.build.js))
      .pipe(browsersync.stream())
}
function img() {
   return src(path.src.img)
      .pipe(
         webp({
            quality: 70
         })
      )
      .pipe(dest(path.build.img))
      .pipe(src(path.src.img))
      .pipe(imagemin({
         interlaced: true,
         progressive: true,
         optimizationLevel: 3,
         svgoPlugins: [{ removeViewBox: false }]
      })
      )
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream())
}
// function fonts() {
//    src(path.src.fonts)
//       .pipe(ttf2woff())
//       .pipe(dest(path.build.fonts));
//    return src(path.src.fonts)
//       .pipe(ttf2woff2())
//       .pipe(dest(path.build.fonts));
// };
// function icon() {
//    return src(path.src.icon)
//       .pipe(dest(path.build.icon))
// }
// function iconconnect() {
//    return src(path.src.iconconnect)
//       .pipe(dest(path.build.iconconnect))
// }

// gulp.task('otf2ttf', function () {
//    return gulp.src([source_folder + '/fonts/*otf'])
//       .pipe(fonter({
//          formats: ['ttf']
//       }))
//       .pipe(dest(source_folder + '/fonts/'));
// })
// function fontsStyle() {
//    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
//    if (file_content == '') {
//       fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
//       return fs.readdir(path.build.fonts, function (err, items) {
//          if (items) {
//             let c_fontname;
//             for (var i = 0; i < items.length; i++) {
//                let fontname = items[i].split('.');
//                fontname = fontname[0];
//                if (c_fontname != fontname) {
//                   fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
//                }
//                c_fontname = fontname;
//             }
//          }
//       })
//    }
// }
function cb() {
}

function watchFiles() {
   gulp.watch([path.watch.html], html);
   gulp.watch([path.watch.css], css);
   gulp.watch([path.watch.js], js);
   // gulp.watch([path.watch.js], fonts);
   gulp.watch([path.watch.img], img);
   // gulp.watch([path.watch.slick], slick);
}
function clean() {
   return del(path.clean);
}
let build = gulp.series(clean, gulp.parallel(html, css, js, img));
let watch = gulp.parallel(build, watchFiles, browserSync);

// let build = gulp.series(clean, gulp.parallel(js, css, html, img, fonts, icon, iconconnect), fontsStyle);
// let watch = gulp.parallel(build, watchFiles, browserSync);
/// -------------------------------------

// exports.iconconnect = iconconnect;
// exports.icon = icon;
// exports.fontsStyle = fontsStyle;
// exports.fonts = fonts;
exports.js = js;
exports.css = css;
exports.img = img;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch; 