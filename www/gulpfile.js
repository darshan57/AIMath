var gulp = require('gulp'),
    amdOptimize = require("amd-optimize"),
    concat = require('gulp-concat');
var sourceDir = "./src/**/*.js";
var destDir = "./dist/js";

gulp.task('scripts', function(cb) {

    var js = gulp.src(sourceDir).pipe(amdOptimize("app",
            {
                name: "app",
                configFile: "./src/js/app.js",
                baseUrl: './src/js/'
            }
        ))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(destDir));
});
        
        gulp.task('default',["scripts"]);