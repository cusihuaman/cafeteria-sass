const {src,dest,watch} = require ('gulp');
const sass=require('gulp-sass')(require('sass'));
const postcss=require('gulp-postcss');
const autoprefixer=require('autoprefixer');

function css(done){
    //compilar sass
    src('src/scss/app.scss')//identificar archivo
        .pipe(sass({outputStyle:'compressed'}) )//compilar
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'))//guardar el css
    done();
}
function dev(){
    watch('src/scss/app.scss', css)
}
exports.css =css;
exports.dev=dev;