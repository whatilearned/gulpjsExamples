/**  below code to import all necessary plugins required for the automation **/
var gulp = require('gulp');
var concat = require('gulp-concat');
 var uglify = require('gulp-uglify'); 
var connect = require('connect'); 
var serve = require('serve-static'); 


/**   
 *  Gulp task funcation is used to execute the task. 
 *  Sytex gulp.task(<nameof theTask>,<function>) 
 *  The name parameter used to indetify the task. fuction is actula task we performing. 
 */

/**
 *  "styles" task wil merge all the css files exist in the css folder.
 *   cancat puling used to do the task. Once it merged and moved to dist folder. 
 *   if not exist the folder will created. 
 *   to Execute this task run command in the folder 
 *   prompt/> $ gupl styles 
 */
 gulp.task('styles', function() {
        return gulp.src('src/css/*.css')
            .pipe(concat('all.css'))
            .pipe(gulp.dest('dist'));
    });
    /**
     * "htmls" task will copy all html files form src folder to dist folder. 
     */
    
     gulp.task('htmls', function() {
        return gulp.src('src/*.html')
            .pipe(gulp.dest('dist'));
    });
    
/**
 *  "scripts" task wil merge all the js files exist in the js folder.
 *   cancat puling used to do the task. Once it merged  will execute 
 *   uglify plugin to minify the merged js files output will be moved to dist folder
 *   to Execute this task run command in the folder 
 *   prompt/> $ gupl scripts 
 */
    gulp.task('scripts', function() {
        return gulp.src('src/js/*.js')
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'));
    });

/**
 * "server" task will create a  local static server and excutes as dist folder 
 * as root folder 
 *  to Execute this task run command in the folder 
 *   prompt/> $ gupl server 
 */
    gulp.task('server', function() {
      return connect().use(serve(__dirname +"/dist"))
        .listen(8080)
        .on('listening', function() {
          console.log('Server Running: View at http://localhost:8080');
        });
    });
