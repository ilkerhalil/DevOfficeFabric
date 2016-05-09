var gulp = require('gulp');
gulp.task("default",function(){
 var fabric = {
     "jquery.fabric.min.cs":"../../bower_components/office-ui-fabric/dist/js/jquery.fabric.min.js",
     "fabric.min.css":"../../bower_components/office-ui-fabric/dist/css/fabric.min.css",
     "fabric.components.min.css":"../../bower_components\office-ui-fabric/dist/css/fabric.components.min.css",
     
 }
 for(var sourceFile in fabric) {
     gulp.src(fabric[sourceFile])
     .pipe(gulp.dest("fabric/"));
 }
    
});